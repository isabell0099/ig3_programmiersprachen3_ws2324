# App svelte

Diese Svelte-App implementiert ein einfaches Quiz mit Routing unter Verwendung des `svelte-spa-router`. Die App besteht aus zwei Hauptkomponenten: `Home`, `Quiz`. Das Routing wird in der Datei `App.svelte` mit Hilfe der Komponente `Router` definiert.

## Main-Components

1. **Home (Home.svelte):**

   - Stellt die Startseite der App dar.
   - beinhaltet DinoKarten mit Informationen über Dinos.
   - Bietet einen Startpunkt für Benutzer, um zum Quiz zu navigieren oder nach Dinos zu suchen.
   - besteht aus drei Hauptkomponenten: "Header", "Main" und "Footer".

   - Abrufen von Daten aus einer JSON-Datei
   - Aktualisieren von Komponenten auf der Grundlage von Benutzereingaben
   - Verwaltung eines Gruppenfilters.

2. **Quiz (Quiz.svelte):**
   - Implementiert die Quiz-Funktionalität.
   - Zeigt Fragen und Optionen an, ermöglicht es den Benutzern, Antworten auszuwählen, und führt durch das Quiz.
   - Verwaltet die Weiterleitung für quizbezogene Seiten.
   - bedinhaltet einen Fortschrittsbalken

## Components

1. **Header (Header.svelte):**
   Diese Svelte-Komponente stellt den Kopfbereich der Dino-Webseite dar. Sie enthält ein Logo, ein Sucheingabefeld, ein Filter-Dropdown, Buttons für soziale Medien (der Dino GMbH) und ein Quiz-Button.

   Eigenschaften und Funktionen:

   Wert: Bidirektionale Bindung für das Sucheingabefeld.
   handleGroupFilter: Funktion zur Handhabung der Gruppenfilterung basierend auf der ausgewählten Option im Dropdown-Feld.

   - Verwaltet die Benutzereingaben und den Gruppenfilter.
   - Kommuniziert mit der Komponente `Main`, um die angezeigten Daten zu aktualisieren.
   - Verwendet die Funktionen `handleGroupFilter` und `handleOnInput`, um Änderungen des Gruppenfilters bzw. Benutzereingaben zu verarbeiten.

2. **Main (Main.svelte):**

Diese Svelte-Komponente Zeigt den Hauptinhalt der Anwendung an, in dem Dinosaurierdaten angezeigt werden. Sie enthält eine Suchfunktion und zeigt eine Liste von Dinosaurierkarten an.

Importe: 
Die Konstanten INFO_TEXT und INTRO_TEXT sowie die Funktion filterBy werden importiert. Ebenso werden die Svelte-Komponenten TextWrapper und Cards eingebunden.

Schnittstellen: 
value steht für den Suchbegriff, data für alle Dinosaurierdaten, und filter für die Gruppenfilterung.
Lokale Variablen: json wird für die gefilterten Daten verwendet, während groupFilteredData nicht genutzt wird.
Reaktivität: Ein $:-Block wird ausgelöst, wenn sich der Wert von value ändert. filterBy wird verwendet, um die Daten zu filtern, zuerst nach dem Namen und dann optional nach der Gruppe.


Logik der Filterung

- Verwendet die aus der JSON-Datei abgerufenen Daten und aktualisiert sie auf der Grundlage von Benutzereingaben und Gruppenfilterung.

Die Komponente verwendet die filterBy-Funktion, um die Dinosaurierdaten auf der Grundlage der Suchanfrage (value) und eines zusätzlichen Filters (group) zu filtern. Stelle sicher, dass die filterBy-Funktion in Ihrer functions.js entsprechend definiert ist.

3. **Footer (Footer.svelte):**

   - Stellt die Fußzeile der Anwendung dar.
   - Kann zusätzliche Informationen oder Links enthalten.

   Die Komponente `Footer.svelte` ist für die Darstellung der Fußzeile der Webanwendung verantwortlich. Sie besteht aus drei Hauptabschnitten:

   **Seitenlinks:**

   - Abschnitt mit seitenbezogenen Links.
   - Enthält Links für "SITELINKS", "Kontakt" (Kontakt) und "Social Media".

     **Quicklinks:**

   - Abschnitt mit Schnellzugriffslinks.
   - Enthält Links für "QUICKLINKS", "Impressum" und "Datenschutz".

   **Kontaktinformationen:**

   - Abschnitt mit den Kontaktdaten der Dinosaurier GmbH.
   - Zeigt die Firmenadresse, einschließlich eines Instagram-Symbols, und Telefon-/Faxdetails.


 4. **Card (Card.svelte)** 

    - **Export von dinosaur:**
   Die Komponente erwartet eine Prop namens dinosaur, die ein Objekt mit den Informationen über den Dinosaurier enthält.

  - **HTML-Struktur:**
    besteht aus einer äußeren <div> mit der Klasse card-wrapper, die das gesamte Kartenlayout umschließt.
   Innerhalb der card-wrapper gibt es eine <div> mit der Klasse card-content, die das Raster für die Karteninhalte definiert. Die Informationen über den Dinosaurier, wie Name, Gruppe, Bild, zufällige Tatsache und Statistiken, werden innerhalb dieser Rasterstruktur platziert.

    -**Dynamische Inhalte:** 
    Die Werte für verschiedene Eigenschaften des Dinosauriers (dinosaur) werden dynamisch in den HTML-Elementen eingefügt. Zum Beispiel: {dinosaur["card number"]}, {dinosaur.name}, {dinosaur.group}, {dinosaur.img}, {dinosaur.random_fact}, {dinosaur.height}, {dinosaur.weight}, {dinosaur.iq}, {dinosaur.tooth_size}.

    -**Styling:** 
    Das Styling ist so konzipiert, dass eine Kartenansicht für den Dinosaurier erstellt wird.
    s gibt verschiedene Stilregeln für die äußere Kartenansicht (card-wrapper), den Inhalt der Karte (card-content), die Kartennummer (card-number), den Titel (card-title), das Bild (card-image), das Info-Symbol (info-icon), die Info (info), und die Statistiken (stats-wrapper).

    Die Karte hat auch einen Hover-Effekt (:hover), der die Karte beim Überfahren mit der Maus vergrößert.


