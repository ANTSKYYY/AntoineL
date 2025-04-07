    const API_URL = "http://localhost:4002/server"; 

            async function fetchClassement() {
                try {
                    const response = await fetch(API_URL);
                    const data = await response.json();

                    const classement = data.standings[0].table;
                    const tbody = document.getElementById("tbody");

                    classement.forEach(team => {
                        const row = document.createElement("tr");
                        row.innerHTML = `
                            <th>${team.position}</th>
                            <td id="teamname">
                                <img src="${team.team.crest}" width="30" id="logoclub" alt="${team.team.name}">
                                <p id="nameclub">${team.team.shortName}</p>
                            </td>
                            <td>${team.points}</td>
                            <td>${team.playedGames}</td>
                            <td>${team.won}</td>
                            <td>${team.lost}</td>
                            <td>${team.goalDifference}</td>
                        `;
                        tbody.appendChild(row);
                    });

                } catch (error) {
                    console.error("Erreur lors de la récupération des données :", error);
                }
            }

            fetchClassement();