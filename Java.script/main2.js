    let n1,n2,n3,n4,n5;
    let ergebnis; let anzahlNoten = 0;
    let summe = 0;

    // variablen erstellt

    function tfAuslesen() {
        n1 = parseInt(document.getElementById("tfNote1").value);  //Auslesen Notenfeld 1 und Umwandeln in Zahl
        n2 = parseInt(document.getElementById("tfNote2").value);
        n3 = parseInt(document.getElementById("tfNote3").value);
        n4 = parseInt(document.getElementById("tfNote4").value);
        n5 = parseInt(document.getElementById("tfNote5").value);

        console.log(n1 + ";" + n2 + ";" + n3 + ";" + n4 + ";" + n5);  // Ausgabe der Konsole der eingelesenen Werte

        punktePruefen(n1); // es werden die einzelnen Eingaben auf Plausibilität geprüft
        punktePruefen(n2);
        punktePruefen(n3);
        punktePruefen(n4);
        punktePruefen(n5);

        ergebnis = summe / anzahlNoten;

        document.getElementById("ausgabe").innerHTML = ergebnis;




            if(ergebnis <=5) {
                document.getElementById("ausgabe").style.color = "crimson"

                } else {

                    if(ergebnis >5 && ergebnis <= 10) {
                        document.getElementById("ausgabe").style.color = "purple"

                        }else{
                            document.getElementById("ausgabe").style.color = "green";
                            document.getElementById("img").innerHTML = ergebnis


                    }

                }
    }

    // verschieden Ergebnissen werden farben zugewiesen

    function punktePruefen(punkte) {

        if (isNaN(punkte)) {

            console.log(punkte + "keine Zahl!")

        } else  if (punkte >= 0 &&  punkte <= 15) {
            summe = summe + punkte;
            anzahlNoten = anzahlNoten + 1;
        } else {
            console.log(punkte + "nichts da wallah das geht nicht")


        }

    } //in der Console werden die Eingaben geprüft auf Zahlen und größe der Zahlen />15 = NaN / NaN = Not a Number