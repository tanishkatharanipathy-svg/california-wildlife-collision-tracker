// Initialize map
let map;
const markers = [];

function initMap() {
    map = L.map('mapContainer').setView([37.2, -119.4], 6);
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 19
    }).addTo(map);

    // Add markers for each hotspot
    hotspotData.forEach(hotspot => {
        const color = getMarkerColor(hotspot.risk);
        const icon = L.icon({
            iconUrl: `https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-${color}.png`,
            shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            shadowSize: [41, 41]
        });

        const marker = L.marker([hotspot.latitude, hotspot.longitude], { icon: icon })
            .bindPopup(`
                <div style="max-width: 250px;">
                    <h3>${hotspot.rank}. ${hotspot.location}</h3>
                    <p><strong>County:</strong> ${hotspot.county}</p>
                    <p><strong>Incidents/Year:</strong> ${hotspot.incidents}</p>
                    <p><strong>Species:</strong> ${hotspot.species}</p>
                    <p><strong>Risk Level:</strong> <span class="risk-badge badge-${hotspot.risk.toLowerCase()}">${hotspot.risk}</span></p>
                    <p><small>${hotspot.details}</small></p>
                </div>
            `)
            .addTo(map);
        
        markers.push(marker);
    });
}

function getMarkerColor(risk) {
    if (risk === 'CRITICAL') return 'red';
    if (risk === 'HIGH') return 'orange';
    return 'yellow';
}

// Populate rankings table
function populateRankingsTable() {
    const tableBody = document.getElementById('tableBody');
    tableBody.innerHTML = '';

    hotspotData.forEach(hotspot => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${hotspot.rank}</td>
            <td><strong>${hotspot.location}</strong></td>
            <td>${hotspot.county}</td>
            <td>${hotspot.region}</td>
            <td>${hotspot.incidents}</td>
            <td>${hotspot.species}</td>
            <td><span class="risk-badge badge-${hotspot.risk.toLowerCase()}">${hotspot.risk}</span></td>
        `;
        tableBody.appendChild(row);
    });
}

// Populate full data table
function populateFullDataTable() {
    const tableBody = document.getElementById('fullTableBody');
    tableBody.innerHTML = '';

    hotspotData.forEach(hotspot => {
        const row = document.createElement('tr');
        row.classList.add(`risk-${hotspot.risk.toLowerCase()}`);
        row.innerHTML = `
            <td>${hotspot.rank}</td>
            <td><strong>${hotspot.location}</strong></td>
            <td>${hotspot.county}</td>
            <td>${hotspot.incidents}</td>
            <td>${hotspot.cost}</td>
            <td>${hotspot.species}</td>
            <td><span class="risk-badge badge-${hotspot.risk.toLowerCase()}">${hotspot.risk}</span></td>
            <td><small>${hotspot.details}</small></td>
        `;
        tableBody.appendChild(row);
    });
}

// Search and filter functionality
function setupSearchAndFilters() {
    const searchInput = document.getElementById('searchInput');
    const regionFilter = document.getElementById('regionFilter');
    const tableSearch = document.getElementById('tableSearch');
    const riskFilter = document.getElementById('riskFilter');

    function filterRankingsTable() {
        const searchTerm = searchInput.value.toLowerCase();
        const regionTerm = regionFilter.value;
        const rows = document.querySelectorAll('#tableBody tr');

        rows.forEach(row => {
            const cells = row.querySelectorAll('td');
            const location = cells[1].textContent.toLowerCase();
            const region = cells[3].textContent;

            const locationMatch = location.includes(searchTerm);
            const regionMatch = !regionTerm || region === regionTerm;

            row.style.display = (locationMatch && regionMatch) ? '' : 'none';
        });
    }

    function filterFullDataTable() {
        const searchTerm = tableSearch.value.toLowerCase();
        const riskTerm = riskFilter.value;
        const rows = document.querySelectorAll('#fullTableBody tr');

        rows.forEach(row => {
            const cells = row.querySelectorAll('td');
            const location = cells[1].textContent.toLowerCase();
            const risk = cells[6].textContent.trim();

            const locationMatch = location.includes(searchTerm);
            const riskMatch = !riskTerm || risk.includes(riskTerm);

            row.style.display = (locationMatch && riskMatch) ? '' : 'none';
        });
    }

    searchInput.addEventListener('input', filterRankingsTable);
    regionFilter.addEventListener('change', filterRankingsTable);
    tableSearch.addEventListener('input', filterFullDataTable);
    riskFilter.addEventListener('change', filterFullDataTable);
}

// Chart initialization
function initCharts() {
    // Annual Collisions Chart
    const ctx1 = document.getElementById('annualChart').getContext('2d');
    new Chart(ctx1, {
        type: 'line',
        data: {
            labels: annualStats.labels,
            datasets: [
                {
                    label: 'Total Collisions',
                    data: annualStats.collisions,
                    borderColor: '#e74c3c',
                    backgroundColor: 'rgba(231, 76, 60, 0.1)',
                    borderWidth: 3,
                    fill: true,
                    tension: 0.4,
                    pointRadius: 6,
                    pointBackgroundColor: '#e74c3c',
                    pointBorderColor: '#fff',
                    pointBorderWidth: 2
                },
                {
                    label: 'Cost ($M)',
                    data: annualStats.costs,
                    borderColor: '#2a5298',
                    backgroundColor: 'rgba(42, 82, 152, 0.1)',
                    borderWidth: 3,
                    fill: true,
                    tension: 0.4,
                    pointRadius: 6,
                    pointBackgroundColor: '#2a5298',
                    pointBorderColor: '#fff',
                    pointBorderWidth: 2,
                    yAxisID: 'y1'
                }
            ]
        },
        options: {
            responsive: true,
            interaction: {
                mode: 'index',
                intersect: false,
            },
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: false
                }
            },
            scales: {
                y: {
                    type: 'linear',
                    display: true,
                    position: 'left',
                    title: {
                        display: true,
                        text: 'Collisions'
                    }
                },
                y1: {
                    type: 'linear',
                    display: true,
                    position: 'right',
                    title: {
                        display: true,
                        text: 'Cost ($M)'
                    },
                    grid: {
                        drawOnChartArea: false,
                    },
                }
            }
        }
    });

    // Species Chart
    const ctx2 = document.getElementById('speciesChart').getContext('2d');
    new Chart(ctx2, {
        type: 'doughnut',
        data: {
            labels: speciesData.labels,
            datasets: [{
                data: speciesData.data,
                backgroundColor: [
                    '#e74c3c',
                    '#3498db',
                    '#2ecc71',
                    '#f39c12',
                    '#9b59b6',
                    '#1abc9c'
                ],
                borderColor: '#fff',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom',
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return context.label + ': ' + context.parsed + ' animals';
                        }
                    }
                }
            }
        }
    });
}

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Initialize everything when page loads
document.addEventListener('DOMContentLoaded', function() {
    initMap();
    populateRankingsTable();
    populateFullDataTable();
    setupSearchAndFilters();
    initCharts();

    // Add animation to stat cards
    const statCards = document.querySelectorAll('.stat-card');
    statCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
});

// Add some interactivity
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
    }
});
