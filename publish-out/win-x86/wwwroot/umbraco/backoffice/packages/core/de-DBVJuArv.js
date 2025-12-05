const t = {
  actions: {
    assigndomain: "Kulturen und Hostnamen",
    auditTrail: "Protokoll",
    browse: "Durchsuchen",
    changeDocType: "Dokumenttyp ändern",
    changeDataType: "Datentyp ändern",
    copy: "Kopieren",
    create: "Neu",
    createFor: (e) => e ? `Neu erstellen für ${e}` : "Neu",
    export: "Exportieren",
    createPackage: "Neues Paket",
    createGroup: "Neue Gruppe",
    delete: "Entfernen",
    disable: "Deaktivieren",
    editContent: "Inhalt bearbeiten",
    editSettings: "Einstellungen bearbeiten",
    emptyrecyclebin: "Papierkorb leeren",
    enable: "Aktivieren",
    exportDocumentType: "Dokumenttyp exportieren",
    importdocumenttype: "Dokumenttyp importieren",
    importPackage: "Paket importieren",
    liveEdit: "'Canvas'-Modus starten",
    logout: "Abmelden",
    move: "Verschieben",
    notify: "Benachrichtigungen",
    protect: "Öffentlicher Zugriff",
    publish: "Veröffentlichen",
    unpublish: "Veröffentlichung zurücknehmen",
    refreshNode: "Aktualisieren",
    republish: "Erneut veröffentlichen",
    remove: "Entfernen",
    rename: "Umbenennen",
    restore: "Wiederherstellen",
    chooseWhereToCopy: "Wähle worunter kopiert werden soll",
    chooseWhereToMove: "Wähle worunter verschoben werden soll",
    chooseWhereToImport: "Wähle wohin importiert werden soll",
    infiniteEditorChooseWhereToCopy: "Wähle wohin die ausgewählten Elemente kopiert werden soll",
    infiniteEditorChooseWhereToMove: "Wähle wohin die ausgewählten Elemente verschoben werden soll",
    toInTheTreeStructureBelow: "in der Baumstrukture",
    wasMovedTo: "wurde verschoben nach",
    wasCopiedTo: "wurde kopiert nach",
    wasDeleted: "wurde gelöscht",
    rights: "Berechtigungen",
    rollback: "Zurücksetzen",
    sendtopublish: "Zur Veröffentlichung einreichen",
    sendToTranslate: "Zur Übersetzung senden",
    setGroup: "Gruppe festlegen",
    sort: "Sortieren",
    translate: "Übersetzen",
    update: "Aktualisieren",
    setPermissions: "Berechtigung festlegen",
    unlock: "Freigeben",
    createblueprint: "Inhaltsvorlage anlegen",
    resendInvite: "Einladung erneut versenden",
    viewActionsFor: (e) => e ? `Aktionen anzeigen für ${e}` : "Aktionen anzeigen"
  },
  actionCategories: {
    content: "Inhalt",
    administration: "Administration",
    structure: "Struktur",
    other: "Anderes"
  },
  actionDescriptions: {
    assignDomain: 'Erlaube Zugriff auf "Kultur und Hostname"-Einstellungen',
    auditTrail: "Erlaube Zugriff auf Bearbeiten-Verlauf",
    browse: "Erlaube das Anzeigen eines Knotens",
    changeDocType: "Erlaube Ändern des Dokumenten-Typs",
    copy: "Erlaube Kopieren",
    create: "Erlaube Erzeugen",
    delete: "Erlaube Entfernen",
    move: "Erlaube Verschieben",
    protect: 'Erlaube Zugriff auf "Öffentlich zugänglich"-Einstellungen',
    publish: "Erlaube Veröffentlichung",
    unpublish: "Erlaube Rücknahme der Veröffentlichung",
    rights: "Erlaube Zugriff auf die Berechtigungen",
    rollback: "Erlaube Zurücksetzen auf eine vorherige Version",
    sendtopublish: "Erlaube Anforderungen von Veröffentlichungen",
    sendToTranslate: "Erlaube Anfordern von Übersetzungen",
    sort: "Erlaube Sortieren",
    translate: "Erlaube Übersetzung",
    update: "Erlaube Sichern von Änderungen",
    createblueprint: "Erlaube Anlegen von Inhaltsvorlagen",
    notify: "Erlaube das Einrichten von Benachrichtungen für Inhalte"
  },
  apps: {
    umbContent: "Inhalt",
    umbInfo: "Info"
  },
  assignDomain: {
    permissionDenied: "Erlaubnis verweigert.",
    addNew: "Neue Domain hinzufügen",
    addCurrent: "Aktuelle Domain hinzufügen",
    remove: "entfernen",
    invalidNode: "Ungültiges Element.",
    invalidDomain: "Format der Domain ungültig.",
    duplicateDomain: "Domain wurde bereits zugewiesen.",
    language: "Sprache",
    domain: "Domain",
    domainCreated: "Domain '%0%' hinzugefügt",
    domainDeleted: "Domain '%0%' entfernt",
    domainExists: "Die Domain '%0%' ist bereits zugeordnet",
    domainUpdated: "Domain '%0%' aktualisiert",
    orEdit: "Domains bearbeiten",
    domainHelpWithVariants: `Gültige Domain-Namen sind: "example.com", "www.example.com", "example.com:8080", oder "https://www.example.com/".
     Außerdem werden Pfade mit erstem URL-Segment unterstützt z. B.: "example.com/en" or "/en".`,
    inherit: "Vererben",
    setLanguage: "Kultur",
    setLanguageHelp: `Definiert die Kultureinstellung für untergeordnete Elemente dieses Elements oder vererbt vom übergeordneten Element.
    Wird auch auf das aktuelle Element angewendet, sofern auf tieferer Ebene keine Domain zugeordnet ist.`,
    setDomains: "Domainen"
  },
  buttons: {
    clearSelection: "Auswahl aufheben",
    select: "Auswählen",
    somethingElse: "Etwas anderes machen",
    bold: "Fett",
    deindent: "Ausrücken",
    formFieldInsert: "Formularelement einfügen",
    graphicHeadline: "Graphische Überschrift einfügen",
    htmlEdit: "HTML bearbeiten",
    indent: "Einrücken",
    italic: "Kursiv",
    justifyCenter: "Zentriert",
    justifyLeft: "Linksbündig",
    justifyRight: "Rechtsbündig",
    linkInsert: "Link einfügen",
    linkLocal: "Anker einfügen",
    listBullet: "Aufzählung",
    listNumeric: "Nummerierung",
    macroInsert: "Makro einfügen",
    pictureInsert: "Abbildung einfügen",
    publishAndClose: "Veröffentlichen und schliessen",
    publishDescendants: "Veröffentlichen mit Unterknoten",
    relations: "Datenbeziehungen bearbeiten",
    returnToList: "Zurück zur Liste",
    save: "Speichern",
    saveAndClose: "Sichern und schliessen",
    saveAndPublish: "Speichern und veröffentlichen",
    saveToPublish: "Speichern und zur Abnahme übergeben",
    saveListView: "Listenansicht sichern",
    schedulePublish: "Veröffentlichung planen",
    saveAndPreview: "Vorschau",
    showPageDisabled: "Die Vorschaufunktion ist deaktiviert, da keine Vorlage zugewiesen ist",
    styleChoose: "Stil auswählen",
    styleShow: "Stil anzeigen",
    tableInsert: "Tabelle einfügen",
    generateModelsAndClose: "Erzeuge Daten-Model und schliesse",
    saveAndGenerateModels: "Sichern und Daten-Model erzeugen",
    undo: "Zurücknehmen",
    redo: "Erneut anwenden",
    deleteTag: "TAG entfernen",
    confirmActionCancel: "Abbrechen",
    confirmActionConfirm: "Bestätigen",
    morePublishingOptions: "Mehr Veröffentlichungs Optionen",
    submitChanges: "Senden"
  },
  auditTrailsMedia: {
    delete: "Medie gelöscht",
    move: "Medie verschoben",
    copy: "Medie kopiert",
    save: "Medie gesichert"
  },
  auditTrails: {
    atViewingFor: "Anzeigen als",
    delete: "Inhalt gelöscht",
    unpublish: "Inhalt unveröffentlicht",
    unpublishvariant: "Inhalt unveröffentlicht für Sprache: %0% ",
    publish: "Inhalt veröffentlicht",
    publishvariant: "Inhalt veröffentlicht für Sprache: %0% ",
    save: "Inhalt gesichert",
    savevariant: "Inhalt gesichert für Sprache: %0%",
    move: "Inhalt verschoben",
    copy: "Inhalt kopiert",
    rollback: "Inhalt auf vorherige Version geändert",
    sendtopublish: "Veröffentlichung für Inhalt angefordert",
    sendtopublishvariant: "Veröffentlichung für Inhalt angefordert in Sprache: %0%",
    sort: "Unterknoten wurden sortiert von Benutzer",
    custom: "%0%",
    contentversionpreventcleanup: "Versionsbereinigung deaktiviert für Version: %0%",
    contentversionenablecleanup: "Versionsbereinigung aktiviert für Version: %0%",
    smallCopy: "Kopieren",
    smallPublish: "Veröffentlichen",
    smallPublishVariant: "Veröffentlichen",
    smallMove: "Verschieben",
    smallSave: "Sichern",
    smallSaveVariant: "Sichern",
    smallDelete: "Entfernen",
    smallUnpublish: "Veröffentlichung zurücknehmen",
    smallUnpublishVariant: "Veröffentlichung zurücknehmen",
    smallRollBack: "Vorgängerversion wieder herstellen",
    smallSendToPublish: "Veröffentlichung anfordern",
    smallSendToPublishVariant: "Veröffentlichung anfordern",
    smallSort: "Sortieren",
    smallCustom: "Benutzerdefiniert",
    smallContentVersionPreventCleanup: "Speichern",
    smallContentVersionEnableCleanup: "Speichern",
    historyIncludingVariants: "Verlauf (alle Variationen)"
  },
  codefile: {
    createFolderIllegalChars: "Der Verzeichnisname darf keine ungültigen Zeichen enthalten.",
    deleteItemFailed: "Folgendes Element konnte nicht entfernt werden: %0%"
  },
  content: {
    isPublished: "Ist veröffentlicht",
    about: "Über dieses Dokument",
    alias: "Alias",
    alternativeTextHelp: "(Wie würden Sie das Bild über das Telefon beschreiben?)",
    alternativeUrls: "Alternative Links",
    clickToEdit: "Klicken, um das Dokument zu bearbeiten",
    createBy: "Erstellt von",
    createByDesc: "Ursprünglicher Autor",
    updatedBy: "Aktualisiert von",
    createDate: "Erstellt am",
    createDateDesc: "Erstellungszeitpunkt des Dokuments",
    documentType: "Dokumenttyp",
    editing: "In Bearbeitung",
    expireDate: "Veröffentlichung aufheben am",
    itemChanged: "Dieses Dokument wurde nach dem Veröffentlichen bearbeitet.",
    itemNotPublished: "Dieses Dokument ist nicht veröffentlicht.",
    lastPublished: "Zuletzt veröffentlicht",
    noItemsToShow: "Keine Elemente anzuzeigen",
    listViewNoItems: "Diese Liste enthält keine Einträge.",
    listViewNoContent: "Es wurden keine untergeordneten Elemente hinzugefügt",
    listViewNoMembers: "Es wurden keine Mitglieder hinzugefügt",
    mediatype: "Medientyp",
    mediaLinks: "Verweis auf Medienobjekt(e)",
    membergroup: "Mitgliedergruppe",
    memberrole: "Mitgliederrolle",
    membertype: "Mitglieder-Typ",
    noChanges: "Es wurden keine Änderungen vorgenommen",
    noDate: "Kein Datum gewählt",
    nodeName: "Name des Dokument",
    noMediaLink: "Dieses Media-Element hat keinen Link",
    noProperties: "Diesem Element kann kein Inhalt zugewiesen werden",
    otherElements: "Eigenschaften",
    parentNotPublished: `Dieses Dokument ist veröffentlicht aber nicht sichtbar,
      da das übergeordnete Dokument '%0%' nicht publiziert ist
    `,
    parentCultureNotPublished: `Diese Kultur wurde veröffentlicht, aber wird nicht angezeigt,
      weil sie auf dem Oberknoten '%0%' unveröffentlicht ist
    `,
    parentNotPublishedAnomaly: "Ups! Dieses Dokument ist veröffentlicht aber nicht im internen Cache aufzufinden: Systemfehler.",
    getUrlException: "Der URL wurde nicht gefunden",
    routeError: "Dieses Dokument wurde veröffentlicht, aber sein URL würde mit Inhalt %0% kollidieren",
    routeErrorCannotRoute: "Dieses Dokument wurde veröffentlicht, aber sein URL kann nicht aufgelöst (routed) werden",
    publish: "Veröffentlichen",
    published: "Veröffentlicht",
    publishedPendingChanges: "Veröffentlicht (Änderungen bereit)",
    publishStatus: "Publikationsstatus",
    publishDescendantsHelp: "Wähle <em>Veröffentlichen mit Unterknoten</em> zum Veröffentlichen <strong>der gewählten Sprache</strong> samt aller Unterknoten der selben Sprache, um ihren Inhalt öffentlich verfügbar zu machen.",
    publishDescendantsWithVariantsHelp: "Wähle <em>Veröffentlichen mit Unterknoten</em> zum Veröffentlichen <strong>der gewählten Sprache</strong> samt aller Unterknoten der selben Sprache, um ihren Inhalt öffentlich verfügbar zu machen.",
    releaseDate: "Veröffentlichen am",
    unpublishDate: "Veröffentlichung widerrufen am",
    removeDate: "Datum entfernen",
    setDate: "Datum wählen",
    sortDone: "Sortierung abgeschlossen",
    sortHelp: `Um die Dokumente zu sortieren, ziehen Sie sie einfach an die gewünschte Position.
      Sie können mehrere Zeilen markieren indem Sie die Umschalttaste ("Shift") oder die Steuerungstaste ("Strg") gedrückt halten
    `,
    statistics: "Statistiken",
    titleOptional: "Titel (optional)",
    altTextOptional: "Alternativtext (optional)",
    captionTextOptional: "Beschriftung (optional)",
    type: "Typ",
    unpublish: "Veröffentlichung widerrufen",
    unpublished: "Entwurf",
    notCreated: "Nicht angelegt",
    updateDate: "Zuletzt bearbeitet am",
    updateDateDesc: "Letzter Änderungszeitpunkt des Dokuments",
    uploadClear: "Datei(en) entfernen",
    uploadClearImageContext: "Klicke hier um das das Bild vom Medienelement zu entfernen.",
    uploadClearFileContext: "Klicke hier um das das Bild vom Medienelement zu entfernen.",
    urls: "Link zum Dokument",
    memberof: "Mitglied der Gruppe(n)",
    notmemberof: "Kein Mitglied der Gruppe(n)",
    childItems: "Untergeordnete Elemente",
    target: "Ziel",
    scheduledPublishServerTime: "Dies führt zur folgenden Zeit auf dem Server:",
    scheduledPublishDocumentation: '<a href="https://docs.umbraco.com/umbraco-cms/fundamentals/data/scheduled-publishing#timezones" target="_blank" rel="noopener">Was bedeutet dies?</a>',
    nestedContentDeleteItem: "Wollen Sie dieses Element wirklich entfernen?",
    nestedContentDeleteAllItems: "Sicher das Sie alle Elemente entfernen wollen?",
    nestedContentEditorNotSupported: `Eigenschaft %0% verwendet Editor %1%,
      welcher nicht von Nested Content unterstützt wird.
    `,
    nestedContentNoContentTypes: "Keine Dokument-Typen für diese Eigenschaft konfiguriert.",
    nestedContentAddElementType: "Elementtyp hinzufügen",
    nestedContentSelectElementTypeModalTitle: "Elementtype auswählen",
    nestedContentGroupHelpText: `Wählen Sie die Gruppe aus von der die Eigenschaften angezeigt werden soll. Sollte der Wert leer sein
      wird die erste Gruppe des Elementtypen verwendet.
    `,
    nestedContentTemplateHelpTextPart1: `Geben Sie eine Angular Anweisung an um den Namen für das jweilige Element
      zu bestimmen. Verwende
    `,
    nestedContentTemplateHelpTextPart2: "um den Index des Elements anzuzeigen.",
    nestedContentNoGroups: "Das ausgewählte Element verfügt nicht über unterstützte Gruppen. (Tabs werden von diesem Editor nicht unterstützt, entweder Sie ändern diese zu Gruppen oder Sie verwenden den Block List Editor.",
    addTextBox: "Füge ein weiteres Textfeld hinzu",
    removeTextBox: "Entferne dieses Textfeld",
    contentRoot: "Inhalt-Basis",
    includeUnpublished: "Inklusive Entwürfen: veröffentliche auch unveröffentlichte Elemente.",
    isSensitiveValue: `Dieser Wert ist verborgen.
      Wenn Sie diesen Wert einsehen müssen, wenden Sie sich bitte an einen Administrator.
    `,
    isSensitiveValue_short: "Dieser Wert ist verborgen.",
    languagesToPublish: "Welche Sprache möchten Sie veröffentlichen?",
    languagesToSendForApproval: "Welche Sprachen möchten Sie zur Freigabe schicken?",
    languagesToSchedule: "Welche Sprachen möchten Sie zu einer bestimmten Zeit veröffentlichen?",
    languagesToUnpublish: `Wählen Sie die Sprachen, deren Veröffentlichung zurück genommen werden soll.
      Das Zurücknehmen der Veröffentlichung einer Pflichtsprache betrifft alle Sprachen.
    `,
    variantsWillBeSaved: "Alle neuen Variationen werden gespeichert.",
    variantsToPublish: "Welche Variationen wollen Sie veröffentlichen?",
    variantsToSave: "Wählen Sie welche Variation gespeichert werden soll.",
    publishRequiresVariants: "Folgende Variationen werden benötigt um das Element veröffentlichen zu können: ",
    notReadyToPublish: "Wir sind für Veröffentlichungen bereit",
    readyToPublish: "Bereit zu Veröffentlichen?",
    readyToSave: "Bereit zu Sichern?",
    resetFocalPoint: "Fokus zurücksetzten.",
    sendForApproval: "Freigabe anfordern",
    schedulePublishHelp: "Wählen Sie Datum und Uhrzeit für die Veröffentlichung bzw. deren Rücknahme.",
    createEmpty: "Neues Element anlegen",
    createFromClipboard: "Aus der Zwischenablage einfügen",
    nodeIsInTrash: "Dieses Element befindet sich im Papierkorb.",
    variantSaveNotAllowed: "Speichern ist nicht erlaubt.",
    variantPublishNotAllowed: "Veröffentlichen ist nicht erlaubt.",
    variantSendForApprovalNotAllowed: "Zur Genehmigung senden ist nicht erlaubt.",
    variantScheduleNotAllowed: "Plannung ist nicht erlaubt",
    variantUnpublishNotAllowed: "Veröffentlichung zurücknehmen ist nicht erlaubt.",
    saveModalTitle: "Speichern"
  },
  blueprints: {
    createBlueprintFrom: "Erzeuge eine neue Inhaltsvorlage von <em>%0%</em>",
    blankBlueprint: "Leer",
    selectBlueprint: "Wählen Sie eine Inhaltsvorlage",
    createdBlueprintHeading: "Inhaltsvorlage erzeugt",
    createdBlueprintMessage: "Inhaltsvorlage von '%0%' wurde erzeugt",
    duplicateBlueprintMessage: "Eine gleichnamige Inhaltsvorlage ist bereits vorhanden",
    blueprintDescription: `Eine Inhaltsvorlage ist vordefinierter Inhalt,
      den ein Redakteur als Basis für neuen Inhalt verwenden kann
    `
  },
  entityDetail: {
    notFoundTitle: (e) => `${e ?? "Element"} nicht gefunden`,
    notFoundDescription: (e) => `Der angeforderte ${e ?? "element"} konnte nicht gefunden werden. Bitte überprüfen Sie die URL und versuchen Sie es erneut.`,
    forbiddenTitle: (e) => `${e ?? "Element"} nicht verfügbar`,
    forbiddenDescription: (e) => `Sie haben keine Berechtigung, auf ${e ?? "dieses Element"} zuzugreifen. Bitte wenden Sie sich an Ihren Administrator, um Unterstützung zu erhalten.`
  },
  media: {
    clickToUpload: "Für Upload klicken",
    orClickHereToUpload: "oder klicken Sie hier um eine Datei zu wählen",
    disallowedFileType: "Dieser Dateityp darf nicht hochgeladen werden",
    invalidFileName: "Diese Datei kann nicht hochgeladen werden wil der Dateiname ungültig ist.",
    disallowedMediaType: "Diese Datei kann nicht hochgeladen werden, der Medienttype mit dem Alias '%0%' ist hier nicht erlaubt.",
    maxFileSize: "Max. Dateigröße ist",
    mediaRoot: "Media-Basis",
    moveToSameFolderFailed: "Eltern- und Ziel-Verzeichnis dürfen nicht übereinstimmen",
    createFolderFailed: "Unter Element Id %0% konnte kein Verzeichnis angelegt werden",
    renameFolderFailed: "Das Verzeichnis mit Id %0% konnte nicht umbenannt werden",
    dragAndDropYourFilesIntoTheArea: "Wählen Sie Dateien aus und ziehen Sie diese in diesen Bereich",
    uploadNotAllowed: "Hochladen ist in diesem Bereich nicht erlaubt."
  },
  member: {
    createNewMember: "Neues Mitglied anlegen",
    allMembers: "Alle Mitglieder",
    duplicateMemberLogin: "Ein Mitglied mit diesem Login existiert bereits.",
    memberGroupNoProperties: "Mitgliedsgruppen haben keine weiteren editierbaren Eigenschaften.",
    memberHasGroup: "Das Mitglied ist bereits in der Gruppe '%0%'",
    memberHasPassword: "Das Mitglied hat bereits ein Passwort",
    memberLockoutNotEnabled: "Sperren ist nicht aktiviert für dieses Mitglied.",
    memberNotInGroup: "Das Mitglied ist nicht in der Gruppe '%0%'",
    "2fa": "Zwei-Faktor-Authentifizierung"
  },
  contentType: {
    copyFailed: "Kopieren des Dokumenttyps fehlgeschlagen",
    moveFailed: "Bewegen des Dokumenttyps fehlgeschlagen"
  },
  mediaType: {
    copyFailed: "Kopieren des Medienttyps fehlgeschlagen",
    moveFailed: "Bewegen des Medienttyps fehlgeschlagen",
    autoPickMediaType: "Automatische auswahl."
  },
  memberType: {
    copyFailed: "Kopieren des Mitgliedtyps fehlgeschlagen"
  },
  create: {
    chooseNode: "An welcher Stellen wollen Sie das Element erstellen",
    createUnder: "Neues Element unterhalb von",
    createContentBlueprint: "Wählen Sie einen Dokumenttyp für eine Inhaltsvorlage",
    enterFolderName: "Geben Sie einen Verzeichnisnamen ein",
    updateData: "Wählen Sie einen Namen und einen Typ",
    noDocumentTypes: 'Es stehen keine erlaubten Dokumenttypen zur Verfügung. Sie müssen diese in den Einstellungen (unter "Dokumenttypen") aktivieren.',
    noDocumentTypesAtRoot: 'Es stehen keine erlaubten Dokumenttypen zur Verfügung. Sie müssen diese in den Einstellungen (unter "Dokumenttypen") aktivieren.',
    noDocumentTypesWithNoSettingsAccess: `Die im Inhaltsbaum ausgewählte Seite
      erlaubt keine Unterseiten.
    `,
    noDocumentTypesEditPermissions: "Bearbeitungsrechte für diesen Dokumenttyp",
    noDocumentTypesCreateNew: "Neuen Dokumenttypen erstellen",
    noDocumentTypesAllowedAtRoot: 'Keine Dokumenttypen vorhanden welche hier eingefügt werden dürfen. Sie müssen diese in den Einstellungen (unter "Dokumenttypen") aktivieren.',
    noMediaTypes: `Es stehen keine erlaubten Medientypen zur Verfügung.
      Sie müssen diese in den Einstellungen (unter "Medientypen") aktivieren.`,
    noMediaTypesWithNoSettingsAccess: `Das im Strukturbaum ausgewählte Medienelement
      erlaubt keine untergeordneten Elemente.
    `,
    noMediaTypesEditPermissions: "Bearbeitungsrechte für diesen Medientyp",
    documentTypeWithoutTemplate: "Dokumenttyp ohne Vorlage",
    documentTypeWithTemplate: "Dokumenttyp mit Template",
    documentTypeWithTemplateDescription: `Die Definition für eine Inhaltsseite welche von einem
      Redakteur im Inhaltsbaum angelgt werden können und direkt über die URL aufgerufen werden kann.
    `,
    documentType: "Dokumenttype",
    documentTypeDescription: `Die Definition für eine Inhaltsseite welche von einem
      Redakteur im Inhaltsbaum angelgt werden können und direkt über die URL aufgerufen werden kann.
    `,
    elementType: "Elementtyp",
    elementTypeDescription: `Definiert die Vorlage für sich wiederholende Eigenschaften, zum Beispiel, in einer 'Block
      List' oder im 'Nested Content' Editor.
    `,
    composition: "Komposition",
    compositionDescription: `Definiert eine wiederverwendbare Komposition von Eigenschaften welche in anderen
      Dokumenttypen wiederverwendet werden können.
    `,
    folder: "Ordner",
    folderDescription: `Werden benützt um Dokumenttypen, Komposition und Elementtypen in diesem
      Dokumenttypbaums zu organisieren.
    `,
    newFolder: "Neues Verzeichnis",
    newDataType: "Neuer Datentyp",
    newJavascriptFile: "Neue JavaScript-Datei",
    newEmptyPartialView: "Neue leere Partial-View",
    newPartialViewMacro: "Neues Partial-View-Makro",
    newPartialViewFromSnippet: "Neue Partial-View nach Vorlage",
    newPartialViewMacroFromSnippet: "Neues Partial-View-Makro nach Vorlage",
    newPartialViewMacroNoMacro: "Neues Partial-View-Makro (ohne Makro)",
    newStyleSheetFile: "Neue Style-Sheet-Datei"
  },
  dashboard: {
    browser: "Website anzeigen",
    dontShowAgain: "- Verstecken",
    nothinghappens: "Wenn Umbraco nicht geöffnet wurde, wurde möglicherweise das Pop-Up unterdrückt.",
    openinnew: "wurde in einem neuen Fenster geöffnet",
    restart: "Neu öffnen",
    visit: "Besuchen",
    welcome: "Willkommen"
  },
  prompt: {
    stay: "Bleiben",
    discardChanges: "Änderungen verwerfen",
    unsavedChanges: "Es gibt ungesicherte Änderungen",
    unsavedChangesWarning: `Wollen Sie diese Seite wirklich verlassen?
      - es gibt ungesicherte Änderungen
    `,
    confirmListViewPublish: "Veröffentlichen macht die ausgewählten Elemente auf der Website sichtbar.",
    confirmListViewUnpublish: `Aufheben der Veröffentlichung entfernt die ausgewählten Elemente
      und ihre Unterknoten von der Website.
    `,
    confirmUnpublish: "Aufheben der Veröffentlichung entfernt diese Seite und ihre Unterseiten von der Website.",
    doctypeChangeWarning: `Es gibt ungesicherte Änderungen.
      Ändern des Dokumenttyps macht diese rückgängig.
    `
  },
  bulk: {
    done: "Fertig",
    deletedItem: "%0% Element entfernt",
    deletedItems: "%0% Elemente entfernt",
    deletedItemOfItem: "%0% von %1% Element entfernt",
    deletedItemOfItems: "%0% von %1% Elementen entfernt",
    publishedItem: "%0% Element veröffentlicht",
    publishedItems: "%0% Elemente veröffentlicht",
    publishedItemOfItem: "%0% von %1% Element veröffentlicht",
    publishedItemOfItems: "%0% von %1% Elementen veröffentlicht",
    unpublishedItem: "%0% Veröffentlichung aufgehoben",
    unpublishedItems: "%0% Veröffentlichungen aufgehoben",
    unpublishedItemOfItem: "%0% von %1% Veröffentlichung aufgehoben",
    unpublishedItemOfItems: "%0% von %1% Veröffentlichungen aufgehoben",
    movedItem: "%0% Element verschoben",
    movedItems: "%0% Elemente verschoben",
    movedItemOfItem: "%0% von %1% Element verschoben",
    movedItemOfItems: "%0% von %1% Elementen verschoben",
    copiedItem: "%0% Element kopiert",
    copiedItems: "%0% Elemente kopiert",
    copiedItemOfItem: "%0% von %1% Element kopiert",
    copiedItemOfItems: "%0% von %1% Elementen kopiert"
  },
  defaultdialogs: {
    nodeNameLinkPicker: "Name des Link",
    urlLinkPicker: "Link",
    anchorLinkPicker: "Anker / querystring",
    anchorInsert: "Name",
    closeThisWindow: "Fenster schließen",
    confirmdelete: "Wollen Sie dies wirklich entfernen",
    confirmdeleteNumberOfItems: "Sicher das Sie <strong>%0%</strong> von <strong>%1%</strong> Elementen löschen wollen?",
    confirmdisable: "Wollen Sie folgendes wirklich deaktivieren",
    confirmremove: "Sicher das Sie es entfernen wollen?",
    confirmremoveusageof: "Sicher das Sie die Verwendung von <strong>%0%</strong> entfernen wollen?",
    confirmlogout: "Sind Sie sich wirklich abmelden?",
    confirmSure: "Sind Sie sicher?",
    cut: "Ausschneiden",
    editDictionary: "Wörterbucheintrag bearbeiten",
    editLanguage: "Sprache bearbeiten",
    editSelectedMedia: "Ausgewähltes Medien",
    insertAnchor: "Anker einfügen",
    insertCharacter: "Zeichen einfügen",
    insertgraphicheadline: "Grafische Überschrift einfügen",
    insertimage: "Abbildung einfügen",
    insertlink: "Link einfügen",
    insertMacro: "klicken um Macro hinzuzufügen",
    inserttable: "Tabelle einfügen",
    languagedeletewarning: "Dies entfernt die Sprache",
    languageChangeWarning: `
      Die Kultur-Variante einer Sprache zu ändern ist möglicherweise eine aufwendige Operation und führt zum Erneuern von Inhalts-Zwischenspeicher und Such-Index.
    `,
    lastEdited: "Zuletzt bearbeitet",
    link: "Verknüpfung",
    linkinternal: "Internen Link",
    linklocaltip: 'Wenn lokale Links verwendet werden, füge ein "#" vor den Link ein',
    linknewwindow: "In einem neuen Fenster öffnen?",
    macroDoesNotHaveProperties: "Dieses Makro enthält keine einstellbaren Eigenschaften.",
    paste: "Einfügen",
    permissionsEdit: "Berechtigungen bearbeiten für",
    permissionsSet: "Berechtigungen vergeben für",
    permissionsSetForGroup: "Berechtigungen vergeben für %0% für Benutzer-Gruppe %1%",
    permissionsHelp: "Wählen Sie die Benutzer-Gruppe, deren Berechtigungen Sie setzen möchten",
    recycleBinDeleting: `Der Papierkorb wird geleert.
      Bitte warten Sie und schließen Sie das Fenster erst, wenn der Vorgang abgeschlossen ist.
    `,
    recycleBinIsEmpty: "Der Papierkorb ist leer",
    recycleBinWarning: "Wenn Sie den Papierkorb leeren, werden die enthaltenen Elemente endgültig gelöscht. Dieser Vorgang kann nicht rückgängig gemacht werden.",
    regexSearchError: `
      Der Webservice von <a target='_blank' rel='noopener' href='http://regexlib.com'>regexlib.com</a> ist zur Zeit nicht erreichbar. Bitte versuchen Sie es später erneut.`,
    regexSearchHelp: `
      Finden Sie einen vorbereiteten regulären Ausdruck zur Validierung der Werte, die in dieses Feld eingegeben werden - zum Beispiel 'email, 'plz', 'URL' oder ähnlich.
    `,
    removeMacro: "Macro entfernen",
    requiredField: "Pflichtfeld",
    sitereindexed: "Die Website-Index wurd neu erstellt",
    siterepublished: `Der Zwischenspeicher der Website wurde aktualisiert und alle veröffentlichten Inhalte sind jetzt auf dem neuesten Stand.
      Bisher unveröffentliche Inhalte wurden dabei nicht veröffentlicht.
    `,
    siterepublishHelp: `Der Zwischenspeicher der Website wird aktualisiert und der veröffentlichte Inhalt auf den neuesten Stand gebracht.
      Unveröffentlichte Inhalte bleiben dabei weiterhin unveröffentlicht.
    `,
    tableColumns: "Anzahl der Spalten",
    tableRows: "Anzahl der Zeilen",
    thumbnailimageclickfororiginal: "Für Originalgröße auf die Abbildung klicken",
    treepicker: "Element auswählen",
    viewCacheItem: "Zwischenspeicher-Element anzeigen",
    relateToOriginalLabel: "Verknüpfe mit Original",
    includeDescendants: "Einschliesslich Unterknoten",
    theFriendliestCommunity: "Die freundlichste Community",
    linkToPage: "Seiten-Link",
    openInNewWindow: "In neuem Fenster / Tab öffnen",
    linkToMedia: "Medien-Link",
    selectContentStartNode: "Inhalts-Startknoten wählen",
    selectMedia: "Medienelement wählen",
    selectMediaType: "Medientype wählen",
    selectIcon: "Bildzeichen wählen",
    selectItem: "Element wählen",
    selectLink: "Link wählen",
    selectMacro: "Makro wählen",
    selectContent: "Inhalt wählen",
    selectContentType: "Inhaltstyp wählen",
    selectMediaStartNode: "Medien-Startknoten wählen",
    selectMember: "Mitglied wählen",
    selectMemberGroup: "Mitgliedergruppe wählen",
    selectMemberType: "Membertype wählen",
    selectNode: "Knoten wählen",
    selectSections: "Bereich wählen",
    selectLanguages: "Sprachen wählen",
    selectUser: "Benutzer wählen",
    selectUsers: "Benutzer wählen",
    noIconsFound: "Keine Bildzeichen gefunden",
    noMacroParams: "Für dieses Makro gibt es keine Parameter",
    noMacros: "Es gibt keine Makros zum Einfügen",
    externalLoginProviders: "Externe Login-Anbieter",
    exceptionDetail: "Ausnahmedetails",
    stacktrace: "Stacktrace",
    innerException: "Inner Exception",
    linkYour: "Verknüpfen Sie Ihr",
    unLinkYour: "Trennen Sie Ihr",
    account: "Konto",
    selectEditor: "Editor wählen",
    selectEditorConfiguration: "Konfiguration wählen",
    selectSnippet: "Kode-Vorlage wählen",
    variantdeletewarning: `Dies wird den Knoten und all seine Sprachen entfernen.
      Wenn Sie nur eine Sprache entfernen wollen, wählen Sie diese und setzen sie auf unveröffentlicht.
    `,
    propertyuserpickerremovewarning: "Dies entfernt den User <strong>%0%</strong>.",
    userremovewarning: "Dies entfernt den User <strong>%0%</strong> von der <strong>%1%</strong> Gruppe",
    yesRemove: "Ja, entfernen",
    deleteLayout: "Sie löschen das Layout",
    deletingALayout: "Bearbeiten des layout resultiert im Verlust der aller Daten für bestehenden Inhalt basierend auf dieser Konfiruation."
  },
  dictionary: {
    importDictionaryItemHelp: `
      Um einen Eintrag zu importieren, suchen sie die ".udt" Datei auf ihren Computer durch Klicken des
      "Import" Knopfes. (Sie werden für Ihre Zustimmung im nächsten Schritt gefragt)
    `,
    itemDoesNotExists: "Wörterbuch Eintrag existiert nicht.",
    parentDoesNotExists: "Eltern Element existiert nicht.",
    noItems: "Es gibt keine Einträge im Wörterbuch.",
    noItemsInFile: "Keine Wörterbuch Einträge in dieser Datei gefunden.",
    noItemsFound: "Keine Wörterbuch Einträge gefunden.",
    createNew: "Eintrag erstellen"
  },
  dictionaryItem: {
    description: "Bearbeiten Sie nachfolgend die verschiedenen Sprachversionen für den Wörterbucheintrag '%0%'.<br/>Unter dem links angezeigten Menüpunkt 'Sprachen' können Sie weitere hinzufügen.",
    displayName: "Name der Kultur",
    changeKeyError: "Der Wert '%0%' ist bereits vorhanden.",
    overviewTitle: "Wörterbuch Übersicht"
  },
  examineManagement: {
    configuredSearchers: "<em>Sucher</em> einrichten ",
    configuredSearchersDescription: `
    Zeigt die Eigenschaften und Werkzeuge für eingerichtete <em>Sucher</em> (z.B.: multi-index searcher)`,
    fieldValues: "Feldwerte",
    healthStatus: "Gesundheitsstatus",
    healthStatusDescription: "Der Gesundheitsstatus und Lesbarkeit des Indizes.",
    indexers: "Indizierer",
    indexInfo: "Indexinformationen",
    contentInIndex: "Inhalt des Indexes",
    indexInfoDescription: "Zeigt die Eigenschaften des Indizes",
    manageIndexes: "Examine Index-Verwaltung",
    manageIndexesDescription: `
      Index Detailanzeige und Verwaltungswerkzeuge
    `,
    rebuildIndex: "Index erneuern",
    rebuildIndexWarning: `
      Dies erzeugt den Index neu.<br />
      Abhängig von der Inhaltsmenge Ihrer <em>Website</em> kann das eingie Zeit dauern.<br />
      Es wird davon abgeraten, einen Index einer <em>Website</em> während hoher Auslastung- oder Inhaltbearbeitungszeiten zu erneuern.
     `,
    searchers: "Sucher",
    searchDescription: "Durchsuche den Index und betrachte die Ergebnisse",
    tools: "Werkzeuge",
    toolsDescription: "Werkzeuge zur Indexverwaltung",
    fields: "Felder",
    indexCannotRead: "Der Index kann nicht gelesen werden und wird deshalb neu erstellt.",
    processIsTakingLonger: `Der Prozess dauert länger als erwartet, checken Sie die Umbraco Logs um zu sehen ob
      Fehler passiert sind.
    `,
    indexCannotRebuild: "Der Index kann nicht rebuilded werden weil er nicht zugewissen wurde.",
    iIndexPopulator: "IIndexPopulator"
  },
  placeholders: {
    username: "Benutzername eingeben",
    password: "Kennwort eingeben",
    confirmPassword: "Bestätige das Kennwort",
    nameentity: "%0% benennen ...",
    entername: "Bitte Name angeben ...",
    enteremail: "Bitte E-Mail eingeben...",
    enterusername: "Bitte Benutzernamen eingeben...",
    label: "Label...",
    enterDescription: "Bitte eine Beschreibung eingeben...",
    search: "Durchsuchen ...",
    filter: "Filtern ...",
    enterTags: "Tippen, um Tags hinzuzufügen (nach jedem Tag die Eingabetaste drücken) ...",
    email: "Bitte E-Mail eingeben",
    enterMessage: "Bitte Nachricht eingeben...",
    usernameHint: "Der Benutzername ist normalerweise Ihre E-Mail-Adresse",
    anchor: "#value oder ?key=value",
    enterAlias: "Bitte einen Alias eingeben...",
    generatingAlias: "Alias erzeugen...",
    a11yCreateItem: "Element erstellen",
    a11yEdit: "Bearbeiten",
    a11yName: "Benennen"
  },
  editcontenttype: {
    createListView: "Angepasste Listenansicht erstellen",
    removeListView: "Angepasste Listenansicht entfernen",
    aliasAlreadyExists: "Ein Inhalts-, Medien oder Mitgliedstyp mit gleichem Alias ist bereits vorhanden."
  },
  renamecontainer: {
    renamed: "Umbenannt",
    enterNewFolderName: "Tragen Sie hier einen neuen Verzeichnisnamen ein",
    folderWasRenamed: "%0% wurde umbenannt in %1%"
  },
  editdatatype: {
    canChangePropertyEditorHelp: "Ändern des Editors in einem Datatyps mit gespeicherten Werten ist nicht erlaubt. Um es zu erlauben müssen Sie die Umbraco:CMS:DataTypes:CanBeChanged Einstellung in der appsettings.json ändern.",
    addPrevalue: "Neuer Vorgabewert",
    dataBaseDatatype: "Feldtyp in der Datenbank",
    guid: "Datentyp-GUID",
    renderControl: "Steuerelement zur Darstellung",
    rteButtons: "Schaltflächen",
    rteEnableAdvancedSettings: "Erweiterte Einstellungen aktivieren für",
    rteEnableContextMenu: "Kontextmenü aktivieren",
    rteMaximumDefaultImgSize: "Maximale Standardgröße für eingefügte Bilder",
    rteRelatedStylesheets: "Verknüpfte Stylesheets",
    rteShowLabel: "Beschriftung anzeigen",
    rteWidthAndHeight: "Breite und Höhe",
    selectFolder: "Wählen Sie das Verzeichnis aus der untenstehenden Baumstruktur, in das",
    inTheTree: "verschoben werden soll.",
    wasMoved: "wurde verschoben in",
    hasReferencesDeleteConsequence: "Löschen von <strong>%0%</strong> wird die Eigenschaften und Daten von folgenden Element löschen",
    acceptDeleteConsequence: `Ich verstehe das diese Aktion Eigenschaften und Daten basierend auf diesem
      DataTyps löschen wird.
    `
  },
  errorHandling: {
    errorButDataWasSaved: `Ihre Daten wurden gespeichert.
      Bevor Sie diese Seite jedoch veröffentlichen können, müssen Sie die folgenden Korrekturen vornehmen:
    `,
    errorChangingProviderPassword: `Der aktuelle Mitgliedschaftsanbieter erlaubt keine Kennwortänderung
      (EnablePasswordRetrieval muss auf "true" gesetzt sein)
    `,
    errorExistsWithoutTab: "'%0%' ist bereits vorhanden",
    errorHeader: "Bitte prüfen und korrigieren:",
    errorHeaderWithoutTab: "Bitte prüfen und korrigieren:",
    errorInPasswordFormat: `Für das Kennwort ist eine Mindestlänge von %0% Zeichen vorgesehen,
      wovon mindestens %1% Sonderzeichen (nicht alphanumerisch) sein müssen
    `,
    errorIntegerWithoutTab: "'%0%' muss eine Zahl sein",
    errorMandatory: "'%0%' (in Registerkarte '%1%') ist ein Pflichtfeld",
    errorMandatoryWithoutTab: "'%0%' ist ein Pflichtfeld",
    errorRegExp: "'%0%' (in Registerkarte '%1%') hat ein falsches Format",
    errorRegExpWithoutTab: "'%0%' hat ein falsches Format"
  },
  errors: {
    defaultError: "Ein unbekannter Fehler ist passiert.",
    concurrencyError: "Optimistic concurrency Fehler, Objekte wurde geändert.",
    receivedErrorFromServer: "Der Server hat einen Fehler gemeldet",
    dissallowedMediaType: "Dieser Dateityp wird durch die Systemeinstellungen blockiert",
    codemirroriewarning: `ACHTUNG! Obwohl CodeMirror in den Einstellungen aktiviert ist,
      bleibt das Modul wegen mangelnder Stabilität in Internet Explorer deaktiviert.
    `,
    contentTypeAliasAndNameNotNull: "Bitte geben Sie die Bezeichnung und den Alias des neuen Dokumenttyps ein.",
    filePermissionsError: "Es besteht ein Problem mit den Lese-/Schreibrechten auf eine Datei oder einen Ordner",
    macroErrorLoadingPartialView: 'Fehler beim Laden einer "Partial View Kodedatei" (Datei: %0%)',
    missingTitle: "Bitte geben Sie einen Titel ein",
    missingType: "Bitte wählen Sie einen Typ",
    pictureResizeBiggerThanOrg: `Soll die Abbildung wirklich über die
      Originalgröße hinaus vergrößert werden?
    `,
    startNodeDoesNotExists: "Startelement gelöscht, bitte kontaktieren Sie den System-Administrator.",
    stylesMustMarkBeforeSelect: "Bitte markieren Sie den gewünschten Text, bevor Sie einen Stil auswählen",
    stylesNoStylesOnPage: "Keine aktiven Stile vorhanden",
    tableColMergeLeft: "Bitte platzieren Sie den Mauszeiger in die erste der zusammenzuführenden Zellen",
    tableSplitNotSplittable: "Sie können keine Zelle trennen, die nicht zuvor aus mehreren zusammengeführt wurde.",
    propertyHasErrors: "Die Eigenschaft ist nicht valide"
  },
  general: {
    options: "Optionen",
    about: "Info",
    action: "Aktion",
    actions: "Aktionen",
    add: "Hinzufügen",
    alias: "Alias",
    all: "Alles",
    areyousure: "Sind Sie sicher?",
    back: "Zurück",
    backToOverview: "Zurück zur Übersicht",
    border: "Rahmen",
    by: "von",
    cancel: "Abbrechen",
    cellMargin: "Zellabstand",
    choose: "Auswählen",
    close: "Schließen",
    clear: "Leeren",
    closewindow: "Fenster schließen",
    closepane: "Fenster Pane",
    comment: "Kommentar",
    confirm: "bestätigen",
    constrain: "Beschneiden",
    constrainProportions: "Seitenverhältnis beibehalten",
    content: "Inhalt",
    continue: "Weiter",
    copy: "Kopieren",
    create: "Neu",
    cropSection: "Ausschnitte Bereich",
    database: "Datenbank",
    date: "Datum",
    default: "Standard",
    delete: "Löschen",
    deleted: "Gelöscht",
    deleting: "Löschen ...",
    design: "Design",
    dictionary: "Wörterbuch",
    dimensions: "Abmessungen",
    dividerPosition: (e) => `Trenner bei ${e}%`,
    discard: "Verwerfen",
    down: "nach unten",
    download: "Herunterladen",
    edit: "Bearbeiten",
    edited: "Bearbeitet",
    elements: "Elemente",
    email: "E-Mail",
    error: "Fehler",
    field: "Feld",
    findDocument: "Suche",
    first: "Erste(s)",
    general: "Allgemein",
    groups: "Gruppen",
    generic: "Generisch",
    group: "Gruppe",
    height: "Höhe",
    help: "Hilfe",
    hide: "Verbergen",
    history: "Verlauf",
    icon: "Bildzeichen",
    id: "Id",
    import: "Import",
    excludeFromSubFolders: "Nur in diesem Ordner suchen",
    info: "Info",
    innerMargin: "Innerer Abstand",
    insert: "Einfügen",
    install: "Installieren",
    invalid: "Ungültig",
    justify: "Zentrieren",
    label: "Bezeichnung",
    language: "Sprache",
    last: "Letzte(s)",
    layout: "Layout",
    links: "Links",
    loading: "Laden",
    locked: "Gesperrt",
    login: "Anmelden",
    logoff: "Abmelden",
    logout: "Abmelden",
    macro: "Makro",
    mandatory: "Pflichtfeld",
    media: "Medien",
    message: "Nachricht",
    move: "Verschieben",
    name: "Name",
    new: "Neu",
    next: "Weiter",
    no: "Nein",
    nodeName: "Knoten Name",
    of: "von",
    off: "Aus",
    ok: "Ok",
    open: "Öffnen",
    on: "An",
    or: "oder",
    orderBy: "Sortieren nach",
    password: "Kennwort",
    path: "Pfad",
    pleasewait: "Einen Moment bitte...",
    previous: "Zurück",
    properties: "Eigenschaften",
    readMore: "Mehr erfahren",
    rebuild: "Erneuern",
    reciept: "E-Mail-Empfänger für die Formulardaten",
    recycleBin: "Papierkorb",
    recycleBinEmpty: "Ihr Mülleimer ist leer",
    reload: "Neu laden",
    remaining: "Verbleibend",
    remove: "Entfernen",
    revert: "Rückgängig",
    rename: "Umbenennen",
    renew: "Erneuern",
    required: "Pflichtangabe",
    retrieve: "Wiederherstellen",
    retry: "Wiederholen",
    rights: "Berechtigungen",
    scheduledPublishing: "Geplantes Veröffentlichen",
    umbracoInfo: "Umbraco Information",
    search: "Suchen",
    searchNoResult: "Leider können wir nicht finden, wonach Sie suchen.",
    noItemsInList: "Es wurden keine Elemente hinzugefügt",
    server: "Server",
    settings: "Einstellungen",
    shared: "Geteilt",
    show: "Anzeigen",
    showPageOnSend: "Seite beim Senden anzeigen",
    size: "Größe",
    sort: "Sortieren",
    status: "Status",
    submit: "Senden",
    success: "Erfolt",
    type: "Typ",
    typeName: "Typ Name",
    typeToSearch: "Durchsuchen ...",
    under: "unter",
    up: "nach oben",
    update: "Aktualisieren",
    upgrade: "Update",
    upload: "Hochladen",
    url: "URL",
    user: "Benutzer",
    username: "Benutzername",
    validate: "Validieren",
    value: "Wert",
    view: "Ansicht",
    welcome: "Willkommen ...",
    width: "Breite",
    yes: "Ja",
    folder: "Ordner",
    searchResults: "Suchergebnisse",
    reorder: "Sortieren",
    reorderDone: "Sortierung abschließen",
    preview: "Vorschau",
    changePassword: "Kennwort ändern",
    to: "nach",
    listView: "Listenansicht",
    saving: "Sichern läuft...",
    current: "Aktuelle(s)",
    embed: "Eingebettet",
    selected: "ausgewählt",
    other: "Anderes",
    articles: "Artikel",
    videos: "Videos",
    avatar: "Avatar für",
    header: "Kopf",
    systemField: "System Feld",
    lastUpdated: "Zuletzt geändert",
    newVersionAvailable: "Neue Version verfügbar"
  },
  colors: {
    blue: "Blau"
  },
  shortcuts: {
    addTab: "Tab hinzufügen",
    addGroup: "Neue Gruppe",
    addProperty: "Neue Eigenschaft",
    addEditor: "Editor hinzufügen",
    addTemplate: "Vorlage hinzufügen",
    addChildNode: "Knoten unterhalb hinzufügen",
    addChild: "Element unterhalb hinzufügen",
    editDataType: "Datentyp bearbeiten",
    navigateSections: "Bereiche wechseln",
    shortcut: "Abkürzungen",
    showShortcuts: "Abkürzungen anzeigen",
    toggleListView: "Listenansicht wechseln",
    toggleAllowAsRoot: "Wurzelknotenberechtigung wechseln",
    commentLine: "Zeile ein-/auskommentieren",
    removeLine: "Zeile entfernen",
    copyLineUp: "Zeilen oberhalb kopieren",
    copyLineDown: "Zeilen unterhalb kopieren",
    moveLineUp: "Zeilen nach oben schieben",
    moveLineDown: "Zeilen nach unten schieben",
    generalHeader: "Standard",
    editorHeader: "Editor",
    toggleAllowCultureVariants: "Kulturvariantenberechtigung wechseln"
  },
  graphicheadline: {
    backgroundcolor: "Hintergrundfarbe",
    bold: "Fett",
    color: "Textfarbe",
    font: "Schriftart",
    text: "Text"
  },
  headers: {
    page: "Dokument"
  },
  installer: {
    databaseErrorCannotConnect: "Mit dieser Datenbank kann leider keine Verbindung hergestellt werden.",
    databaseErrorWebConfig: `Appsettings.json Datei konnte nicht gespeichert werden. Bitte ändern Sie die Datei
      manuell.
    `,
    databaseFound: "Die Datenbank ist erreichbar und wurde identifiziert als",
    databaseHeader: "Datenbank",
    databaseInstall: `
    Klicken Sie auf <strong>Installieren</strong>, um die Datenbank für Umbraco %0% einzurichten.
    `,
    databaseInstallDone: `Die Datenbank wurde für Umbraco %0% konfiguriert.
      Klicken Sie auf <strong>weiter</strong>, um fortzufahren.`,
    databaseText: "Um diesen Schritt abzuschließen, müssen Sie die notwendigen Informationen zur Datenbankverbindung angeben.<br />Bitte kontaktieren Sie Ihren Provider bzw. Server-Administrator für weitere Informationen.",
    databaseUpgrade: `
	  <p>
	  Bitte bestätigen Sie mit einem Klick auf <strong>Update</strong>, dass die Datenbank auf Umbraco %0% aktualisiert werden soll.
	  </p>
	  <p>
	  Keine Sorge - Dabei werden keine Inhalte gelöscht und alles wird weiterhin funktionieren!
	  </p>
    `,
    databaseUpgradeDone: "Die Datenbank wurde auf die Version %0% aktualisiert. Klicken Sie auf <strong>weiter</strong>, um fortzufahren.",
    databaseUpToDate: 'Die Datenbank ist fertig eingerichtet. Klicken Sie auf <strong>"weiter"</strong>, um mit der Einrichtung fortzufahren.',
    defaultUserChangePass: "<strong>Das Kennwort des Standard-Benutzers muss geändert werden!</strong>",
    defaultUserDisabled: "<strong>Der Standard-Benutzer wurde deaktiviert oder hat keinen Zugriff auf Umbraco.</strong></p><p>Es sind keine weiteren Aktionen notwendig. Klicken Sie auf <b>Weiter</b> um fortzufahren.",
    defaultUserPassChanged: "<strong>Das Kennwort des Standard-Benutzers wurde seit der Installation verändert.</strong></p><p>Es sind keine weiteren Aktionen notwendig. Klicken Sie auf <b>Weiter</b> um fortzufahren.",
    defaultUserPasswordChanged: "Das Kennwort wurde geändert!",
    greatStart: "Schauen Sie sich die Einführungsvideos für einen schnellen und einfachen Start an.",
    None: "Noch nicht installiert.",
    permissionsAffectedFolders: "Betroffene Verzeichnisse und Dateien",
    permissionsAffectedFoldersMoreInfo: 'Weitere Informationen zum Thema "Dateiberechtigungen" für Umbraco',
    permissionsAffectedFoldersText: "Für die folgenden Dateien und Verzeichnisse müssen ASP.NET-Schreibberechtigungen gesetzt werden",
    permissionsAlmostPerfect: "<strong>Die Dateiberechtigungen sind fast perfekt eingestellt!</strong><br /><br />Damit können Sie Umbraco ohne Probleme verwenden, werden aber viele Erweiterungspakete können nicht installiert werden.",
    permissionsHowtoResolve: "Problemlösung",
    permissionsHowtoResolveLink: "Klicken Sie hier, um den technischen Artikel zu lesen",
    permissionsHowtoResolveText: "Schauen Sie sich die <strong>Video-Lehrgänge</strong> zum Thema Verzeichnisberechtigungen für Umbraco an oder lesen Sie den technischen Artikel.",
    permissionsMaybeAnIssue: "<strong>Die Dateiberechtigungen sind möglicherweise fehlerhaft!</strong>Sie können Umbraco vermutlich ohne Probleme verwenden, werden aber viele Erweiterungspakete können nicht installiert werden.",
    permissionsNotReady: `
      <strong>Die Dateiberechtigungen sind nicht geeignet!</strong><br /><br />
      Die Dateiberechtigungen müssen angepasst werden.
    `,
    permissionsPerfect: "<strong>Die Dateiberechtigungen sind perfekt eingestellt!</strong><br /><br /> Damit ist Umbraco komplett eingerichtet und es können problemlos Erweiterungspakete installiert werden.",
    permissionsResolveFolderIssues: "Verzeichnisprobleme lösen",
    permissionsResolveFolderIssuesLink: "Folgen Sie diesem Link für weitere Informationen zum Thema ASP.NET und der Erstellung von Verzeichnissen.",
    permissionsSettingUpPermissions: "Verzeichnisberechtigungen anpassen",
    permissionsText: "Umbraco benötigt Schreibrechte auf verschiedene Verzeichnisse, um Dateien wie Bilder oder PDF-Dokumente speichern zu können. Außerdem werden temporäre Daten zur Leistungssteigerung der Website angelegt.",
    runwayFromScratch: "Ich möchte mit einem leeren System ohne Inhalte und Vorgaben starten",
    runwayFromScratchText: `
      Die Website ist zur Zeit komplett leer und ohne Inhalte und Vorgaben zu Erstellung eigener Dokumenttypen und Vorlagen bereit.
      (<a href="https://umbraco.tv/documentation/videos/for-site-builders/foundation/document-types">So geht's</a>)
      Sie können "Runway" auch jederzeit später installieren. Verwenden Sie hierzu den Punkt "Pakete" im Entwickler-Bereich.
    `,
    runwayHeader: "Die Einrichtung von Umbraco ist abgeschlossen und das Content-Management-System steht bereit. Wie soll es weitergehen?",
    runwayInstalled: "'Runway' wurde installiert",
    runwayInstalledText: `
      Die Basis ist eingerichtet. Wählen Sie die Module aus, die Sie nun installieren möchten.<br />
      Dies sind unsere empfohlenen Module. Schauen Sie sich die an, die Sie installieren möchten oder Sie sich die <a href="#" onclick="toggleModules(); return false;" id="toggleModuleList">komplette Liste der Module an.</a>
    `,
    runwayOnlyProUsers: "Nur für erfahrene Benutzer empfohlen",
    runwaySimpleSite: "Ich möchte mit einer einfache Website starten",
    runwaySimpleSiteText: `
      <p>
      "Runway" ist eine einfache Website mit einfachen Dokumententypen und Vorlagen. Der Installer kann Runway automatisch einrichten,
      aber es kann einfach verändert, erweitert oder entfernt werden. Es ist nicht zwingend notwendig und Umbraco kann auch ohne Runway verwendet werden.
      Runway bietet eine einfache Basis zum schnellen Start mit Umbraco.
      Wenn Sie sich für Runway entscheiden, können Sie optional Blöcke nutzen, die "Runway Modules" und Ihre Runway-Seite erweitern.
      </p>
      <small>
      <em>Runway umfasst:</em> Home page, Getting Started page, Installing Modules page.<br />
      <em>Optionale Module:</em> Top Navigation, Sitemap, Contact, Gallery.
      </small>
    `,
    runwayWhatIsRunway: "Was ist 'Runway'?",
    step1: "Schritt 1/5 Lizenz",
    step2: "Schritt 2/5: Datenbank",
    step3: "Schritt 3/5: Dateiberechtigungen",
    step4: "Schritt 4/5: Sicherheit",
    step5: "Schritt 5/5: Umbraco ist startklar!",
    thankYou: "Vielen Dank, dass Sie Umbraco installieren!",
    theEndBrowseSite: "<h3>Zur neuen Seite</h3>Sie haben Runway installiert, schauen Sie sich doch mal auf Ihrer Website um.",
    theEndFurtherHelp: "<h3>Weitere Hilfe und Informationen</h3>Hilfe von unserer preisgekrönten Community, Dokumentation und kostenfreie Videos, wie Sie eine einfache Website erstellen, ein Packages nutzen und eine schnelle Einführung in alle Umbraco-Begriffe",
    theEndHeader: "Umbraco %0% wurde installiert und kann verwendet werden",
    theEndInstallSuccess: 'Sie können <strong>sofort starten</strong>, in dem Sie auf "Umbraco starten" klicken.',
    theEndOpenUmbraco: "<h3>Umbraco starten</h3>Um Ihre Website zu verwalten, öffnen Sie einfach den Administrationsbereich und beginnen Sie damit, Inhalte hinzuzufügen sowie Vorlagen und Stylesheets zu bearbeiten oder neue Funktionen einzurichten",
    Unavailable: "Verbindung zur Datenbank fehlgeschlagen.",
    Version3: "Umbraco Version 3",
    Version4: "Umbraco Version 4",
    watch: "Anschauen",
    welcomeIntro: "Dieser Assistent führt Sie durch die Einrichtung einer neuen Installation von <strong>Umbraco %0%</strong> oder einem Upgrade von Version 3.0.<br /><br />Klicken Sie auf <strong>weiter</strong>, um zu beginnen."
  },
  language: {
    cultureCode: "Kode der Kultur",
    displayName: "Name der Kultur"
  },
  lockout: {
    lockoutWillOccur: "Sie haben keine Tätigkeiten mehr durchgeführt und werden automatisch abgemeldet in",
    renewSession: "Erneuern Sie, um Ihre Arbeit zu speichern ..."
  },
  timeout: {
    warningHeadline: "Warnung: Ihre Sitzung läuft bald ab",
    warningText: "Ihre Sitzung ist bald abgelaufen und Sie werden in <strong>{0} Sekunden</strong> abgemeldet.",
    warningLogoutAction: "Abmelden",
    warningContinueAction: "Eingeloggt bleiben"
  },
  login: {
    greeting0: "Willkommen",
    greeting1: "Willkommen",
    greeting2: "Willkommen",
    greeting3: "Willkommen",
    greeting4: "Willkommen",
    greeting5: "Willkommen",
    greeting6: "Willkommen",
    instruction: "Hier anmelden:",
    signInWith: "Anmelden mit",
    timeout: "Sitzung abgelaufen",
    bottomText: '<p style="text-align:right;">&copy; 2001 - %0% <br /><a href="https://umbraco.com" style="text-decoration: none" target="_blank" rel="noopener">umbraco.org</a></p> ',
    forgottenPassword: "Kennwort vergessen?",
    forgottenPasswordInstruction: "Es wird eine E-Mail mit einem Kennwort-Zurücksetzen-Link an die angegebene Adresse geschickt.",
    requestPasswordResetConfirmation: "Es wird eine E-Mail mit Anweisungen zum Zurücksetzen des Kennwortes an die angegebene Adresse geschickt sofern diese im Datenbestand gefunden wurde.",
    showPassword: "Kennwort zeigen",
    hidePassword: "Kennwort verbergen",
    returnToLogin: "Zurück zur Anmeldung",
    setPasswordInstruction: "Bitte wählen Sie ein neues Kennwort",
    setPasswordConfirmation: "Ihr Kennwort wurde aktualisiert",
    resetCodeExpired: "Der aufgerufene Link ist ungültig oder abgelaufen",
    resetPasswordEmailCopySubject: "Umbraco: Kennwort zurücksetzen",
    resetPasswordEmailCopyFormat: `
<html>
	<head>
		<meta name='viewport' content='width=device-width'>
		<meta http-equiv='Content-Type' content='text/html; charset=UTF-8'>
	</head>
	<body class='' style='font-family: sans-serif; -webkit-font-smoothing: antialiased; font-size: 14px; color: #392F54; line-height: 22px; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; background: #1d1333; margin: 0; padding: 0;' bgcolor='#1d1333'>
		<style type='text/css'> @media only screen and (max-width: 620px) {table[class=body] h1 {font-size: 28px !important; margin-bottom: 10px !important; } table[class=body] .wrapper {padding: 32px !important; } table[class=body] .article {padding: 32px !important; } table[class=body] .content {padding: 24px !important; } table[class=body] .container {padding: 0 !important; width: 100% !important; } table[class=body] .main {border-left-width: 0 !important; border-radius: 0 !important; border-right-width: 0 !important; } table[class=body] .btn table {width: 100% !important; } table[class=body] .btn a {width: 100% !important; } table[class=body] .img-responsive {height: auto !important; max-width: 100% !important; width: auto !important; } } .btn-primary table td:hover {background-color: #34495e !important; } .btn-primary a:hover {background-color: #34495e !important; border-color: #34495e !important; } .btn  a:visited {color:#FFFFFF;} </style>
		<table border="0" cellpadding="0" cellspacing="0" class="body" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%; background: #1d1333;" bgcolor="#1d1333">
			<tr>
				<td style="font-family: sans-serif; font-size: 14px; vertical-align: top; padding: 24px;" valign="top">
					<table style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;">
						<tr>
							<td background="https://umbraco.com/umbraco/assets/img/application/logo.png" bgcolor="#1d1333" width="28" height="28" valign="top" style="font-family: sans-serif; font-size: 14px; vertical-align: top;">
								<!--[if gte mso 9]> <v:rect xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false" style="width:30px;height:30px;"> <v:fill type="tile" src="https://umbraco.com/umbraco/assets/img/application/logo.png" color="#1d1333" /> <v:textbox inset="0,0,0,0"> <![endif]-->
								<div> </div>
								<!--[if gte mso 9]> </v:textbox> </v:rect> <![endif]-->
							</td>
							<td style="font-family: sans-serif; font-size: 14px; vertical-align: top;" valign="top"></td>
						</tr>
					</table>
				</td>
			</tr>
		</table>
		<table border='0' cellpadding='0' cellspacing='0' class='body' style='border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%; background: #1d1333;' bgcolor='#1d1333'>
			<tr>
				<td style='font-family: sans-serif; font-size: 14px; vertical-align: top;' valign='top'> </td>
				<td class='container' style='font-family: sans-serif; font-size: 14px; vertical-align: top; display: block; max-width: 560px; width: 560px; margin: 0 auto; padding: 10px;' valign='top'>
					<div class='content' style='box-sizing: border-box; display: block; max-width: 560px; margin: 0 auto; padding: 10px;'>
						<br>
						<table class='main' style='border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%; border-radius: 3px; background: #FFFFFF;' bgcolor='#FFFFFF'>
							<tr>
								<td class='wrapper' style='font-family: sans-serif; font-size: 14px; vertical-align: top; box-sizing: border-box; padding: 50px;' valign='top'>
									<table border='0' cellpadding='0' cellspacing='0' style='border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;'>
										<tr>
											<td style='line-height: 24px; font-family: sans-serif; font-size: 14px; vertical-align: top;' valign='top'>
												<h1 style='color: #392F54; font-family: sans-serif; font-weight: bold; line-height: 1.4; font-size: 24px; text-align: left; margin: 0 0 30px;' align='left'>
													Das Zurücksetzen Ihres Kennwortes wurde angefordert
												</h1>
												<p style='color: #392F54; font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0 0 15px;'>
													Ihr Benutzername für das Umbraco-Administration lautet: <strong>%0%</strong>
												</p>
												<p style='color: #392F54; font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0 0 15px;'>
													<table border='0' cellpadding='0' cellspacing='0' style='border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: auto;'>
														<tbody>
															<tr>
																<td style='font-family: sans-serif; font-size: 14px; vertical-align: top; border-radius: 5px; text-align: center; background: #35C786;' align='center' bgcolor='#35C786' valign='top'>
																	<a href='%1%' target='_blank' rel='noopener' style='color: #FFFFFF; text-decoration: none; -ms-word-break: break-all; word-break: break-all; border-radius: 5px; box-sizing: border-box; cursor: pointer; display: inline-block; font-size: 14px; font-weight: bold; background: #35C786; margin: 0; padding: 12px 30px; border: 1px solid #35c786;'>
																		Klicken Sie hier, um Ihr Kennwort zurück zu setzen
																	</a>
																</td>
															</tr>
														</tbody>
													</table>
												</p>
												<p style='max-width: 400px; display: block; color: #392F54; font-family: sans-serif; font-size: 14px; line-height: 20px; font-weight: normal; margin: 15px 0;'>Wenn Sie den Link nicht klicken können, kopieren Sie den fogenden URL und fügen Sie ihn direkt im Browser-Fenster ein:</p>
													<table border='0' cellpadding='0' cellspacing='0'>
														<tr>
															<td style='-ms-word-break: break-all; word-break: break-all; font-family: sans-serif; font-size: 11px; line-height:14px;'>
																<font style="-ms-word-break: break-all; word-break: break-all; font-size: 11px; line-height:14px;">
																	<a style='-ms-word-break: break-all; word-break: break-all; color: #392F54; text-decoration: underline; font-size: 11px; line-height:15px;' href='%1%'>%1%</a>
																</font>
															</td>
														</tr>
													</table>
												</p>
											</td>
										</tr>
									</table>
								</td>
							</tr>
						</table>
						<br><br><br>
					</div>
				</td>
				<td style='font-family: sans-serif; font-size: 14px; vertical-align: top;' valign='top'> </td>
			</tr>
		</table>
	</body>
</html>
	`
  },
  main: {
    dashboard: "Dashboard",
    sections: "Bereiche",
    tree: "Inhalt"
  },
  moveOrCopy: {
    choose: "Bitte Element auswählen ...",
    copyDone: "%0% wurde nach %1% kopiert",
    copyTo: "Bitte wählen Sie, wohin das Element %0% kopiert werden soll:",
    moveDone: "%0% wurde nach %1% verschoben",
    moveTo: "Bitte wählen Sie, wohin das Element %0% verschoben werden soll:",
    nodeSelected: "wurde als das Ziel ausgewählt. Bestätigen mit 'Ok'.",
    noNodeSelected: "Es ist noch kein Element ausgewählt. Bitte wählen Sie ein Element aus der Liste aus, bevor Sie fortfahren.",
    notAllowedByContentType: "Das aktuelle Element kann aufgrund seines Dokumenttyps nicht an diese Stelle verschoben werden.",
    notAllowedByPath: "Das ausgewählte Element kann nicht zu einem seiner eigenen Unterelemente verschoben werden.",
    notAllowedAtRoot: "Dieses Element kann nicht auf der obersten Ebene platziert werden.",
    notValid: "Diese Aktion ist nicht erlaubt, da Sie unzureichende Berechtigungen für mindestens ein untergeordnetes Element haben.",
    relateToOriginal: "Kopierte Elemente mit dem Original verknüpfen"
  },
  notifications: {
    editNotifications: "Bearbeiten Sie Ihre Benachrichtigungseinstellungen für '%0%'",
    notificationsSavedFor: "Benachrichtigungseinstellungen wurden gesichert für '%0%'",
    notifications: "Benachrichtigungen"
  },
  packager: {
    actions: "Aktionen",
    created: "Angelegt",
    createPackage: "Neues Paket",
    chooseLocalPackageText: `
        Wählen Sie ein Paket auf Ihrem lokalen Computer über "Datei auswählen" aus. <br />
    Umbraco-Pakete besitzen üblicherweise die Dateiendungen ".umb" oder ".zip".
      `,
    deletewarning: "Diese Aktion entfernt das Paket",
    includeAllChildNodes: "Alle Unterknoten einschließen",
    installed: "Installiert",
    installedPackages: "Installierte Pakete",
    noConfigurationView: "Diese Paket hat keine Einstellungen",
    noPackagesCreated: "Es wurden noche keine Pakete angelegt",
    noPackages: "Sie haben keine Pakete installiert",
    noPackagesDescription: `
    Sie haben keine Pakete installiert.
    Sie können entweder ein Paket von Ihrem Computer wählen oder suchen in den vorhandenen Paketen (via Klick auf Bildsymbol
    <strong>'Pakete'</strong> rechts, oben), um es zu installieren
    `,
    packageContent: "Paketinhalt",
    packageLicense: "Lizenz",
    packageSearch: "Paket suchen",
    packageSearchResults: "Ergebnis(se) für",
    packageNoResults: "Keine Ergebnisse für",
    packageNoResultsDescription: "Bitte versuchen Sie einen anderen Begriff oder stöbern Sie in den Kategorien",
    packagesPopular: "Beliebt",
    packagesNew: "Neue Veröffentlichungen",
    packageHas: "hat",
    packageKarmaPoints: "Karma Punkte",
    packageInfo: "Information",
    packageOwner: "Besitzer",
    packageContrib: "Beitragende",
    packageCreated: "Angelegt",
    packageCurrentVersion: "Aktuelle Version",
    packageNetVersion: ".NET Version",
    packageDownloads: "Heruntergeladenes",
    packageLikes: "Likes",
    packageCompatibility: "Kompatibilität",
    packageCompatibilityDescription: `
      Dieses Paket ist nach Berichten von Community-Mitgliedern mit folgenden Umbraco-Version kompatibel.
      Es kann keine vollständige Kompatibilität garantiert werden für Versionen mit weniger als 100% Bewertungen.
    `,
    packageExternalSources: "Externe Quellen",
    packageAuthor: "Autor",
    packageDocumentation: "Dokumentation",
    packageMetaData: "Paket-Meta-Daten",
    packageName: "Name des Pakets",
    packageNoItemsHeader: "Paket enthält keine Elemente",
    packageNoItemsText: `Die Paket-Datei enthält keine Elemente die deinstalliert werden können.<br/><br/>
    Sie können das Paket ohne Gefahr deinstallieren indem Sie "Paket deinstallieren" anklicken.`,
    packageOptions: "Paket-Optionen",
    packageReadme: "Informationen zum Paket",
    packageRepository: "Paket-Repository",
    packageUninstallConfirm: "Deinstallation bestätigen",
    packageUninstalledHeader: "Paket wurde deinstalliert",
    packageUninstalledText: "Das Paket wurde erfolgreich deinstalliert",
    packageUninstallHeader: "Paket deinstallieren",
    packageUninstallText: `Sie können einzelne Elemente, die Sie nicht deinstallieren möchten, unten abwählen.
    Wenn Sie "Deinstallation bestätigen" klicken, werden alle markierten Elemente entfernt.<br />
    <span style="color: Red; font-weight: bold;">Achtung:</span> alle Dokumente, Medien, etc, die von den zu entfernenden Elementen abhängen,
    werden nicht mehr funktionieren und im Zweifelsfall kann dass gesamte CMS instabil werden.
    Bitte deinstallieren Sie also mit Vorsicht. Falls Sie unsicher sind, kontaktieren Sie den Autor des Pakets.`,
    packageVersion: "Paketversion",
    verifiedToWorkOnUmbracoCloud: "Bestätigt auf Umbraco Cloud zu funktioneren"
  },
  paste: {
    doNothing: "Einfügen mit Formatierung (Nicht empfohlen)",
    errorMessage: "Der Text, den Sie einfügen möchten, enthält Sonderzeichen oder spezielle Formatierungen. Dies kann zum Beispiel beim Kopieren aus Microsoft Word heraus passieren. Umbraco kann Sonderzeichen und spezielle Formatierungen automatisch entfernen, damit der eingefügte Inhalt besser für die Veröffentlichung im Web geeignet ist.",
    removeAll: "Als reinen Text ohne jede Formatierung einfügen",
    removeSpecialFormattering: "Einfügen, aber Formatierung bereinigen (Empfohlen)"
  },
  publicAccess: {
    paGroups: "Rollenbasierter Zugriffschutz",
    paGroupsHelp: "Wenn Sie rollenbasierte Authentifikation mit Umbraco-Mitgliedsgruppen verwenden wollen.",
    paGroupsNoGroups: "Sie müssen zuerst eine Mitgliedsgruppe erstellen, bevor derrollenbasierte Zugriffschutz aktiviert werden kann.",
    paErrorPage: "Fehlerseite",
    paErrorPageHelp: "Seite mit Fehlermeldung (Benutzer-Login erfolgt, aber keinen Zugriff auf die aufgerufene Seite erlaubt)",
    paHowWould: "Bitte wählen Sie, auf welche Art der Zugriff auf diese Seite geschützt werden soll",
    paIsProtected: "%0% ist nun zugriffsgeschützt",
    paIsRemoved: "Zugriffsschutz von %0% entfernt",
    paLoginPage: "Login-Seite",
    paLoginPageHelp: "Seite mit Login-Formular",
    paRemoveProtection: "Zugriffsschutz entfernen",
    paRemoveProtectionConfirm: `
    Möchten Sie den Schutz der Seite <strong>%0%</strong> wirklich entfernen?
    `,
    paSelectPages: "Auswahl der Seiten, die das Login-Formular und die Fehlermeldung enthalten",
    paSelectGroups: ` haben sollen
    `,
    paSelectMembers: "Wählen Sie die Mitglieder, die Zugriff auf Seite <strong>%0%</strong> haben sollen.",
    paMembers: "Mitglieder basierte Zugriffsberechtigung",
    paMembersHelp: "Falls Sie Mitglieder basierte Zugriffsberechtigung gewähren wollen"
  },
  publish: {
    invalidPublishBranchPermissions: "Die Zugriffsrechte des Benutzers sind ungenügend, um alle Unterknoten zu veröffentlichen",
    contentPublishedFailedIsTrashed: `
      %0% konnte nicht veröffentlicht werden, weil das Element im Papierkorb ist.
    `,
    contentPublishedFailedAwaitingRelease: `
      %0% kann nicht veröffentlicht werden, da die Veröffentlichung zeitlich geplant ist.
    `,
    contentPublishedFailedExpired: `
    %0% konnte nicht veröffentlicht werden, weil das Element abgelaufen ist.
    `,
    contentPublishedFailedInvalid: `
    %0% konnte nicht veröffentlicht werden, weil einige Eigenschaften ungültig sind.
    `,
    contentPublishedFailedByEvent: `
      %0% konnte nicht veröffentlicht werden, da ein Plug-In die Aktion abgebrochen hat.
    `,
    contentPublishedFailedByParent: `
      %0% kann nicht veröffentlicht werden, da das übergeordnete Dokument nicht veröffentlicht ist.
    `,
    includeUnpublished: "Unveröffentlichte Unterelemente einschließen",
    inProgress: "Bitte warten, Veröffentlichung läuft...",
    inProgressCounter: "%0% Elemente veröffentlicht, %1% Elemente ausstehend ...",
    nodePublish: "%0% wurde veröffentlicht",
    nodePublishAll: "%0% und die untergeordneten Elemente wurden veröffentlicht",
    publishAll: "%0% und alle untergeordneten Elemente veröffentlichen",
    publishHelp: `
    Klicken Sie <em>Sichern und Veröffentlichen</em>, um <strong>%0%</strong> zu veröffentlicht und auf der Website sichtbar zu machen.<br><br>
    Sie können dieses Element mitsamt seinen untergeordneten Elementen veröffentlichen, indem Sie <em>Unveröffentlichte Unterelemente einschließen</em> markieren.
    `
  },
  colorpicker: {
    noColors: "Sie haben keine freigegeben Farben konfiguriert"
  },
  contentPicker: {
    allowedItemTypes: "Sie können nur Elemente folgender Typen wählen: %0%",
    pickedTrashedItem: "Sie haben ein entferntes oder im Papierkorb befindliches Inhaltselement ausgewählt",
    pickedTrashedItems: "Sie haben entfernte oder im Papierkorb befindliche Inhaltselemente ausgewählt"
  },
  mediaPicker: {
    deletedItem: "Element entfernen",
    pickedTrashedItem: "Sie haben ein entferntes oder im Papierkorb befindliches Medienelement ausgewählt",
    pickedTrashedItems: "Sie haben entfernte oder im Papierkorb befindliche medienelemente ausgewählt",
    trashed: "Verworfen",
    openMedia: "Medien öffnen",
    changeMedia: "Medientyp ändern",
    editMediaEntryLabel: "Ändere %0% auf %1%",
    confirmCancelMediaEntryCreationHeadline: "Erstellen abbrechen?",
    confirmCancelMediaEntryCreationMessage: "Sind Sie sich sicher das Sie das Erstellen abbrechen wollen?",
    confirmCancelMediaEntryHasChanges: `Sie haben Änderungen an diesem Inhalt vorgenommen. Sind Sie sich sicher das Sie
      diese verwerfen wollen?
    `,
    confirmRemoveAllMediaEntryMessage: "Alle Medien löschen?",
    tabClipboard: "Clipboard",
    notAllowed: "Nicht erlaubt",
    openMediaPicker: "Medienpicker öffnen"
  },
  propertyEditorPicker: {
    title: "Wählen Sie einen Editor",
    openPropertyEditorPicker: "Editor auswählen"
  },
  relatedlinks: {
    enterExternal: "Externen Link eingeben",
    chooseInternal: "Internen Link auswählen",
    caption: "Beschriftung",
    link: "Link",
    newWindow: "In neuem Fenster öffnen",
    captionPlaceholder: "Bezeichnung eingeben",
    externalLinkPlaceholder: "Link eingeben"
  },
  imagecropper: {
    reset: "Zurücksetzen",
    updateEditCrop: "Fertig",
    undoEditCrop: "Rückgängig machen",
    customCrop: "Benutzer definiert"
  },
  rollback: {
    changes: "Änderungen",
    created: "Erstellt",
    headline: "Wählen Sie eine Version, um diese mit der aktuellen zu vergleichen",
    currentVersion: "Aktuelle Version",
    diffHelp: "Zeigt die Unterschiede zwischen der aktuellen und der ausgewählten Version an.<br />Text in <del>rot</del> fehlen in der ausgewählten Version, <ins>grün</ins> markierter Text wurde hinzugefügt.",
    noDiff: "Keine Unterschiede zwischen den beiden Versionen gefunden.",
    documentRolledBack: "Dokument wurde zurückgesetzt",
    htmlHelp: "Zeigt die ausgewählte Version als HTML an. Wenn Sie sich die Unterschiede zwischen zwei Versionen anzeigen lassen wollen, benutzen Sie bitte die Vergleichsansicht.",
    rollbackTo: "Zurücksetzen auf",
    selectVersion: "Version auswählen",
    view: "Ansicht",
    pagination: "Zeige Versionen von %0% zu %1% von %2% Versionen",
    versions: "Versionen",
    currentDraftVersion: "Aktulle Bearbeitungs Version",
    currentPublishedVersion: "Aktulle veröffentlichte Version"
  },
  scripts: {
    editscript: "Skript bearbeiten"
  },
  sections: {
    content: "Inhalte",
    forms: "Formulare",
    media: "Medien",
    member: "Mitglieder",
    packages: "Pakete",
    settings: "Einstellungen",
    translation: "Übersetzung",
    users: "Benutzer"
  },
  help: {
    tours: "Touren",
    theBestUmbracoVideoTutorials: "Die besten Umbraco-Video-Tutorials",
    umbracoForum: "Besuche our.umbraco.com",
    umbracoTv: "Besuche umbraco.tv",
    umbracoLearningBase: "Schaue gratis Tutorials",
    umbracoLearningBaseDescription: "von Umbraco Learning Base"
  },
  settings: {
    defaulttemplate: "Standardvorlage",
    importDocumentTypeHelp: "Wählen Sie die lokale .udt-Datei aus, die den zu importierenden Dokumenttyp enthält und fahren Sie mit dem Import fort. Die endgültige Übernahme erfolgt im Anschluss erst nach einer weiteren Bestätigung.",
    newtabname: "Beschriftung der neuen Registerkarte",
    nodetype: "Elementtyp",
    objecttype: "Typ",
    stylesheet: "Stylesheet",
    script: "Skript",
    tab: "Registerkarte",
    tabname: "Registerkartenbeschriftung",
    tabs: "Registerkarten",
    contentTypeEnabled: "Masterdokumenttyp aktiviert",
    contentTypeUses: "Dieser Dokumenttyp verwendet",
    noPropertiesDefinedOnTab: 'Für dieses Register sind keine Eigenschaften definiert. Klicken Sie oben auf "neue Eigenschaft hinzufügen", um eine neue Eigenschaft hinzuzufügen.',
    createMatchingTemplate: "Zugehörige Vorlage anlegen",
    addIcon: "Bildsymbol hinzufügen"
  },
  sort: {
    sortOrder: "Sortierreihenfolge",
    sortCreationDate: "Erstellungsdatum",
    sortDone: "Sortierung abgeschlossen.",
    sortHelp: "Ziehen Sie die Elemente an ihre gewünschte neue Position.",
    sortPleaseWait: "Bitte warten, die Seiten werden sortiert. Das kann einen Moment dauern.",
    sortEmptyState: "Dieser Knoten hat keine Unterknoten zum Sortieren"
  },
  speechBubbles: {
    validationFailedHeader: "Validierung",
    validationFailedMessage: "Validierungsfehler müssen behoben werden, bevor das Element gesichert werden kann",
    operationFailedHeader: "Fehlgeschlagen",
    operationSavedHeader: "Gesichert",
    invalidUserPermissionsText: "Unzureichende Benutzerberechtigungen. Vorgang kann nicht abgeschlossen werden.",
    operationCancelledHeader: "Abgebrochen",
    operationCancelledText: "Vorgang wurde durch eine benutzerdefinierte Erweiterung abgebrochen",
    contentTypeDublicatePropertyType: "Eigenschaft existiert bereits",
    contentTypePropertyTypeCreated: "Eigenschaft erstellt",
    contentTypePropertyTypeCreatedText: "Name: %0%  Datentyp: %1%",
    contentTypePropertyTypeDeleted: "Eigenschaft gelöscht",
    contentTypeSavedHeader: "Dokumenttyp gespeichert",
    contentTypeTabCreated: "Registerkarte erstellt",
    contentTypeTabDeleted: "Registerkarte gelöscht",
    contentTypeTabDeletedText: "Registerkarte %0% gelöscht",
    cssErrorHeader: "Stylesheet wurde nicht gespeichert",
    cssSavedHeader: "Stylesheet gespeichert",
    cssSavedText: "Stylesheet erfolgreich gespeichert",
    dataTypeSaved: "Datentyp gespeichert",
    dictionaryItemSaved: "Wörterbucheintrag gespeichert",
    editContentPublishedHeader: "Inhalt veröffentlicht",
    editContentPublishedText: "und ist auf der Website sichtbar",
    editMultiContentPublishedText: "%0% Documente veröffentlicht und auf der Website sichtbar",
    editVariantPublishedText: "%0% veröffentlicht und auf der Website sichtbar",
    editMultiVariantPublishedText: "%0% Documente veröffentlicht in Sprache %1% und auf der Website sichtbar",
    editContentSavedHeader: "Inhalte gespeichert",
    editContentSavedText: "Denken Sie daran, die Inhalte zu veröffentlichen, um die Änderungen sichtbar zu machen",
    editContentScheduledSavedText: "Der Termin für die Veröffentlichung wurde geändert",
    editVariantSavedText: "%0% gesichert",
    editContentSendToPublish: "Zur Abnahme eingereicht",
    editContentSendToPublishText: "Die Änderungen wurden zur Abnahme eingereicht",
    editVariantSendToPublishText: "%0% Änderungen wurden zur Abnahme eingereicht",
    editMediaSaved: "Medium gespeichert",
    editMediaSavedText: "Medium fehlerfrei gespeichert",
    editMemberSaved: "Mitglied gespeichert",
    editStylesheetPropertySaved: "Stylesheet-Regel gespeichert",
    editStylesheetSaved: "Stylesheet gespeichert",
    editTemplateSaved: "Vorlage gespeichert",
    editUserError: "Fehler beim Speichern des Benutzers.",
    editUserSaved: "Benutzer gespeichert",
    editUserTypeSaved: "Benutzertyp gepsichert",
    editUserGroupSaved: "Benutzergruppe gepsichert",
    fileErrorHeader: "Datei wurde nicht gespeichert",
    fileErrorText: "Datei konnte nicht gespeichert werden. Bitte überprüfen Sie die Schreibrechte auf Dateiebene.",
    fileSavedHeader: "Datei gespeichert",
    fileSavedText: "Datei erfolgreich gespeichert",
    languageSaved: "Sprache gespeichert",
    mediaTypeSavedHeader: "Medientyp gespeichert",
    memberTypeSavedHeader: "Mitgliedertyp gespeichert",
    memberGroupSavedHeader: "Mitgliedergruppe gespeichert",
    templateErrorHeader: "Vorlage wurde nicht gespeichert",
    templateErrorText: "Bitte prüfen Sie, ob möglicherweise zwei Vorlagen den gleichen Alias verwenden.",
    templateSavedHeader: "Vorlage gespeichert",
    templateSavedText: "Vorlage erfolgreich gespeichert!",
    contentUnpublished: "Veröffentlichung des Inhalts aufgehoben",
    contentCultureUnpublished: "Inhaltsvariante %0% unveröffentlicht",
    contentMandatoryCultureUnpublished: "Die Veröffentlichung der Pflichtsprache '%0%' wurde zurück genommen. Das gleiche gilt für alle Sprachen dieses Inhalts.",
    partialViewSavedHeader: "Partielle Ansicht gespeichert",
    partialViewSavedText: "Partielle Ansicht ohne Fehler gespeichert.",
    partialViewErrorHeader: "Partielle Ansicht nicht gespeichert",
    partialViewErrorText: "Fehler beim Speichern der Datei.",
    permissionsSavedFor: "Berechtigungen gesichert für",
    deleteUserGroupsSuccess: "%0% Benutzergruppen entfernt",
    deleteUserGroupSuccess: "%0% wurde entfernt",
    enableUsersSuccess: "%0% Benutzer aktiviert",
    disableUsersSuccess: "%0% Benutzer deaktiviert",
    enableUserSuccess: "%0% ist jetzt aktiviert",
    disableUserSuccess: "%0% ist jetzt deaktiviert",
    setUserGroupOnUsersSuccess: "Benutzergruppen wurden gesetzt",
    unlockUsersSuccess: "%0% Benutzer freigegeben",
    unlockUserSuccess: "%0% ist jetzt freigegeben",
    memberExportedSuccess: "Mitglied wurde in Datei exportiert",
    memberExportedError: "Beim Exportieren des Mitglieds trat ein Fehler auf",
    deleteUserSuccess: "Benutzer %0% wurde entfernt",
    resendInviteHeader: "Benutzer einladen",
    resendInviteSuccess: "Einladung wurde erneut an %0% geschickt",
    contentReqCulturePublishError: "Das Dokument kann nicht veröffentlicht werden, solange '%0%' nicht veröffentlicht wurde",
    contentCultureValidationError: "Validierung fehlgeschlagen für Sprache '%0%'",
    documentTypeExportedSuccess: "Dokumenttyp wurde in eine Datei exportiert",
    documentTypeExportedError: "Beim Exportieren des Dokumenttyps trat ein Fehler auf",
    scheduleErrReleaseDate1: "Das Veröffentlichungsdatum kann nicht in der Vergangenheit liegen",
    scheduleErrReleaseDate2: "Die Veröffentlichung kann nicht eingeplant werden, solange '%0%' (benötigt) nicht veröffentlicht wurde",
    scheduleErrReleaseDate3: "Die Veröffentlichung kann nicht eingeplant werden, solange '%0%' (benötigt) ein späteres Veröffentlichungsdatum hat als eine optionale Sprache",
    scheduleErrExpireDate1: "Das Ablaufdatum darf nicht in der Vergangenheit liegen",
    scheduleErrExpireDate2: "Das Ablaufdatum darf nicht vor dem Veröffentlichungsdatum liegen"
  },
  stylesheet: {
    addRule: "Neuer Stil",
    editRule: "Stil bearbeiten",
    editorRules: "Rich text editor Stile",
    editorRulesHelp: "Definiere die Styles, die im Rich-Text-Editor dieses Stylesheets verfügbar sein sollen.",
    editstylesheet: "Stylesheet bearbeiten",
    editstylesheetproperty: "Stylesheet-Regel bearbeiten",
    nameHelp: "Bezeichnung im Auswahlmenü des Rich-Text-Editors  ",
    preview: "Vorschau",
    previewHelp: "So wird der Text im Rich-Text-Editor aussehen.",
    selector: "Selector",
    selectorHelp: 'Benutze CSS Syntax, z. B.: "h1" oder ".redHeader"',
    styles: "Stile",
    stylesHelp: 'Die CSS-Auszeichnungen, die im Rich-Text-Editor verwendet werden soll, z. B.: "color:red;"',
    tabCode: "Kode",
    tabRules: "Rich Text Editor"
  },
  template: {
    deleteByIdFailed: "Beim Entfernen der Vorlage mit Id %0% trat ein Fehler auf",
    edittemplate: "Vorlage bearbeiten",
    insertSections: "Bereich",
    insertContentArea: "Platzhalter-Bereich verwenden",
    insertContentAreaPlaceHolder: "Platzhalter einfügen",
    insert: "Einfügen",
    insertDesc: "Wählen Sie, was in die Vorlage eingefügt werden soll",
    insertDictionaryItem: "Wörterbucheintrag einfügen",
    insertDictionaryItemDesc: "Ein Wörterbuchelement ist ein Platzhalter für lokalisierbaren Text. Das macht es einfach mehrsprachige Websites zu gestalten.",
    insertMacro: "Makro",
    insertMacroDesc: `
       Ein Makro ist eine konfigurierbare Komponente, die großartig
       für wiederverwendbare Teile Ihres Entwurfes sind,
      für welche Sie optionale Parameter benötigen, wie z. B. Galerien, Formulare oder Listen.
    `,
    insertPageField: "Umbraco-Feld",
    insertPageFieldDesc: `
      Zeigt den Wert eines benannten Feldes der aktuellen Seite an, mit der Möglichkeit den Wert zu verändern
      oder einen alternativen Ersatzwert zu wählen.
    `,
    insertPartialView: "Teilansicht (Partial View)",
    insertPartialViewDesc: `
      Eine Teilansicht ist eine eigenständige Vorlagen-Datei, die innerhalb einer anderen Vorlage verwendet werden kann.
      Sie ist gut geeignet, um "Markup"-Kode wiederzuverwenden oder komplexe Vorlagen in mehrere Dateien aufzuteilen.
    `,
    mastertemplate: "Basisvorlage",
    noMaster: "Keine Basis",
    renderBody: "Untergeordnete Vorlage einfügen",
    renderBodyDesc: `
      Verarbeitet den Inhalt einer untergeordneten Vorlage durch
      Einfügen eines <code>@RenderBody()</code> Platzhalters.
      `,
    defineSection: "Definiert einen benannten Bereich",
    defineSectionDesc: `
      Definiert einen Teil Ihrer Vorlage als benannten Bereich durch Umschließen mit <code>@section { ... }</code>.
      Dieser benannte Bereich kann in der übergeordneten Vorlage
      durch Verwendung von <code>@RenderSection</code> eingefügt werden.
      `,
    renderSection: "Füge einen benannten Bereich ein",
    renderSectionDesc: `
      Fügt einen benannten Bereich einer untergeordneten Vorlage durch Verwendung des Platzhalters <code>@RenderSection(name)</code> ein.
      Dies verarbeitet einen benannten Bereich einer untergeordneten Vorlage, der mit <code>@section [name]{ ... }</code> umschlossen, definiert wurde.
      `,
    sectionName: "Bereichsname",
    sectionMandatory: "Bereich ist notwendig",
    sectionMandatoryDesc: `
      Wenn notwendig, dann muss die untergeordnete Vorlage eine <code>@section</code> Definition gleichen Namens enthalten,
      anderfalls tritt ein Fehler auf.
    `,
    queryBuilder: "Abfrage-Generator",
    itemsReturned: "zurückgegebene Elemente, in",
    iWant: "Ich möchte",
    allContent: "den ganzen Inhalt",
    contentOfType: 'Inhalt vom Typ "%0%"',
    from: "von",
    websiteRoot: "meiner website",
    where: "wobei",
    and: "und",
    is: "ist",
    isNot: "ist nicht",
    before: "vor",
    beforeIncDate: "vor (inkl. gewähltes Datum)",
    after: "nach",
    afterIncDate: "nach (inkl. gewähltes Datum)",
    equals: "gleich",
    doesNotEqual: "ungleich",
    contains: "enthält",
    doesNotContain: "ohne",
    greaterThan: "größer als",
    greaterThanEqual: "größer als oder gleich",
    lessThan: "weniger als",
    lessThanEqual: "weniger als oder gleich",
    id: "Id",
    name: "Name",
    createdDate: "Datum der Erzeugung",
    lastUpdatedDate: "Datum der letzten Aktualisierung",
    orderBy: "sortiert nach",
    ascending: "aufsteigend",
    descending: "absteigend",
    template: "Vorlage"
  },
  grid: {
    media: "Image",
    macro: "Macro",
    insertControl: "Neues Element",
    chooseLayout: "Layout auswählen",
    addRows: "Neue Zeile",
    addElement: "Neuer Inhalt",
    dropElement: "Inhalt entfernen",
    settingsApplied: "Einstellungen anwenden",
    contentNotAllowed: "Dieser Inhalt ist hier <strong>nicht</strong> zugelassen",
    contentAllowed: "Dieser Inhalt ist hier zugelassen",
    clickToEmbed: "Klicken, um Inhalt einzubetten",
    clickToInsertImage: "Klicken, um Abbildung einzufügen",
    placeholderWriteHere: "Hier schreiben ...",
    gridLayouts: "Layouts",
    gridLayoutsDetail: "Layouts sind die grundlegenden Arbeitsflächen für das Gestaltungsraster. Üblicherweise sind nicht mehr als ein oder zwei Layouts nötig.",
    addGridLayout: "Layout hinzufügen",
    addGridLayoutDetail: "Passen Sie das Layout an, indem Sie die Spaltenbreiten einstellen und Abschnitte hinzufügen.",
    rowConfigurations: "Einstellungen für das Zeilenlayout",
    rowConfigurationsDetail: "Zeilen sind vordefinierte horizontale Zellenanordnungen",
    addRowConfiguration: "Zeilenlayout hinzufügen",
    addRowConfigurationDetail: "Passen Sie das Zeilenlayout an, indem Sie die Zellenbreite einstellen und Zellen hinzufügen.",
    columns: "Spalten",
    columnsDetails: "Insgesamte Spaltenanzahl im Layout",
    settings: "Einstellungen",
    settingsDetails: "Legen Sie fest, welche Einstellungen die Autoren anpassen können.",
    styles: "CSS-Stile",
    stylesDetails: "Legen Sie fest, welche Stile die Autoren anpassen können.",
    allowAllEditors: "Alle Elemente erlauben",
    allowAllRowConfigurations: "Alle Zeilenlayouts erlauben",
    maxItems: "Maximal erlaubte Elemente",
    maxItemsDescription: "Leer lassen oder auf 0 setzen für unbegrenzt",
    setAsDefault: "Als Standard setzen",
    chooseExtra: "Extra wählen",
    chooseDefault: "Standard wählen",
    areAdded: "wurde hinzugefügt"
  },
  contentTypeEditor: {
    compositions: "Mischungen",
    group: "Gruppe",
    noGroups: "Sie haben keine Gruppen hinzugefügt",
    addGroup: "Gruppe hinzufügen",
    inheritedFrom: "Übernimm von",
    addProperty: "Eigenschaft hinzufügen",
    requiredLabel: "Notwendige Bezeichnung",
    enableListViewHeading: "Listenansicht aktivieren",
    enableListViewDescription: `
      Konfiguriert die Verwendung einer sortier- und filterbaren Listenansicht der Unterknoten für diesen Dokumenttyp.
      Die Unterknoten werden nicht in Baumstruktur angezeigt.
    `,
    allowedTemplatesHeading: "Erlaubte Vorlagen",
    allowedTemplatesDescription: `
      Wählen Sie die Vorlagen, die Editoren für diesen Dokumenttyp wählen dürfen
    `,
    allowAsRootHeading: "Als Wurzelknoten zulassen",
    allowAsRootDescription: `
      Ermöglicht es Editoren diesen Dokumenttyp in der obersten Ebene der Inhalt-Baum-Strukur zu wählen
    `,
    childNodesHeading: "Erlaubte Dokumenttypen für Unterknoten",
    childNodesDescription: `
      Erlaubt es Inhalt der angegebenen Typen unterhalb Inhalten dieses Typs anzulegen
    `,
    chooseChildNode: "Wählen Sie einen Unterknoten",
    compositionsDescription: "Übernimm Tabs und Eigenschaften vone einem vorhandenen Inhaltstyp. Neue Tabs werden zum vorliegenden Inhaltstyp hinzugefügt oder mit einem gleichnamigen Tab zusammengeführt.",
    compositionInUse: "Dieser Inhaltstyp wird in einer Mischung verwendet und kann deshalb nicht selbst zusammengemischt werden.",
    noAvailableCompositions: "Es sind keine Inhaltstypen für eine Mischung vorhanden.",
    availableEditors: "Neu anlegen",
    reuse: "Vorhandenen nutzen",
    editorSettings: "Editor-Einstellungen",
    configuration: "Konfiguration",
    yesDelete: "Ja, entferne",
    movedUnderneath: "wurde verschoben unter",
    copiedUnderneath: "wurde kopiert unter",
    folderToMove: "Wähle den Ordner in den verschoben wird",
    folderToCopy: "Wähle den Ordner in den kopiert wird",
    structureBelow: "in der untenstehenden Baumstruktur",
    allDocumentTypes: "Alle Dokumenttypen",
    allDocuments: "Alle Inhalte",
    allMediaItems: "Alle Medien",
    usingThisDocument: "welche auf diesem Dokumenttyp beruhen, werden unwiderruflich entfernt, bitte bestätigen Sie, dass diese ebenfalls entfernt werden sollen.",
    usingThisMedia: "welche auf diesem Medientyp beruhen, werden unwiderruflich entfernt, bitte bestätigen Sie, dass diese ebenfalls entfernt werden sollen.",
    usingThisMember: "welche auf diesem Mitgliedstyp beruhen, werden unwiderruflich entfernt, bitte bestätigen Sie, dass diese ebenfalls entfernt werden sollen.",
    andAllDocuments: "und alle Inhalte, die auf diesem Typ basieren",
    andAllMediaItems: "und alle Medienelemente, die auf diesem Typ basieren",
    andAllMembers: "und alle Mitglieder, die auf diesem Typ basieren",
    memberCanEdit: "Mitglied kann bearbeiten",
    memberCanEditDescription: "Diese Eigenschaft zur Bearbeitung des Mitglieds auf seiner Profileseite freigeben",
    isSensitiveData: "sensibelle Daten",
    isSensitiveDataDescription: "Diese Eigenschaft für Editoren, die keine Berechtigung für sensibelle Daten haben, verbergen",
    showOnMemberProfile: "Auf Mitgliedsprofil anzeigen",
    showOnMemberProfileDescription: "Diesen Eigenschaftswert für die Anzeige auf der Profilseite des Mitglieds zulassen",
    tabHasNoSortOrder: "Tab hat keine Sortierung",
    compositionUsageHeading: "Wo wird diese Mischung verwendet?",
    compositionUsageSpecification: `
      Diese Mischung wird aktuell in den Mischungen folgender Dokumenttypen verwendet:
    `,
    variantsHeading: "Kultur basierte Variationen zulassen",
    variantsDescription: "Editoren erlauben, Inhalt dieses Typs in verschiedenen Sprachen anzulegen",
    allowVaryByCulture: "Kultur basierte Variationen zulassen",
    elementHeading: "Ist ein Elementtyp",
    elementDescription: `
    Ein Elementtyp ist z. B. für die Verwendung in <em>Nested Content</em> vorgesehen, nicht jedoch als Inhalt-Knoten in der Baumstruktur
    `,
    elementDoesNotSupport: "Dies kann nicht für Elementtypen verwendet werden"
  },
  languages: {
    addLanguage: "Sparche hinzufügen",
    mandatoryLanguage: "Notwendige Sprache",
    mandatoryLanguageHelp: "Eigenschaften müssen für diese Sprache ausgefüllt sein bevor ein Knoten veröffentlicht werden kann.",
    defaultLanguage: "Standardsprache",
    defaultLanguageHelp: "Eine Umbraco site kann nur eine Standardsprache haben.",
    changingDefaultLanguageWarning: "Ändern der Standardsprache kann zum Fehlen von Standard-Inhalt führen.",
    fallsbackToLabel: "Wird ersetzt durch",
    noFallbackLanguageOption: "Kein Ersatzsprache",
    fallbackLanguageDescription: `
      Um mehrsprachigem Inhalt zu ermöglichen durch eine andere Sprache ersetzt zu werden,
      falls die angefragte Sprache nicht verfügbar ist, wählen Sie diese Option hier aus.
    `,
    fallbackLanguage: "Ersatzsprache",
    none: "Keine",
    invariantPropertyUnlockHelp: "<strong>%0%</strong> wird zwischen Sprachen und Segmenten geteilt.",
    invariantCulturePropertyUnlockHelp: "<strong>%0%</strong> wird zwischen allen Sprachen geteilt.",
    invariantSegmentPropertyUnlockHelp: "<strong>%0%</strong> wird zwischen allen Segmenten geteilt.",
    invariantLanguageProperty: "Geteilt: Sprachen",
    invariantSegmentProperty: "Geteilt: Segmente"
  },
  macro: {
    addParameter: "Parameter hinzufügen",
    editParameter: "Parameter bearbeiten",
    enterMacroName: "Makroname vergeben",
    parameters: "Parameter",
    parametersDescription: "Definiere die Parameter, die verfügbar sein sollen, wenn dieses Makro verwendet wird."
  },
  modelsBuilder: {
    buildingModels: "Datenmodel erzeugen",
    waitingMessage: "Keine Sorge, das kann eine Weile dauern",
    modelsGenerated: "Datenmodel erzeugt",
    modelsGeneratedError: "Datenmodel konnte nicht erzeugt werden",
    modelsExceptionInUlog: "Erzeugung des Datenmodels fehlgeschlagen, siehe Ausnahmen in den Log-Daten"
  },
  templateEditor: {
    addDefaultValue: "Standardwert hinzufügen",
    defaultValue: "Standardwert",
    alternativeField: "Alternatives Feld",
    alternativeText: "Alternativer Text",
    casing: "Groß- und Kleinschreibung",
    encoding: "Kodierung",
    chooseField: "Feld auswählen",
    convertLineBreaks: "Zeilenumbrüche ersetzen",
    convertLineBreaksHelp: "Ersetzt Zeilenumbrüche durch das HTML-Tag <br />",
    customFields: "Benutzerdefinierte Felder",
    dateOnly: "nur Datum",
    formatAsDate: "Als Datum formatieren",
    htmlEncode: "HTML kodieren",
    htmlEncodeHelp: "Wandelt Sonderzeichen in HTML-Zeichencodes um",
    insertedAfter: "Wird nach dem Feldinhalt eingefügt",
    insertedBefore: "Wird vor dem Feldinhalt eingefügt",
    lowercase: "Kleinbuchstaben",
    none: "Keine",
    outputSample: "Beispiel-Ausgabe",
    postContent: "An den Feldinhalt anhängen",
    preContent: "Dem Feldinhalt voranstellen",
    recursive: "Rekursiv",
    recursiveDescr: "Ja, verwende es rekursiv",
    standardFields: "Standardfelder",
    uppercase: "Großbuchstaben",
    urlEncode: "URL kodieren",
    urlEncodeHelp: "Wandelt Sonderzeichen zur Verwendung in URLs um",
    usedIfAllEmpty: "Wird nur verwendet, wenn beide vorgenannten Felder leer sind",
    usedIfEmpty: "Dieses Feld wird nur verwendet, wenn das primäre Feld leer ist",
    withTime: "Datum und Zeit"
  },
  translation: {
    details: "Details zur Übersetzung",
    DownloadXmlDTD: "Herunterladen der XML-Defintionen (XML-DTD)",
    fields: "Felder",
    includeSubpages: "Einschließlich der Unterseiten",
    mailBody: `
      Hallo %0%,

      das Dokument '%1%' wurde von '%2%' zur Übersetzung in '%5%' freigegeben.

      Zum Bearbeiten verwenden Sie bitte diesen Link: http://%3%/translation/details.aspx?id=%4%.

      Sie können sich auch alle anstehenden Übersetzungen gesammelt im Umbraco-Verwaltungsbereich anzeigen lassen: http://%3%/umbraco

      Einen schönen Tag wünscht
      Ihr freundlicher Umbraco-Robot
	`,
    noTranslators: "Bitte erstellen Sie zuerst mindestens einen Übersetzer.",
    pageHasBeenSendToTranslation: "Die Seite '%0%' wurde zur Übersetzung gesendet",
    sendToTranslate: "Sendet die Seite '%0%' zur Übersetzung",
    totalWords: "Anzahl der Wörter",
    translateTo: "Übersetzen in",
    translationDone: "Übersetzung abgeschlossen.",
    translationDoneHelp: "Sie können eine Vorschau der Seiten anzeigen, die Sie gerade übersetzt haben, indem Sie sie unten anklicken. Wenn die Originalseite zugeordnet werden kann, erhalten Sie einen Vergleich der beiden Seiten angezeigt.",
    translationFailed: "Übersetzung fehlgeschlagen, die XML-Datei könnte beschädigt oder falsch formatiert sein",
    translationOptions: "Übersetzungsoptionen",
    translator: "Übersetzer",
    uploadTranslationXml: "Hochladen der XML-Übersetzungsdatei"
  },
  treeHeaders: {
    content: "Inhalt",
    contentBlueprints: "Inhalt-Vorlage",
    media: "Medien",
    cacheBrowser: "Zwischenspeicher",
    contentRecycleBin: "Papierkorb",
    createdPackages: "Erstellte Pakete",
    dataTypes: "Datentypen",
    dictionary: "Wörterbuch",
    installedPackages: "Installierte Pakete",
    installSkin: "Design-Skin installieren",
    installStarterKit: "Starter-Kit installieren",
    languages: "Sprachen",
    localPackage: "Lokales Paket hochladen und installieren",
    macros: "Makros",
    mediaTypes: "Medientypen",
    member: "Mitglieder",
    memberGroups: "Mitgliedergruppen",
    memberRoles: "Mitgliederrollen",
    memberTypes: "Mitglieder-Typen",
    documentTypes: "Dokumententypen",
    relationTypes: "Relationstypen",
    packager: "Pakete",
    packages: "Pakete",
    partialViews: "Teilansicht (Partial View)",
    partialViewMacros: "Makro-Teilansicht(Partial View Macro Files)",
    repositories: "Paket-Repositories",
    runway: "'Runway' installieren",
    runwayModules: "Runway-Module",
    scripting: "Server-Skripte",
    scripts: "Client-Skripte",
    stylesheets: "Stylesheets",
    templates: "Vorlagen",
    logViewer: "Log-Einträge anzeigen",
    users: "Benutzer",
    settingsGroup: "Einstellungen",
    templatingGroup: "Vorlagen",
    thirdPartyGroup: "Drittanbieter"
  },
  update: {
    updateAvailable: "Neues Update verfügbar",
    updateDownloadText: "%0% verfügbar, hier klicken zum Herunterladen",
    updateNoServer: "Keine Verbindung zum Update-Server",
    updateNoServerError: "Fehler beim Überprüfen der Updates. Weitere Informationen finden Sie im Stacktrace."
  },
  user: {
    access: "Zugang",
    accessHelp: "Basierend auf den zugewiesenen Gruppen und Startknoten, hat der Benutzer Zugang zu folgenden Knoten",
    assignAccess: "Zugang zuweisen",
    administrators: "Administrator",
    categoryField: "Feld für Kategorie",
    createDate: "Benutzer angelegt",
    changePassword: "Kennwort ändern",
    changePhoto: "Foto ändern",
    emailRequired: "Benötigt - geben Sie eine Email Adresse für diesen User an",
    newPassword: "Neues Kennwort",
    newPasswordFormatLengthTip: "Noch %0% Zeichen benötigt!",
    newPasswordFormatNonAlphaTip: "Es sollten mindestens %0% Sonderzeichen verwendet werden.",
    noLockouts: "wurde nicht ausgeschlossen",
    noPasswordChange: "Das Kennwort wurde nicht geändert",
    confirmNewPassword: "Neues Kennwort (Bestätigung)",
    changePasswordDescription: "Sie können Ihr Kennwort für den Zugriff auf den Umbraco-Verwaltungsbereich ändern, indem Sie das nachfolgende Formular ausfüllen und auf 'Kennwort ändern' klicken",
    contentChannel: "Schnittstelle für externe Editoren",
    createAnotherUser: "Weiteren Benutzer anlegen",
    createUserHelp: `
      Lege neue Benutzer an, um ihnen Zugang zum Umbraco-Back-Office zu geben.
      Während des Anlegens eines neuen Benutzer wird ein Kennwort erzeugt, das Sie dem Benutzer mitteilen können.
    `,
    descriptionField: "Feld für Beschreibung",
    disabled: "Benutzer endgültig deaktivieren",
    documentType: "Dokumenttyp",
    editors: "Editor",
    excerptField: "Feld für Textausschnitt",
    failedPasswordAttempts: "Fehlgeschlagene Anmeldeversuche",
    goToProfile: "Benutzerprofil aufrufen",
    groupsHelp: "Gruppen hinzufügen, um Zugang und Berechtigungen zuzuweisen",
    inviteAnotherUser: "Weitere Benutzer einladen",
    inviteUserHelp: `
      Laden Sie neue Benutzer ein, um ihnen Zugang zum Umbraco-Back-Office zu geben.
      Eine Einladungs-E-Mail wird an dem Benutzer geschickt. Diese enthält Informationen, wie sich der Benutzer im Umbraco-Back-Office anmelden kann.
      Einladungen sind 72 Stunden lang gültig.
    `,
    language: "Sprache",
    languageHelp: "Bestimmen Sie die Sprache für Menüs und Dialoge",
    lastLockoutDate: "Letztes Abmeldedatum",
    lastLogin: "Letzte Anmeldung",
    lastPasswordChangeDate: "letzte Änderung des Kennworts",
    loginname: "Benutzername",
    mediastartnode: "Startelement in der Medienbibliothek",
    mediastartnodehelp: "Beschränke die Medien-Bibliothek auf einen bestimmen Startknoten",
    mediastartnodes: "Medien-Startknoten",
    mediastartnodeshelp: "Beschränke die Medien-Bibliothek auf bestimme Startknoten",
    modules: "Bereiche",
    noConsole: "Umbraco-Back-Office sperren",
    noLogin: "hat sich noch nie angemeldet",
    oldPassword: "Altes Kennwort",
    password: "Kennwort",
    resetPassword: "Kennwort zurücksetzen",
    passwordChanged: "Ihr Kennwort wurde geändert!",
    passwordConfirm: "Bitte bestätigen Sie das neue Kennwort",
    passwordEnterNew: "Geben Sie Ihr neues Kennwort ein",
    passwordIsBlank: "Ihr neues Kennwort darf nicht leer sein!",
    passwordCurrent: "Aktuelles Kennwort",
    passwordInvalid: "Aktuelles Kennwort falsch",
    passwordIsDifferent: "Ihr neues Kennwort und die Wiederholung Ihres neuen Kennworts stimmen nicht überein. Bitte versuchen Sie es erneut!",
    passwordMismatch: "Die Bestätigung Ihres Kennworts stimmt nicht mit dem angegebenen neuen Kennwort überein!",
    permissionReplaceChildren: "Die Berechtigungen der untergeordneten Elemente ersetzen",
    permissionSelectedPages: "Die Berechtigungen für folgende Seiten werden angepasst:",
    permissionSelectPages: "Dokumente auswählen, um deren Berechtigungen zu ändern",
    removePhoto: "Foto entfernen",
    permissionsDefault: "Normale Berechtigungen",
    permissionsGranular: "Detailierte Berechtigungen",
    permissionsGranularHelp: "Knoten basierte Berechtigungen vergeben",
    profile: "Profil",
    searchAllChildren: "Untergeordnete Elemente durchsuchen",
    sectionsHelp: "Bereiche hinzufügen, um Benutzern Zugang zu gewähren",
    selectUserGroups: "Wählen Sie Benutzergruppen",
    noStartNode: "Kein Startknoten ausgewählt",
    noStartNodes: "Keine Startknoten ausgewählt",
    startnode: "Startknoten in den Inhalten",
    startnodehelp: "Inhalt auf bestimmt Startknoten beschränken",
    startnodes: "Startknoten in den Inhalten",
    startnodeshelp: "Inhalt auf bestimmte Startknoten beschränken",
    updateDate: "Benutzer zuletzt aktualiert",
    userCreated: "wurde angelegt",
    userCreatedSuccessHelp: "Der Benutzer wurde erfolgreich angelegt. Zu Anmelden im Umbraco-Back-Office verwenden Sie bitte folgendes Kennwort:",
    userManagement: "Benutzer Verwaltung",
    username: "Benutzername",
    userPermissions: "Berechtigungen",
    usergroup: "Benutzergruppe",
    userInvited: "wurde eingeladen",
    userInvitedSuccessHelp: "Eine Einladung mit Anweisungen zur Anmeldung im Umbraco-Back-Office wurde dem neuen Benutzer zugeschickt.",
    userinviteWelcomeMessage: "Hallo und Willkommen bei Umbraco! In nur einer Minute sind Sie bereit loszulegen, Sie müssen nur ein Kennwort festlegen.",
    userinviteExpiredMessage: "Willkommen bei Umbraco! Bedauerlicherweise ist Ihre Einladung verfallen. Bitte kontaktieren Sie Ihren Administrator und bitten Sie ihn, diese erneut zu schicken.",
    writer: "Autor",
    change: "Änderung",
    yourProfile: "Ihr Profil",
    yourHistory: "Ihr Verlauf",
    sessionExpires: "Sitzung läuft ab in",
    inviteUser: "Benutzer einladen",
    createUser: "Benutzer anlegen",
    sendInvite: "Einladung schicken",
    backToUsers: "Zurück zu den Benutzern",
    inviteEmailCopySubject: "Umbraco: Einladung",
    inviteEmailCopyFormat: `
 <html>
	<head>
		<meta name='viewport' content='width=device-width'>
		<meta http-equiv='Content-Type' content='text/html; charset=UTF-8'>
	</head>
	<body class='' style='font-family: sans-serif; -webkit-font-smoothing: antialiased; font-size: 14px; color: #392F54; line-height: 22px; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; background: #1d1333; margin: 0; padding: 0;' bgcolor='#1d1333'>
		<style type='text/css'> @media only screen and (max-width: 620px) {table[class=body] h1 {font-size: 28px !important; margin-bottom: 10px !important; } table[class=body] .wrapper {padding: 32px !important; } table[class=body] .article {padding: 32px !important; } table[class=body] .content {padding: 24px !important; } table[class=body] .container {padding: 0 !important; width: 100% !important; } table[class=body] .main {border-left-width: 0 !important; border-radius: 0 !important; border-right-width: 0 !important; } table[class=body] .btn table {width: 100% !important; } table[class=body] .btn a {width: 100% !important; } table[class=body] .img-responsive {height: auto !important; max-width: 100% !important; width: auto !important; } } .btn-primary table td:hover {background-color: #34495e !important; } .btn-primary a:hover {background-color: #34495e !important; border-color: #34495e !important; } .btn  a:visited {color:#FFFFFF;} </style>
		<table border="0" cellpadding="0" cellspacing="0" class="body" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%; background: #1d1333;" bgcolor="#1d1333">
			<tr>
				<td style="font-family: sans-serif; font-size: 14px; vertical-align: top; padding: 24px;" valign="top">
					<table style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;">
						<tr>
							<td background="https://umbraco.com/umbraco/assets/img/application/logo.png" bgcolor="#1d1333" width="28" height="28" valign="top" style="font-family: sans-serif; font-size: 14px; vertical-align: top;">
								<!--[if gte mso 9]> <v:rect xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false" style="width:30px;height:30px;"> <v:fill type="tile" src="https://umbraco.com/umbraco/assets/img/application/logo.png" color="#1d1333" /> <v:textbox inset="0,0,0,0"> <![endif]-->
								<div> </div>
								<!--[if gte mso 9]> </v:textbox> </v:rect> <![endif]-->
							</td>
							<td style="font-family: sans-serif; font-size: 14px; vertical-align: top;" valign="top"></td>
						</tr>
					</table>
				</td>
			</tr>
		</table>
		<table border='0' cellpadding='0' cellspacing='0' class='body' style='border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%; background: #1d1333;' bgcolor='#1d1333'>
			<tr>
				<td style='font-family: sans-serif; font-size: 14px; vertical-align: top;' valign='top'> </td>
				<td class='container' style='font-family: sans-serif; font-size: 14px; vertical-align: top; display: block; max-width: 560px; width: 560px; margin: 0 auto; padding: 10px;' valign='top'>
					<div class='content' style='box-sizing: border-box; display: block; max-width: 560px; margin: 0 auto; padding: 10px;'>
						<br>
						<table class='main' style='border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%; border-radius: 3px; background: #FFFFFF;' bgcolor='#FFFFFF'>
							<tr>
								<td class='wrapper' style='font-family: sans-serif; font-size: 14px; vertical-align: top; box-sizing: border-box; padding: 50px;' valign='top'>
									<table border='0' cellpadding='0' cellspacing='0' style='border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;'>
										<tr>
											<td style='line-height: 24px; font-family: sans-serif; font-size: 14px; vertical-align: top;' valign='top'>
												<h1 style='color: #392F54; font-family: sans-serif; font-weight: bold; line-height: 1.4; font-size: 24px; text-align: left; text-transform: capitalize; margin: 0 0 30px;' align='left'>
													Hallo %0%,
												</h1>
												<p style='color: #392F54; font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0 0 15px;'>
													Sie wurden von <a href="mailto:%4%" style="text-decoration: underline; color: #392F54; -ms-word-break: break-all; word-break: break-all;">%1%</a> ins Umbraco-Back-Office eingeladen.
												</p>
												<p style='color: #392F54; font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0 0 15px;'>
													Nachricht von <a href="mailto:%1%" style="text-decoration: none; color: #392F54; -ms-word-break: break-all; word-break: break-all;">%1%</a>:
													<br/>
													<em>%2%</em>
												</p>
												<table border='0' cellpadding='0' cellspacing='0' class='btn btn-primary' style='border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%; box-sizing: border-box;'>
													<tbody>
														<tr>
															<td align='left' style='font-family: sans-serif; font-size: 14px; vertical-align: top; padding-bottom: 15px;' valign='top'>
																<table border='0' cellpadding='0' cellspacing='0' style='border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: auto;'>
																	<tbody>
																		<tr>
																			<td style='font-family: sans-serif; font-size: 14px; vertical-align: top; border-radius: 5px; text-align: center; background: #35C786;' align='center' bgcolor='#35C786' valign='top'>
																				<a href='%3%' target='_blank' rel='noopener' style='color: #FFFFFF; text-decoration: none; -ms-word-break: break-all; word-break: break-all; border-radius: 5px; box-sizing: border-box; cursor: pointer; display: inline-block; font-size: 14px; font-weight: bold; background: #35C786; margin: 0; padding: 12px 30px; border: 1px solid #35c786;'>
																				Um diese Einladung anzunehmen,<br>klicken Sie diese Schaltfläche
																				</a>
																			</td>
																		</tr>
																	</tbody>
																</table>
															</td>
														</tr>
													</tbody>
												</table>
												<p style='max-width: 400px; display: block; color: #392F54; font-family: sans-serif; font-size: 14px; line-height: 20px; font-weight: normal; margin: 15px 0;'>
												Falls die Schaltfläche nicht funktioniert, kopieren Sie folgenden URL und fügen ihn im Browser ein:</p>
													<table border='0' cellpadding='0' cellspacing='0'>
														<tr>
															<td style='-ms-word-break: break-all; word-break: break-all; font-family: sans-serif; font-size: 11px; line-height:14px;'>
																<font style="-ms-word-break: break-all; word-break: break-all; font-size: 11px; line-height:14px;">
																	<a style='-ms-word-break: break-all; word-break: break-all; color: #392F54; text-decoration: underline; font-size: 11px; line-height:15px;' href='%3%'>%3%</a>
																</font>
															</td>
														</tr>
													</table>
												</p>
											</td>
										</tr>
									</table>
								</td>
							</tr>
						</table>
						<br><br><br>
					</div>
				</td>
				<td style='font-family: sans-serif; font-size: 14px; vertical-align: top;' valign='top'> </td>
			</tr>
		</table>
	</body>
</html>
`,
    defaultInvitationMessage: "Einladung erneut verschicken...",
    deleteUser: "Benutzer entfernen",
    deleteUserConfirmation: "Wollen Sie dieses Benutzerkonto wirklich entfernen?",
    stateAll: "Alle",
    stateActive: "Aktiv",
    stateDisabled: "Gesperrt",
    stateLockedOut: "Ausgeschlossen",
    stateInvited: "Eingeladen",
    stateInactive: "Nicht aktiv",
    sortNameAscending: "Name (A-Z)",
    sortNameDescending: "Name (Z-A)",
    sortCreateDateAscending: "Oldest",
    sortCreateDateDescending: "Newest",
    sortLastLoginDateDescending: "Last login"
  },
  validation: {
    validation: "Validierung",
    validateAsEmail: "Prüfe auf gültiges E-Mail-Format",
    validateAsNumber: "Prüfe auf gültiges Zahlen-Format",
    validateAsUrl: "Prüfe auf gültiges URL-Format",
    enterCustomValidation: "...oder verwende eigene Validierung",
    fieldIsMandatory: "Pflichtfeld",
    validationRegExp: "Regulären Ausdruck eingeben",
    minCount: "Fügen Sie mindestens",
    maxCount: "Fügen Sie maximal",
    items: "Element(e) hinzu",
    itemsSelected: "Element(e) ausgewählt",
    invalidDate: "Ungültiges Datum",
    invalidNumber: "Keine Zahl",
    invalidEmail: "Ungültiges E-Mail-Format",
    invalidNull: "Der Wert darf nicht ungesetzt bleiben",
    invalidEmpty: "Der Wert darf nicht leer bleiben",
    invalidPattern: "Der Wert ist ungültig",
    customValidation: "Eigene Validierung"
  },
  healthcheck: {
    checkSuccessMessage: "Wert wurde auf den empfohlenen Wert gesetzt: '%0%'.",
    checkErrorMessageDifferentExpectedValue: "Erwartete Wert '%1%' für '%2%' in der Konfigurationsdatei '%3%', '%0%' wurde jedoch gefunden.",
    checkErrorMessageUnexpectedValue: "Unerwarteten Wert '%0%' für '%2%' in der Konfigurationsdatei '%3%' gefunden.",
    macroErrorModeCheckSuccessMessage: `"MacroErrors" auf '%0%' gesetzt.`,
    macroErrorModeCheckErrorMessage: `
      "MacroErrors" sind auf '%0%' gesetzt,
      was verhindert, dass einige oder alle Seiten Ihrer Website vollständig geladen werden, falls Fehler in Makros auftreten. Schaltfläche "Beheben" setzt den Wert auf '%1%'.
    `,
    httpsCheckValidCertificate: "Ihr Website-Zertifikat (SSL) ist gültig.",
    httpsCheckInvalidCertificate: "(SSL-)Zertifikat-Validierungsfehler: '%0%'",
    httpsCheckExpiredCertificate: "Ihr Website-Zertifikat (SSL) ist abgelaufen.",
    httpsCheckExpiringCertificate: "Ihr Website-Zertifikat (SSL) wird in %0% Tagen ablaufen.",
    healthCheckInvalidUrl: "Fehler beim PINGen der URL %0% - '%1%'",
    httpsCheckIsCurrentSchemeHttps: "Sie betrachten diese Website %0% unter Verwendung des HTTPS-Schemas.",
    compilationDebugCheckSuccessMessage: "'Debug' Kompilierungsmodus ist abgeschaltet.",
    compilationDebugCheckErrorMessage: "'Debug' Kompilierungsmodus ist gegenwertig eingeschaltet. Es ist empfehlenswert diesen vor Live-Gang abzuschalten.",
    clickJackingCheckHeaderFound: "Der Header oder das Meta-Tag <strong>X-Frame-Options</strong> ist vorhanden. Diese dienen zur Kontrolle, ob eine Site in IFRAMES anderer Sites angezeigt werden kann.",
    clickJackingCheckHeaderNotFound: "Der Header oder das Meta-Tag <strong>X-Frame-Options</strong> ist <strong>nicht</strong> vorhanden. Es dient zur Kontrolle, ob eine Site in IFRAMES anderer Sites angezeigt werden kann.",
    noSniffCheckHeaderFound: "Der Header oder das Meta-Tag <strong>X-Content-Type-Options</strong> ist vorhanden. Diese dienen zum Schutz gegen MIME-'Schnüffeln'-Schwachstellen. ",
    noSniffCheckHeaderNotFound: "Der Header oder das Meta-Tag <strong>X-Content-Type-Options</strong> ist <strong>nicht</strong> vorhanden. Diese dienen zum Schutz gegen MIME-'Schnüffeln'-Schwachstellen. ",
    hSTSCheckHeaderFound: "Der Header <strong>Strict-Transport-Security</strong>, auch bekannt als HSTS-Header, ist vorhanden.",
    hSTSCheckHeaderNotFound: "Der Header <strong>Strict-Transport-Security</strong>, auch bekannt als HSTS-Header, ist <strong>nicht</strong> vorhanden.",
    xssProtectionCheckHeaderFound: "Der Header <strong>X-XSS-Protection</strong> ist vorhanden.",
    xssProtectionCheckHeaderNotFound: "Der Header <strong>X-XSS-Protection</strong> ist <strong>nicht</strong> vorhanden",
    excessiveHeadersFound: "Folgende Header, die Informationen über die Website-Technologie preisgeben, sind vorhanden: <strong>%0%</strong>.",
    excessiveHeadersNotFound: "Es sind keine Header, die Informationen über die Website-Technologie preisgeben, vorhanden.",
    smtpMailSettingsConnectionSuccess: "Die SMTP-Einstellungen sind korrekt konfiguriert und der Dienst arbeitet wie erwartet.",
    notificationEmailsCheckSuccessMessage: "Die E-Mail-Adresse für Benachrichtigungen wurde auf <strong>%0%</strong> eingestellt.",
    notificationEmailsCheckErrorMessage: "Die E-Mail-Adresse für Benachrichtigungen ist noch auf den Standardwert <strong>%0%</strong> gestellt."
  },
  redirectUrls: {
    disableUrlTracker: "URL-Änderungsaufzeichnung abschalten",
    enableUrlTracker: "URL-Änderungsaufzeichnung einschalten",
    culture: "Kultur",
    originalUrl: "Original URL",
    redirectedTo: "Weiterleiten zu",
    redirectUrlManagement: "URL-Weiterleitungen verwalten",
    panelInformation: "Die folgenden URLs leiten auf diesen Inhalt:",
    noRedirects: "Es wurden keine Weiterleitungen angelegt",
    noRedirectsDescription: `
      Wenn eine veröffentlichte Seite umbenannt oder verschoben wird,
      erzeugt dieses CMS automatisch eine entsprechende Weiterleitung.
    `,
    redirectRemoved: "URL-Weiterleitung wurde entfernt.",
    redirectRemoveError: "Beim Entfernen der URL-Weiterleitung ist ein Fehler aufgetreten.",
    redirectRemoveWarning: "Dies entfernt die Weiterleitung",
    confirmDisable: "Wollen Sie die URL-Änderungsaufzeichnung wirklich abschalten?",
    disabledConfirm: "Die URL-Änderungsaufzeichnung wurde abgeschaltet.",
    disableError: "Fehler während der Abschaltung der URL-Änderungsaufzeichnung, weitere Information finden Sie in den Log-Dateien.",
    enabledConfirm: "Die URL-Änderungsaufzeichnung wurde eingeschaltet.",
    enableError: "Fehler während der Aktivierung der URL-Änderungsaufzeichnung, weitere Information finden Sie in den Log-Dateien."
  },
  emptyStates: {
    emptyDictionaryTree: "Das Wörterbuch ist leer"
  },
  textbox: {
    characters_left: "Buchstaben verbleiben"
  },
  recycleBin: {
    contentTrashed: "Inhalt mit Id = {0} des Oberknotens mit Id = {1} wurde verworfen",
    mediaTrashed: "Medienelement mit Id = {0} des Oberknotens mit Id = {1} wurde verworfen",
    itemCannotBeRestored: "Dieses Element kann nicht automatisch wiederhergestellt werden",
    itemCannotBeRestoredHelpText: `
      Es gibt keine Position für das automatische Wiederherstellen dieses Elementes.
      Sie können es manuell mit Hilfe der untenstehenden Baumstruktur verschieben.
    `,
    wasRestored: "wurde wiederhergestellt unterhalb von"
  },
  relationType: {
    direction: "Richtung",
    parentToChild: "Ober- zu Unterknoten",
    bidirectional: "Bidirektional",
    parent: "Oberknoten",
    child: "Unterknoten",
    count: "Anzahl",
    relations: "Relationen",
    created: "Angelegt",
    comment: "Kommentar",
    name: "Name",
    noRelations: "Es gibt keine Relationen für diesen Typ.",
    tabRelationType: "Relationentyp",
    tabRelations: "Relationen"
  },
  dashboardTabs: {
    contentIntro: "Lassen Sie uns beginnen",
    contentRedirectManager: "URL-Weiterleitungen verwalten",
    mediaFolderBrowser: "Inhalt",
    settingsWelcome: "Begrüßung",
    settingsExamine: "Examine Management",
    settingsPublishedStatus: "Status der Veröffentlichungen",
    settingsModelsBuilder: "Models Builder",
    settingsHealthCheck: "Systemzustand prüfen",
    memberIntro: "Lassen Sie uns beginnen",
    formsInstall: "Umbraco Forms installieren"
  },
  visuallyHiddenTexts: {
    goBack: "zurück gehen",
    activeListLayout: "Aktives Layout:",
    jumpTo: "Springe zu",
    group: "Gruppe",
    passed: "bestanden",
    warning: "alarmierend",
    failed: "fehlgeschlagen",
    suggestion: "Vorschlag",
    checkPassed: "Prüfung bestanden",
    checkFailed: "Prüfung fehlgeschlagen",
    openBackofficeSearch: "Back-Office Suche öffnen",
    openCloseBackofficeHelp: "Back-Office Hilfe öffnen / schliessen",
    openCloseBackofficeProfileOptions: "Ihre Profil-Einstellungen öffnen / schliessen",
    profileOptions: "Profil-Einstellungen"
  },
  logViewer: {
    selectAllLogLevelFilters: "Wählen Sie Alle",
    deselectAllLogLevelFilters: "Alle abwählen"
  },
  clipboard: {
    labelForCopyAllEntries: "%0% kopieren",
    labelForArrayOfItemsFrom: "%0% von %1%",
    labelForArrayOfItems: "Sammlung von %0%",
    labelForRemoveAllEntries: "Alle Elemente entfernen",
    labelForClearClipboard: "Zwischenablage löschen",
    labelForCopyToClipboard: "Kopieren in Zwischenablage"
  },
  formsDashboard: {
    formsHeadline: "Umbraco Forms",
    formsDescription: `Erstellen Sie Formulare mithilfe einer intuitiven Benutzeroberfläche. Von einfachen Kontaktformularen
      die Email verschicken bis hin zu komplexen Fragebögen die mit einem CRM System verbunden sind. Ihre Kunden werden es lieben!
    `
  },
  contentTemplatesDashboard: {
    whatHeadline: "Was sind Inhaltsvorlagen?",
    whatDescription: `Inhaltsvorlagen sind vordefinierte Inhalte die ausgewählt werden können
      wenn Sie einen neuen Inhaltsknoten anlegen wollen.
    `,
    createHeadline: "Wie erstelle ich eine Inhaltsvorlage?",
    createDescription: `
            <p>Es gibt zwei Möglichkeiten eine Inhaltsvorlage zu erstellen:</p>
            <ul>
                <li>Rechtsklicken Sie einen Inhaltsknoten und wählen Sie "Inhaltsvorlage erstellen" aus.</li>
                <li>Rechtsklicken Sie den Inhaltsvorlagen-Baum und wählen Sie den Dokumententypen aus für den Sie eine Vorlage erstellen wollen.</li>
            </ul>
            <p>Wenn Sie einen Namen vergen haben können Reakteure diese als Vorlage für neue Seiten benutzen.</p>
        `,
    manageHeadline: "Wie verwalte ich eine Inhaltsvorlage?",
    manageDescription: `Sie können Inhaltsvorlagen bearbeiten und löschen in dem Sie im Inhaltsvorlage-Baum die gewünschte
      Vorlage auswählen. Außerdem können Sie auch direkt den Dokumenttypen bearbeiten oder löschen auf dem die Vorlage basiert
    `
  },
  preview: {
    endLabel: "Beenden",
    endTitle: "Vorschau beenden",
    openWebsiteLabel: "Website Vorschau",
    openWebsiteTitle: "Website in Vorschaumodus öffnen",
    returnToPreviewHeadline: "Websitevorschau anzeigen?",
    returnToPreviewDescription: `Sie haben den Vorschaumodus beendet, wollen Sie ihn erneut öffnen um
      gespeicherte Version der Website anzusehen?
    `,
    returnToPreviewAcceptButton: "Vorschau der letzten Version anzeigen",
    returnToPreviewDeclineButton: "Veröffentlichte Version anzeigen",
    viewPublishedContentHeadline: "Veröffentlichte Version anzeigen?",
    viewPublishedContentDescription: `Sie befinden sich im Vorschaumodus, wollen Sie ihn verlassen um die letzte
      veröffentlichte Version ihrer Website zu sehen?
    `,
    viewPublishedContentAcceptButton: "Veröffentlichte Version anzeigen",
    viewPublishedContentDeclineButton: "Im Vorschaumodus bleiben"
  },
  permissions: {
    FolderCreation: "Ornder erstellen",
    FileWritingForPackages: "Dateien durch Packages erstellen lassen",
    FileWriting: "Dateien schreiben",
    MediaFolderCreation: "Medien Ordner stellen"
  },
  treeSearch: {
    searchResult: "Element zurückgegeben",
    searchResults: "Elemente zurückgegeben"
  },
  routing: {
    routeNotFoundTitle: "Seite wurde nicht gefunden",
    routeNotFoundDescription: "Die angeforderte Seite konnte nicht gefunden werden. Bitte überprüfen Sie die URL und versuchen Sie es erneut.",
    routeForbiddenTitle: "Zugriff verweigert",
    routeForbiddenDescription: "Sie haben keine Berechtigung, auf diese Seite zuzugreifen. Bitte wenden Sie sich an Ihren Administrator, um Unterstützung zu erhalten."
  }
};
export {
  t as default
};
//# sourceMappingURL=de-DBVJuArv.js.map
