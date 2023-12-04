const prompt = require("prompt-sync")();

console.log("Bien le bonjour voyageur. Avant toute chose, donne moi ton nom");

let personnage = prompt("Mets le nom de ton personnage : ");
let choice;

    console.log("Bienvenue dans cette aventure. Ton personnage est " + personnage);

    setTimeout(() => {
        console.log("Écoute-moi bien, car il se peut que " + personnage + " soit en danger. Il faut vite l'aider");

        setTimeout(() => {
            console.log(personnage + " se trouve dans une forêt peu commune où se cachent certaines créatures");

            setTimeout(() => {
                console.log(personnage + " avance dans le terrain boueux tout en étant caché par l'ombre des arbres");

                setTimeout(() => {
                    console.log("Le bruit de la forêt est pour le moins inquiétant dû au son du vent frappant contre les feuilles");

                    setTimeout(() => {
                        console.log("Un bruit de pas non loin de " + personnage + " se trouve dans des fougères");
                        
                        setTimeout(() => {
                            console.log("Que faire ?! S'approcher en restant vigilant/e ? Ou se tenir prêt/e à fuir tout en restant en retrait ?");
                            
                            setTimeout(() => {
                                choice = prompt("rester ? s'approcher ? : ");

                                if (choice === "s'approcher") {
                                    console.log(personnage + " s'approche de la fougère légèrement inquiet/e mais aussi confiant/e");
                                } else if (choice === "rester") {
                                    console.log(personnage + " ne bouge pas les yeux rivés sur la fougère pret a partir au moindre probléme");
                                } else {
                                    console.log("Choix invalide");
                                    return
                                }
                                setTimeout(() => {
                                    console.log("c'est alors qu'une sorte de lapin bondie de la fougére " + personnage + " tomba sur les fesses surpris/e mais en etant rassurer");
                                    setTimeout(() => {
                                        console.log(personnage + " n'a pas dormi depuis 2 jours il/elle a les yeux qui ferme doucement comme pour s'endormir");

                                        setTimeout(() => {
                                            console.log("il/elle voit un grand arbre digne d'un séquoia au loin");

                                                setTimeout(() => {
                                                    console.log(personnage + " décide de dormir non loin de l'arbre mais ou précisement ?");

                                                    setTimeout(() => {
                                                        console.log("sur une branche de l'arbre ou au pied de l'arbre ?");
                                                        
                                                        setTimeout(() => {
                                                            choice = prompt("au pied ? sur une branche ? : ");
                            
                                                        if (choice === "au pied") {
                                                            console.log(personnage + " décide de dormir au pied, supposant être trop fatigué.");
                                                            console.log("mais rester au pied est comme une invitation aux créatures, ce qui te destine à la mort");
                                                            console.log("FIN");
                                                            return;
                                                        } else if (choice === "sur une branche") {
                                                            console.log(personnage + " grimpe difficilement l'arbre dû à la fatigue mais évite de rester trop bas pour être hors de portée des créatures.");
                                                        } else {
                                                            console.log("Choix invalide");
                                                            return
                                                        
                                                        }

                                                            setTimeout(() => {
                                                                console.log("une fois sur l'arbre étant non serain/ne il/elle se demande quoi utiliser pour eviter de tomber ");

                                                                setTimeout(() => {
                                                                    console.log("une corde ? essayer de trouver un autre endroit ? ");

                                                                    setTimeout(() => {
                                                                        choice = prompt("une corde ? autre endroit ? : ");

                                                                    if (choice === "une corde") {
                                                                        console.log(personnage + " se met une corde autour du ventre et l'attache sur l'arbre");
                                                                        
                                                                        
                                                                    } else if (choice === "autre endroit") {
                                                                        console.log(personnage + " étant pas serien/ne se met a descendre seulement la fatigue lui fait faire une chute mortelle");
                                                                            console.log("FIN");
                                                                        return;
                                                                    } else {
                                                                        console.log("Choix invalide");
                                                                        return
                                                                        
                                                                    }
                                                                    setTimeout(() => {
                                                                        console.log("se sentant en sécuriter il/elle peux dormir tranquille");

                                                                        setTimeout(() => {
                                                                            console.log("le lendemain étant reposer il/elle peux repartir tranquille");
                                                                            setTimeout(() => {
                                                                                console.log("FIN");
                                                                            }, 3000);
                                                                        }, 3000); 
                                                                    }, 3000);
                                                                }, 3000);
                                                            }, 3000);
                                                        }, 3000);
                                                    }, 3000);
                                                }, 3000);
                                            }, 3000);
                                        }, 5000);
                                    }, 5000);
                                }, 3000);
                            }, 3000);
                        }, 3000);
                    }, 3000);
                }, 3000);
            }, 3000);
        }, 3000);
    }, 3000);