## Functionality

- **Data Fetching:**

  - Die Anwendung verwendet die API "fetch", um Daten aus der Datei "data.json" zu laden.
  - Die abgerufenen Daten werden dann zum Rendern an die Komponente "Main" übergeben.

- **User Input:**

  - Die Komponente "Header" erfasst Benutzereingaben mit der Funktion "HandleOnInput".
  - Der Eingabewert wird dann zur dynamischen Aktualisierung des Inhalts an die Komponente "Main" weitergegeben.

- **Group Filtering:**
  - Die Komponente "Header" verwaltet den Gruppenfilter, und Änderungen werden über die Funktion "handleGroupFilter" an die Komponente "Main" weitergegeben.
  - Die "Main"-Komponente filtert den angezeigten Inhalt auf der Grundlage der ausgewählten Gruppe.




## QUIZ
-  **Verwendung** 

- Starte das Quiz, indem du dein Spielernamen mit einer Open Ai erstellst und auf die Button "Start" klickst.
- Beantworte jede Quizfrage, indem du den richtigen Dinosaurier auswählst.
- Benutze den "Überspringen"-Button, um zur nächsten Frage zu gelangen.
- Benutze den "Verlassen"-Button, um zur Hauptseite zurückzukehren.
- Am Ende des Quiz wird eine Meldung angezeigt, dass das Quiz abgeschlossen ist.
- Du Kannst auf den Button "Zurück zur Startseite" klicken, um zur Hauptseite zurückzukehren.


- **Struktur vom Quiz** 
**Hauptkomponente:** 
- Quiz.svelte 
**Import von Svelte-Komponenten und Bibliotheken:** 
- StartQuiz, CorrectAnswer, IncorrectAnswer, und PlayerName sind Svelte-Komponenten, die importiert werden.
- createEventDispatcher aus der "svelte"-Bibliothek wird importiert, um Ereignisse zwischen den Komponenten zu verteilen.
**src/assets:** 
Enthält Datendateien (data.json und quizData.json), die für Quizfragen und Dinosaurierinformationen verwendet werden.
- **Eigenschaften**
Verschiedene Zustände werden deklariert, um den Zustand der Anwendung zu verfolgen, z.B., quizStarted, nameGenerated, showCorrectAnswer, showIncorrectAnswer, totalQuestions, progress, usw.


-**Funktionalität**

- getRandoms(max): Generiert sechs zufällige, eindeutige Zahlen von 0 bis max.
- method(): Holt Daten aus zwei JSON-Dateien (data.json und quizData.json), generiert zufällige Fragen und stellt sie im QuestionArray dar.
- RandomQuestionManyDinos(): Generiert zufällig vier Dinosaurier für jede Frage und bestimmt den Dinosaurier mit dem höchsten Wert für die aktuelle Frage.
- selectOption(optionIndex): Überprüft die ausgewählte Antwortoption und zeigt die entsprechende Nachricht an (showCorrectAnswer oder showIncorrectAnswer).
- onNext(): Wechselt zur nächsten Frage oder beendet das Quiz.
- startQuiz(): Startet das Quiz, wenn der Spieler auf den "Start"-Button klickt.
- updateProgress(): Aktualisiert den Fortschrittsbalken basierend auf der aktuellen Frage.
- skipQuestion(): Überspringt die aktuelle Frage.


- **Logik**

Die Anzeige und Logik für verschiedene Abschnitte des Quiz (Startseite, Fragen, Antworten, Fortschrittsleiste, usw.) wird durch Bedingungen ({#if}) gesteuert.






## Usage

1. Clone the repository: `git clone https://github.com/your-username/svelte-web-app.git`
2. Navigate to the project directory: `cd svelte-web-app`
3. Install dependencies: `npm install`
4. Start the development server: `npm run dev`
5. Open your browser and visit `http://localhost:5000`

## Project Structure

- **src/components:**

  - Contains Svelte components (`Header.svelte`, `Main.svelte`, `Footer.svelte`) for modular code organization.

- **src/assets:**
  - Holds static assets, such as the `data.json` file.

## Dependencies

- None, as this is a basic Svelte app.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---





### Must-Have (~ bestehens-relevant)

- Lauffähiges Svelte-Projekt mit Quiz-Spiel
- Dynamisch geladene Inhalte (data.json,quizData)
- mind. 2 sinnvolle Svelte-Komponenten: 13 Komponenten (Card.svelte, Cards.svelte, CorrectAnswer.svelte, Footer.svelte, Header.svelte, Home.svelte, IncorrectAnswer.svelte, Main.svelte, PlayerName.svelte, Quiz.svelte, StartQuiz.svelte, Textwrapper.svelte, App.svelte)
- Einbindung einer API (REST)
- Benutzerinteraktion (Buttons, Filter, etc.): Sucheingabe, filterDropdown, button social media

### Should Have (~ relevant für Note vor dem Komma)

- Responsive Design (Mobile + Desktop)
- Vernünftiges Erscheinungsbild, das der Projektidee zuträglich ist
- Verschiedene Unterseiten (Routes): Home, Quiz 
- Sinnvolle Ordner- und Dateistruktur

### Could Have (~ relevant für die Note nach dem Komma)

- OpenAI-API-Anbindung: Gamer-Name generieren 



