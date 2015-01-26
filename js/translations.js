angular.module('registries')
.config(['$translateProvider', function($translateProvider) {
	$translateProvider.preferredLanguage('sk');
	$translateProvider.translations('sk', {
		"menu.stadium.title": "Športový objekt",
		"menu.new.competition.lower.level.she":"Nová súťaž",
		"menu.search.competition.lower.level":"Hľadať súťaž",
		"menu.new.competitionPart.lower.level.she":"Nová časť súťaže",
		"menu.search.competitionPart.lower.level":"Hľadať časť súťaže",
		"menu.new.schedule.lower.level":"Nový termín kola",
		"menu.search.schedule.lower.level":"Hľadať termín",
		"menu.refereeReport.new.lower.level":"Nový zápis o stretnutí",
		"menu.refereeReport.search.lower.level":"Hľadať zápis o stretnutí",
		"menu.nomination.new.lower.level":"Nová nominácia",
		"menu.nomination.search.lower.level":"Hľadať nomináciu",
		"menu.new.season.lower.level":"Nový súťažný ročník",
		"menu.search.season.lower.level":"Hľadať súťažný ročník",
		"menu.new.ageCategory.lower.level.she":"Nová veková kategória",
		"menu.search.ageCategory.lower.level":"Hľadať vekovú kategóriu",

		"schema.towns.town":"Mesto",

		"schema.people.listFields.registrationID":"Registračné číslo",
		"schema.people.listFields.surName":"Priezvisko",
		"schema.people.listFields.name":"Meno",
		"schema.people.listFields.birthDate":"Dátum narodenia",
		"schema.people.listFields.city":"Mesto",

		"schema.people.profile.yes":"Áno",
		"schema.people.profile.no":"Nie",
		"schema.people.title":"Osoba",
		"schema.people.personalProfile":"Môj profil",
		"schema.people.baseData": "Základné údaje",
		"schema.people.identifier": "Identifikačné číslo",
		"schema.people.registrationID": "Registračné číslo",
		"schema.people.name": "Meno",
		"schema.people.surName": "Priezvisko",
		"schema.people.state.of.person":"Stav osoby",
		"schema.people.bornName": "Rodné priezvisko",
		"schema.people.title.before":"Titul pred",
		"schema.people.title.after":"Titul za",
		"schema.people.birthDate":"Dátum narodenia",
		"schema.people.gender":"Pohlavie",
		"schema.people.nationality":"Štátna príslušnosť",
		"schema.people.photo":"Fotografia",
		"schema.people.photoInfo":"Fotografie",
		"schema.people.email":"E-mail",
		"schema.people.mobileNumber":"Mobil",
		"schema.people.phoneNumber":"Telefón",
		"schema.people.country":"Štát",
		"schema.people.zipCode":"PSČ",
		"schema.people.city":"Obec",
		"schema.people.houseNumber":"Číslo domu",
		"schema.people.street":"Ulica",
		"schema.people.contactInfo":"Kontaktné údaje",
		"schema.people.bankInfo":"Fakturačné údaje",
		"schema.people.bankAccount":"Číslo účtu",
		"schema.people.bankCode":"Kód banky",
		"schema.people.iban":"IBAN",
		"schema.people.swift":"SWIFT",
		"schema.people.otherInfo":"Ostatné údaje",
		"schema.people.idCardNumber":"Číslo OP",
		"schema.people.passportNumber":"Číslo pasu",
		"schema.people.isPhotoPublic":"Je fotka verejná",
		"schema.people.note":"Poznámka",
		"schema.people.language":"Jazykové znalosti",

		"schema.people.player":"Hráč",
		"schema.people.isPlayer":"Je hráč",
		"schema.people.player.playerLicense":"Číslo HL",
		"schema.people.player.clubOfFirstRegistration":"Materský klub",
		"schema.people.player.club":"Klubová príslušnosť",
		"schema.people.player.stateOfPlayer":"Stav hráča",
		"schema.people.player.expirationOfProffesionalContract":"Profesionálna zmluva",
		"schema.people.player.expirationOfAgentContract":"Zmluva s agentom",
		"schema.people.player.expiration":"Platnosť do",
		"schema.people.player.registrationCanceled":"Zrušená registrácia",
		"schema.people.player.dateOfRegistration":"Dátum registrácie",
		"schema.people.player.dateOfExpiration":"Dátum platnosti preukazu",
		"schema.people.player.dateOfApplicationForId":"Dátum začiatku platnosti preukazu",
		"schema.people.player.hostingStartDate":"Dátum začiatku hosťovania",
		"schema.people.player.hostingEndDate":"Dátum konca hosťovania",
		"schema.people.player.validFrom":"Platnosť RP od",
		"schema.people.player.validTo":"Platnosť RP do",
		"schema.people.player.modifiedOn":"Dátum aktualizácie",

		"schema.people.referee":"Rozhodca",
		"schema.people.isReferee":"Je rozhodca",
		"schema.people.referee.firstAssociation":"Prvotný zväz",
		"schema.people.referee.stateOfReferee":"Stav rozhodcu",
		"schema.people.referee.association":"Aktuálny zväz",
		"schema.people.referee.firstYear":"Rok začiatku kariéry",
		"schema.people.referee.proffesionalCompetence":"Odborná spôsobilosť od (rok)",
		"schema.people.referee.dateOfRegistration":"Dátum registrácie",
		"schema.people.referee.refereeLicense":"Rozhodcovská licencia",
		"schema.people.referee.dateOfExpiration":"Dátum platnosti preukazu",
		"schema.people.referee.dateOfApplicationForId":"Dátum začiatku platnosti preukazu",

		"schema.people.coach":"Tréner",
		"schema.people.isCoach":"Je tréner",
		"schema.people.coach.firstAssociation":"Prvotný zväz",
		"schema.people.coach.stateOfCoach":"Stav trénera",
		"schema.people.coach.association":"Aktuálny zväz",
		"schema.people.coach.firstYear":"Rok začiatku kariéry",
		"schema.people.coach.proffesionalCompetence":"Odborná spôsobilosť od (rok)",
		"schema.people.coach.dateOfRegistration":"Dátum registrácie",
		"schema.people.coach.coachLicense":"Trénerská licencia",
		"schema.people.coach.coachLicenseType":"Typ licencie",
		"schema.people.coach.dateOfExpiration":"Dátum platnosti preukazu",
		"schema.people.coach.dateOfApplicationForId":"Dátum začiatku platnosti preukazu",
		"schema.people.coach.feeDate":"Poplatky",
		"schema.people.coach.licenseSeminar":"Licenčný seminár",

		"schema.people.officer":"Funkcionár",
		"schema.people.isOfficer":"Je funkcionár",
		"schema.people.officer.association":"Aktuálny zväz",
		"schema.people.officer.club":"Klubová príslušnosť",
		"schema.people.officer.note":"Poznámka",
		"schema.people.officer.dateOfRegistration":"Dátum registrácie",
		"schema.people.officer.expiration":"Platnosť do",
		"schema.people.officer.stateOfOfficer":"Stav funkcionára",
		"schema.people.officer.dateOfExpiration":"Dátum platnosti preukazu",
		"schema.people.officer.dateOfApplicationForId":"Dátum začiatku platnosti preukazu",

		"schema.people.medic":"Zdravotník",
		"schema.people.isMedic":"Je zdravotník",
		"schema.people.medic.medicLicense":"Licencia",
		"schema.people.medic.stateOfMedic":"Stav zdravotníka",
		"schema.people.medic.dateOfExpiration":"Dátum platnosti preukazu",
		"schema.people.medic.dateOfApplicationForId":"Dátum začiatku platnosti preukazu",
		"schema.people.medic.validFrom":"Dátum platnosti",
		"schema.people.medic.validTo":"Doba platnosti",
		"schema.people.medic.modifiedOn":"Dátum aktualizácie",

		"schema.people.statistic":"Štatistik",
		"schema.people.isStatistic":"Je štatistik",
		"schema.people.statistic.statisticLicense":"Licencia",
		"schema.people.statistic.stateOfStatistic":"Stav štatistu",
		"schema.people.statistic.dateOfExpiration":"Dátum platnosti preukazu",
		"schema.people.statistic.dateOfApplicationForId":"Dátum začiatku platnosti preukazu",
		"schema.people.statistic.validFrom":"Dátum platnosti",
		"schema.people.statistic.validTo":"Doba platnosti",
		"schema.people.statistic.modifiedOn":"Dátum aktualizácie",

		"schema.people.idInfo":"Registračný preukaz",
		"schema.people.currnetId":"Aktuálne číslo preukazu člena",
		"schema.people.dateOfExpiration":"Dátum platnosti preukazu",
		"schema.people.dateOfApplicationForId":"Dátum začiatku platnosti preukazu",

		"schema.stadium.title":"Športový objekt",
		"schema.stadium.baseData":"Základné údaje",
		"schema.stadium.name":"Názov športového objektu",
		"schema.stadium.street":"Ulica",
		"schema.stadium.houseNumber":"Číslo domu",
		"schema.stadium.postcode":"PSČ",
		"schema.stadium.additionalData":"Doplňujúce údaje",
		"schema.stadium.type":"Typ športového objektu",
		"schema.stadium.surface":"Povrch",
		"schema.stadium.overallCapacity":"Celková kapacita",
		"schema.stadium.numberOfSeats":"Kapacita na sedenie",
		"schema.stadium.capacityOfHostSector":"Kapacita sektoru hostí",
		"schema.stadium.sizeAndSuface":"Rozmery a povrch ihriska",
		"schema.stadium.VIPSeats":"VIP sedadlá",
		"schema.stadium.Illumination":"Osvetlenie (lux)",
		"schema.stadium.runningFrom":"V prevádzke od",
		"schema.stadium.dateOfLastIlluminationRevision":"Dátum poslednej revízie osvetlenia",
		"schema.stadium.dateOfLastElectricDeviceRevision":"Dátum poslednej revízie elektrických zariadení",
		"schema.stadium.dateOfSecurityCertificatePublication":"Dátum vydania bezpčnostného certifikátu",
		"schema.stadium.owner":"Vlastník",
		"schema.stadium.manager":"Manažér",
		"schema.stadium.managersContact":"Kontakt na manažéra",
		"schema.stadium.type.hall":"Hala",
		"schema.stadium.type.playground":"Ihrisko",
		"schema.stadium.type.stadium":"Štadión",
		"schema.stadium.surface.natural":"Prírodný",
		"schema.stadium.surface.artificial":"Umelý",

		"schema.club.title":"Klub",
		"schema.org.club.codeOfClub":"Kód klubu",
		"schema.org.club.name":"Názov klubu",
		"schema.org.club.association":"Zväz",
		"schema.org.club.ico":"IČO",
		"schema.org.club.startDate":"Dátum založenia",
		"schema.org.club.stadium":"Štadión",
		"schema.org.club.stateOfClub":"Stav klubu",
		"schema.org.club.notPaying":"Neplatič",
		"schema.org.club.dateOfRegistration":"Dátum registrácie",
		"schema.org.club.clubAdress":"Klub - poštová adresa",
		"schema.org.club.contactPerson":"Kontaktná osoba",
		"schema.org.club.mobileNumberOfContactPerson":"Telefónne číslo kontaktnej osoby",
		"schema.org.club.street":"Ulica",
		"schema.org.club.houseNumber":"Číslo domu",
		"schema.org.club.zipCode":"PSČ",
		"schema.org.club.region":"Kraj",
		
		"schema.association.title":"Zväz",
		"schema.org.assoc.associationName":"Názov zväzu",
		"schema.org.assoc.shortName":"Skrátený názov zväzu",
		"schema.org.assoc.higherAssociation":"Nadradený zväz",
		"schema.org.assoc.startDate":"Dátum založenia",
		"schema.org.assoc.stateOfAssociation":"Stav zväzu",
		"schema.org.assoc.notPaying":"Neplatič",
		"schema.org.assoc.dateOfRegistration":"Dátum registrácie",
		"schema.org.assoc.associationAdress":"Zväz - poštová adresa",
		"schema.org.assoc.contactPerson":"Kontaktná osoba",
		"schema.org.assoc.mobileNumberOfContactPerson":"Telefónne číslo kontaktnej osoby",
		"schema.org.assoc.street":"Ulica",
		"schema.org.assoc.houseNumber":"Číslo domu",
		"schema.org.assoc.zipCode":"PSČ",

		"schema.org.logoInfo":"Logo",
		"schema.org.logo":"Logo",
		"schema.org.baseData":"Základné údaje",
		"schema.org.name":"Registrovaný názov organizácie",
		"schema.org.identifier":"Identifikátor",
		"schema.org.contactInfo":"Kontaktné údaje",
		"schema.org.street":"Ulica",
		"schema.org.houseNumber":"Číslo domu",
		"schema.org.city":"Obec",
		"schema.org.zipCode":"PSČ",
		"schema.org.country":"Štát",
		"schema.org.phoneNumber":"Telefón",
		"schema.org.mobileNumber":"Mobil",
		"schema.org.email":"E-mail",
		"schema.org.fax":"FAX",
		"schema.org.webPage":"Webová stránka",
		"schema.org.bankInfo":"Fakturačné údaje",
		"schema.org.merchantName":"Obchodný názov spoločnosti",
		"schema.org.statutarOrgan":"Štatutárny orgán",
		"schema.org.stateOfOrganization":"Stav organizácie",
		"schema.org.ico":"IČO",
		"schema.org.dic":"DIČ",
		"schema.org.icDPH":" Číslo IČ DPH",
		"schema.org.country.icDPH":" Kód štátu pre IČ DPH",
		"schema.org.bankAccount":"Číslo účtu",
		"schema.org.bankCode":"Kód banky",
		"schema.org.bank":"Názov banky",
		"schema.org.iban":"IBAN",
		"schema.org.swift":"SWIFT",
		"schema.org.otherInfo":"Ostatné informácie",
		"schema.org.note":"Poznámka",
		"schema.org.view":"Organizácia",
		
		"schema.transfer.name":"Meno",
		"schema.transfer.surName":"Priezvisko",
		"schema.transfer.listFields.clubFrom":"Z klubu",
		"schema.transfer.listFields.clubTo":"Do klubu",
		"schema.transfer.listFields.typeOfTransfer":"Typ zmeny",
		"schema.transfer.listFields.dateOfRealization":"Dátum realizácie",
		"schema.transfer.title":"Zmena kl. príslušnosti",
		"schema.transfer.baseData":"Základné informácie",
		"schema.transfer.id":"ID",
		"schema.transfer.player":"Hráč",
		"schema.transfer.clubFrom":"Z klubu",
		"schema.transfer.clubTo":"Do klubu",
		"schema.transfer.season":"Súťažný ročnik",
		"schema.transfer.typeOfTransfer":"Typ zmeny",
		"schema.transfer.dateOfRealization":"Dátum realizácie",
		"schema.transfer.dateFrom":"Začiatok hosťovania",
		"schema.transfer.dateTo":"Koniec hosťovania",
		"schema.transfer.deliveredOn":"Dátum doručenia",
		"schema.transfer.stateOfTransfer":"Stav",
		"schema.transfer.active":"Aktívny",
		"schema.transfer.note":"Poznámka",
		"schema.transfer.typ.transfer":"Prestup",
		"schema.transfer.typ.hosting":"Hosťovanie",
		"schema.transfer.typ.alternating.start":"Striedavý štart",
		"schema.transfer.typ.foreign.transfer":"Zahr. prestup",
		"schema.transfer.state.approved":"Schválený",
		"schema.transfer.state.unapproved":"Neschváleny",
		"schema.transfer.state.cancel":"Storno",
		"schema.transfer.state.in.process":"V riešení",
		"schema.transfer.typ.transfer":"Prestup",
		"schema.transfer.typ.hosting":"Hosťovanie",
		"schema.transfer.typ.alternating.start":"Striedavý štart",
		"schema.transfer.typ.foreign.transfer":"Zahr. prestup",
		"schema.transfer.state.approved":"Schválený",
		"schema.transfer.state.unapproved":"Neschváleny",
		"schema.transfer.state.cancel":"Storno",
		"schema.transfer.state.in.process":"V riešení",
		"schema.transfer.active.yes":"Áno",
		"schema.transfer.active.no":"Nie",
		
		"schema.competition.title":"Súťaž",
		"schema.competition.baseData":"Základné údaje",
		"schema.competition.name":"Názov súťaže",
		"schema.competition.season":"Súťažný ročnik",
		"schema.competition.association":"Zväz",
		"schema.competition.ageCategory":"Veková kategória",
		"schema.competition.competitionLevel":"Úroveň súťaže",
		"schema.competition.gender":"Pohlavie",

		"schema.competitionPart.title":"Časť súťaže",
		"schema.competitionPart.baseData":"Základné údaje",
		"schema.competitionPart.name":"Názov časti súťaže",
		"schema.competitionPart.competition":"Súťaž",
		"schema.competitionPart.numberOfTeams":"Počet družstiev",
		"schema.competitionPart.numberOfMatches":"Počet vzájomných stretnutí",
		"schema.competitionPart.typeOfCompetition":"Spôsob žrebovania",
		"schema.competitionPart.listOfTeam":"Zoznam družstiev",
		"schema.competitionPart.listOfTeam.team":"Družstvá",

		"schema.roster.title":"Súpiska",
		"schema.roster.baseData":"Základné údaje",
		"schema.roster.prName":"Názov družstva",
		"schema.roster.club":"Klub",
		"schema.roster.season":"Súťažný ročník",
		"schema.roster.gender":"Pohlavie",
		"schema.roster.ageCategory":"Veková kategória",
		"schema.roster.competition":"Súťaž",
		"schema.roster.lastModification":"Dátum poslednej zmeny",
		"schema.roster.coaches":"Tréneri",
		"schema.roster.coach":"Tréner",
		"schema.roster.aCoach":"Asistent trénera",
		"schema.roster.listOfPlayers":"Zoznam hráčov",
		"schema.roster.players":"Hráči",

		"schema.ageCategory.title":"Veková kategória",
		"schema.ageCategory.baseData": "Základné údaje",
		"schema.ageCategory.name":"Názov kategórie",
		"schema.ageCategory.description":"Popis",
		"schema.ageCategory.computation":"Údaje pre výpočet",
		"schema.ageCategory.day":"Deň",
		"schema.ageCategory.month":"Mesiac",
		"schema.ageCategory.year":"Rok",
		"schema.ageCategory.operation":"Operácia",

		"schema.season.title":"Súťažný ročník",
		"schema.season.baseData":"Základné údaje",
		"schema.season.name":"Názov",
		"schema.season.startSeason":"Začiatok",
		"schema.season.endSeason":"Koniec",

		"schema.schedule.title":"Termín stretnutia",
		"schema.schedule.listFields.competition":"Súťaž",
		"schema.schedule.baseData":"Základné údaje",
		"schema.schedule.baseData.name":"Názov",
		"schema.schedule.baseData.competitionPart":"Časť súťaže",
		"schema.schedule.baseData.date":"Dátum",

		"schema.refereeReport.title":"Zápisu rozhodcu",
		"schema.refereeReport.listFields.homeClub":"Domáce družstvo",
		"schema.refereeReport.listFields.awayClub":"Hosťujúce družstvo",
		"schema.refereeReport.listFields.date":"Termín",
		"schema.refereeReport.baseData":"Základné údaje",
		"schema.refereeReport.baseData.competition":"Súťaž",
		"schema.refereeReport.baseData.competitionPart":"Časť súťaže",
		"schema.refereeReport.baseData.homeClub":"Domáce družstvo",
		"schema.refereeReport.baseData.awayClub":"Hosťujúce družstvo",
		"schema.refereeReport.baseData.matchRound":"Kolo",
		"schema.refereeReport.baseData.matchDate":"Termín stretnutia",
		"schema.refereeReport.baseData.halfTimeScoreHome":"Polčasové skóre domáci",
		"schema.refereeReport.baseData.halfTimeScoreAway":"Polčasové skóre hostia",
		"schema.refereeReport.baseData.fullTimeScoreHome":"Výsledok domáci",
		"schema.refereeReport.baseData.fullTimeScoreAway":"Výsledok hostia",
		"schema.refereeReport.baseData.matchBegin":"Začiatok stretnutia",
		"schema.refereeReport.baseData.attendance":"Návštevnosť",
		"schema.refereeReport.baseData.stadium":"Štadion",
		"schema.refereeReport.delegatedPerson":"Delegované osoby",
		"schema.refereeReport.delegatedPerson.referee":"Rozhodca",
		"schema.refereeReport.delegatedPerson.aReferee1":"Asistent rozhodcu",
		"schema.refereeReport.delegatedPerson.aReferee2":"Asistent rozhodcu",
		"schema.refereeReport.delegatedPerson.delegate":"Delegát",
		"schema.refereeReport.refereeReport":"Správa rozhodcu",
		"schema.refereeReport.refereeReport.note":"Popis",
		"schema.refereeReport.refereeReport.state":"Stav",
		"schema.refereeReport.refereeReport.webNumber":"Číslo webu",

		"schema.nomination.title":"Nominácia",
		"schema.nomination.baseData":"Základné informácie",
		"schema.nomination.match":"Stretnutie",
		"schema.nomination.club":"Klub",
		"schema.nomination.officers":"Funkcionári",
		"schema.nomination.coach":"Tréner",
		"schema.nomination.aCoach1":"Asistent trénera",
		"schema.nomination.aCoach2":"Asistent trénera",
		"schema.nomination.officer1":"Funkcionár",
		"schema.nomination.officer2":"Funkcionár",
		"schema.nomination.listOfPlayers":"Nominácia hráčov",
		"schema.nomination.players":"Hráči",
		"schema.nomination.state":"Stav",

		"schema.statistics.view":"Štatistiky",
		"schema.statistics.baseData":"Základné",
		"schema.statistics.member.count":"Počet členov",
		"schema.statistics.women.count":"Počet žien",

		"schema.group.baseData":"Základné údaje",
		"schema.group.baseData.id":"Identifikátor",
		"schema.group.baseData.name":"Názov skupiny",
		"schema.group.baseData.parent":"Rodič",
		"schema.groupmaster.new":"Nová skupina",

		"schema.security.listFields.name":"Názov profilu",
		"schema.security.baseData.name":"Názov profilu",
		"schema.security.baseData":"Základné údaje",
		"schema.securityMaster.title":"Bezpečnostný profil"
	});
	
	$translateProvider.translations('cz', {
		"comepttition.part.generated.matches":"Vygenerované stretnutia",
		
		"menu.member.title": "Člen",
		"menu.player.title": "Hráč",
		"menu.fees.title": "Poplatek",
		"menu.referee.title": "Rozhodca",
		"menu.coach.title": "Tréner",
		"menu.stadium.title": "Športový objekt",
		"menu.club.title": "Klub",
		"menu.association.title": "Zväz",
		"menu.person.title": "Osoba",
		"menu.transfer.title": "Zmena kl. príslušnosti",
		"menu.season.title": "Súťažný ročník",
		"menu.age.category.title": "Veková kategória",
		"menu.roster.title": "Súpisky",
		"menu.competition.title": "Súťaž",
		"menu.competitionPart.title":"Časť súťaže",
		"menu.schedule.title":"Termín stretnutia",
		"menu.refereeReport.title": "Zápis zo stretnutia",
		"menu.delegateReport.title": "Správa delegáta",
		"menu.company.title": "Organizace",
		"menu.my.profile.title": "Můj profil",
		"menu.permissions.title": "Oprávnění",
		"menu.schemas.title": "Schémata",

		"menu.new.person.lower.level": "Nová osoba",
		"menu.new.company.lower.level": "Nová společnosť",
		
		"menu.search.person.lower.level": "Hledat osobu",
		"menu.search.member.lower.level": "Hledat člena",
		"menu.search.player.lower.level": "Hledat hráča",
		"menu.search.referee.lower.level": "Hledat rozhodcu",
		"menu.search.statistic.lower.level": "Hledat statistu",
		"menu.search.medic.lower.level": "Hledat zdravotníka",
		"menu.search.coach.lower.level": "Hledat trenéra",
		"menu.search.company.lower.level": "Hledat spoločnosť",
		"menu.search.club.lower.level": "Hledat klub",
		"menu.search.association.lower.level": "Hledat zväz",
		"menu.search.officer.lower.level": "Hľadať funkcionára",
		
		"menu.new.lower.level": "Nový",
		"menu.new.lower.level.she": "Nová",
		"menu.search.lower.level": "Hledat",
		"menu.profile.lower.level": "Profil",
		"menu.change.password.lower.level": "Změna hesla",
		"menu.new.group.lower.level": "Nová skupina",
		"menu.permission.groups.lower.level": "Skupiny oprávnění",
		"menu.user.permissions.lower.level": "Oprávnění uživatelů",
		"menu.schema.list.lower.level": "Seznam schémat",
		"menu.new.profile.lower.level":"Nový bezpečnostnej profil",
		"menu.profiles.lower.level":"Hledat bezpečnostnej profil",
		"menu.statistics.title":"Statistiky",
		"menu.statistics.show.title":"Zobrazit",
		"menu.massmailing.title":"Hromadní pošta",
		"menu.massmailing.new.lower.level":"Nový vzor", 
		"menu.massmailing.search.lower.level":"Vyhledat vzor",
		"menu.massmailing.send.title":"Odeslat",
		"menu.fees.new.lower.level" : "Nový poplatok",
		"menu.fees.search.lower.level" : "Hľadať poplatok",
		"menu.imports.lower.level":"Hľadať import",
		"menu.imports.new.lower.level":"Nový import",
		"menu.payments.new.lower.level":"Nová platba",
		"menu.payments.lower.level":"Hľadať platbu",
		"menu.nomination.new.lower.level":"Nová nominácia",
		"menu.nomination.search.lower.level":"Hľadať nomináciu",
		"menu.refereeReport.new.lower.level":"Nový zápis",
		"menu.refereeReport.search.lower.level":"Hľadať zápis",

		"schema.group.listFields.id":"ID",
		"schema.group.listFields.name":"Názov skupiny",
		"schema.groupmaster.new":"Nová skupina",
		"schema.group.baseData":"Základné údaje",	
		"schema.group.baseData.id":"Identifikátor",
		"schema.group.baseData.name":"Názov skupiny",
		"schema.group.baseData.parent":"Rodič",

		"schema.security.listFields.name":"Názov profilu",
		"schema.security.baseData.name":"Názov profilu",
		"schema.security.baseData":"Základné údaje",

		"schema.securityMaster.new":"Nový bezpečnostný profil",
		"schema.securityMaster.view":"Bezpečnostný profil",
		"schema.securityMaster.search":"Bezpečnostný profil",

		"schema.people.listFields.registrationID":"Registračné číslo",
		"schema.people.listFields.surName":"Priezvisko",
		"schema.people.listFields.name":"Meno",
		"schema.people.listFields.birthDate":"Dátum narodenia",
		"schema.people.listFields.city":"Mesto",

		"schema.people.baseData": "Základné informácie",
		"schema.people.identifier": "Identifikačné číslo",
		"schema.people.registrationID": "Registračné číslo",
		"schema.people.name": "Meno",
		"schema.people.surName": "Priezvisko",
		"schema.people.state.of.person":"Stav osoby",
		"schema.people.baseData.town":"Obec",
		"schema.people.baseData.nationality":"Štátna príslušnosť",
		"schema.people.profile.yes":"Áno",
		"schema.people.profile.no":"Nie",
		"schema.people.state.of.person.active":"Aktívna",
		"schema.people.state.of.person.inactive":"Neaktívna",
		"schema.people.state.of.referee.active":"Aktívny",
		"schema.people.state.of.referee.inactive":"Neaktívny",
		"schema.people.state.of.coach.active":"Aktívny",
		"schema.people.state.of.coach.inactive":"Neaktívny",
		"schema.people.state.of.officer.active":"Aktívny",
		"schema.people.state.of.officer.inactive":"Neaktívny",
		"schema.people.state.of.medic.active":"Aktívny",
		"schema.people.state.of.medic.inactive":"Neaktívny",
		"schema.people.state.of.statistic.active":"Aktívny",
		"schema.people.state.of.statistic.inactive":"Neaktívny",
		"schema.people.state.of.agent.active":"Aktívny",
		"schema.people.state.of.agent.inactive":"Neaktívny",
		
		"schema.people.bornName": "Rodné priezvisko",
		"schema.people.title.before":"Titul pred",
		"schema.people.title.after":"Titul za",
		"schema.people.birthDate":"Dátum narodenia",
		"schema.people.gender":"Pohlavie",
		"schema.people.gender.man": "Muž",
		"schema.people.gender.woman": "Žena",
		"schema.people.isPlayer":"Je hráč",
		"schema.people.isCoach":"Je tréner",
		"schema.people.isReferee":"Je rozhodca",
		"schema.people.isOfficer":"Je funkcionár",
		"schema.people.isMedic":"Je zdravontík",
		"schema.people.isStatistic":"Je štatista",
		"schema.people.nationality":"Štátna príslušnosť",
		"schema.people.photo":"Fotografia",
		"schema.people.photoInfo":"Fotografie",
		"schema.people.email":"E-mail",
		"schema.people.mobileNumber":"Mobil",
		"schema.people.phoneNumber":"Telefón",
		"schema.people.country":"Štát",
		"schema.people.zipCode":"PSČ",
		"schema.people.city":"Obec",
		"schema.people.houseNumber":"Číslo domu",
		"schema.people.street":"Ulica",
		"schema.people.contactInfo":"Kontaktné údaje",
		"schema.people.bankInfo":"Fakturačné údaje",
		"schema.people.bankAccount":"Číslo účtu",
		"schema.people.bankCode":"Kód banky",
		"schema.people.iban":"IBAN",
		"schema.people.swift":"SWIFT",
		"schema.people.otherInfo":"Ostatné údaje",
		"schema.people.idCardNumber":"Číslo OP",
		"schema.people.passportNumber":"Číslo pasu",
		"schema.people.isPhotoPublic":"Je fotka verejná",
		"schema.people.note":"Poznámka",
		"schema.people.language":"Jazykové znalosti",
		"schema.people.playerLicense":"Číslo HL",
		
		"schema.club.listFields.name":"Názov klubu",
		"schema.club.listFields.city":"Mesto",		
		"schema.club.state.active":"Aktívny",
		"schema.club.state.inactive":"Neaktívny",
		"schema.club.notPaying.yes":"Áno",
		"schema.club.notPaying.no":"Nie",

		"schema.officer.title": "Funkcionár",
		"schema.officer.view": "Profil Funkcionára",

		"schema.association.listFields.name":"Názov zväzu",
		"schema.association.state.active":"Aktívny",
		"schema.association.state.inactive":"Neaktívny",
		"schema.association.notPaying.yes":"Áno",
		"schema.association.notPaying.no":"Nie",

		"schema.stadium.listFields.name":"Názov športového objektu",
		"schema.stadium.listFields.overallCapacity":"Celková kapacita",
		"schema.stadium.new":"Nový športový objekt",
		"schema.stadium.view":"Športový objekt",
		"schema.stadium.search":"Športový objekt",
		"schema.stadium.baseData":"Základné údaje",
		"schema.stadium.name":"Názov športového objektu",
		"schema.stadium.street":"Ulica",
		"schema.stadium.houseNumber":"Číslo domu",
		"schema.stadium.postcode":"PSČ",
		"schema.stadium.additionalData":"Doplňujúce údaje",
		"schema.stadium.type":"Typ športového objektu",
		"schema.stadium.surface":"Povrch",
		"schema.stadium.overallCapacity":"Celková kapacita",
		"schema.stadium.numberOfSeats":"Kapacita na sedenie",
		"schema.stadium.capacityOfHostSector":"Kapacita sektoru hostí",
		"schema.stadium.sizeAndSuface":"Rozmery a povrch ihriska",
		"schema.stadium.VIPSeats":"VIP sedadlá",
		"schema.stadium.Illumination":"Osvetlenie (lux)",
		"schema.stadium.runningFrom":"V prevádzke od",
		"schema.stadium.dateOfLastIlluminationRevision":"Dátum poslednej revízie osvetlenia",
		"schema.stadium.dateOfLastElectricDeviceRevision":"Dátum poslednej revízie elektrických zariadení",
		"schema.stadium.dateOfSecurityCertificatePublication":"Dátum vydania bezpčnostného certifikátu",
		"schema.stadium.owner":"Vlastník",
		"schema.stadium.manager":"Manažér",
		"schema.stadium.managersContact":"Kontakt na manažéra",
		"schema.stadium.type.hall":"Hala",
		"schema.stadium.type.playground":"Ihrisko",
		"schema.stadium.type.stadium":"Štadión",
		"schema.stadium.surface.natural":"Prírodný",
		"schema.stadium.surface.artificial":"Umelý",

		"schema.transfer.listFields.name":"Meno",
		"schema.transfer.listFields.surName":"Priezvisko",
		"schema.transfer.listFields.clubFrom":"Z klubu",
		"schema.transfer.listFields.clubTo":"Do klubu",
		"schema.transfer.listFields.typeOfTransfer":"Typ zmeny",
		"schema.transfer.listFields.dateOfRealization":"Dátum realizácie",
		"schema.transfer.new":"Nová zmena kl. príslušnosti",
		"schema.transfer.view":"Zmena kl. príslušnosti",
		"schema.transfer.search":"Zmena kl. príslušnosti",
		"schema.transfer.baseData":"Základné informácie",
		"schema.transfer.id":"ID",
		"schema.transfer.player":"Hráč",
		"schema.transfer.clubFrom":"Z klubu",
		"schema.transfer.clubTo":"Do klubu",
		"schema.transfer.season":"Súťažný ročnik",
		"schema.transfer.typeOfTransfer":"Typ zmeny",
		"schema.transfer.dateOfRealization":"Dátum realizácie",
		"schema.transfer.dateFrom":"Začiatok hosťovania",
		"schema.transfer.dateTo":"Koniec hosťovania",
		"schema.transfer.deliveredOn":"Dátum doručenia",
		"schema.transfer.stateOfTransfer":"Stav",
		"schema.transfer.active":"Aktívny",
		"schema.transfer.note":"Poznámka",
		"schema.transfer.typ.transfer":"Prestup",
		"schema.transfer.typ.hosting":"Hosťovanie",
		"schema.transfer.typ.alternating.start":"Striedavý štart",
		"schema.transfer.typ.foreign.transfer":"Zahr. prestup",
		"schema.transfer.state.approved":"Schválený",
		"schema.transfer.state.unapproved":"Neschváleny",
		"schema.transfer.state.cancel":"Storno",
		"schema.transfer.state.in.process":"V riešení",
		"schema.transfer.active.yes":"Áno",
		"schema.transfer.active.no":"Nie",
				
		"schema.org.logoInfo":"Loga",
		"schema.org.logo":"Logo",
		"schema.org.baseData":"Základné údaje",
		"schema.org.name":"Registrovaný názov organizácie",
		"schema.org.identifier":"Identifikátor",
		"schema.org.contactInfo":"Kontaktné údaje",
		"schema.org.street":"Ulica",
		"schema.org.houseNumber":"Číslo domu",
		"schema.org.city":"Obec",
		"schema.org.zipCode":"PSČ",
		"schema.org.country":"Štát",
		"schema.org.phoneNumber":"Telefón",
		"schema.org.mobileNumber":"Mobil",
		"schema.org.email":"E-mail",
		"schema.org.bankInfo":"Fakturačné údaje",
		"schema.org.merchantName":"Obchodný názov spoločnosti",
		"schema.org.statutarOrgan":"Štatutárny orgán",
		"schema.org.stateOfOrganization":"Stav organizácie",
		"schema.org.ico":"IČO",
		"schema.org.dic":"DIČ",
		"schema.org.icDPH":" Číslo IČ DPH",
		"schema.org.country.icDPH":" Kód štátu pre IČ DPH",
		"schema.org.bankAccount":"Číslo účtu",
		"schema.org.bankCode":"Kód banky",
		"schema.org.bank":"Názov banky",
		"schema.org.iban":"IBAN",
		"schema.org.swift":"SWIFT",
		"schema.org.otherInfo":"Ostatné informácie",
		"schema.org.note":"Poznámka",
		"schema.org.view":"Organizácia",

		"schema.member.title": "Môj profil",
		"schema.member.view":"Profil člena",

		"schema.ageCategory.listFields.name":"Názov kategórie",
		"schema.ageCategory.new":"Nová veková kategória",
		"schema.ageCategory.view":"Veková kategória",
		"schema.ageCategory.search":"Veková kategória",
		"schema.ageCategory.baseData":"Základné údaje",
		"schema.ageCategory.name":"Názov kategórie",
		"schema.ageCategory.description":"Popis",
		"schema.ageCategory.computation":"Údaje pre výpočet",
		"schema.ageCategory.day":"Deň",
		"schema.ageCategory.month":"Mesiac",
		"schema.ageCategory.year":"Rok",
		"schema.ageCategory.operation":"Operácia",		

		"schema.season.title":"Súťažný ročník",
		"schema.season.baseData":"Základné údaje",
		"schema.season.name":"Názov",
		"schema.season.startSeason":"Začiatok",
		"schema.season.endSeason":"Koniec",

		"schema.competition.listFields.name":"Názov súťaže",
		"schema.competition.listFields.season":"Sezóna",
		"schema.competition.listFields.ageCategory":"Veková kategória",
		"schema.competition.listFields.gender":"Pohlavie",
		"schema.competition.new":"Nová súťaž",
		"schema.competition.view":"Detail súťaže",
		"schema.competition.search":"Súťaž",
		"schema.competition.baseData":"Základné údaje",
		"schema.competition.name":"Názov súťaže",
		"schema.competition.season":"Súťažný ročnik",
		"schema.competition.association":"Zväz",
		"schema.competition.ageCategory":"Veková kategória",
		"schema.competition.competitionLevel":"Úroveň súťaže",
		"schema.competition.gender.man":"Muž",
		"schema.competition.gender.woman":"Žena",

		"schema.competitionPart.new":"Nová časť súťaže",
		"schema.competitionPart.view":"Detail časti súťaže",
		"schema.competitionPart.search":"Časť súťaže",
		"schema.competitionPart.listFields.name":"Názov časti súťaže",
		"schema.competitionPart.listFields.competition":"Súťaž",
		"schema.competitionPart.baseData":"Základné údaje",
		"schema.competitionPart.baseData.name":"Názov časti súťaže",
		"schema.competitionPart.baseData.competition":"Súťaž",
		"schema.competitionPart.baseData.numberOfTeams":"Počet družstiev",
		"schema.competitionPart.baseData.numberOfMatches":"Počet vzájomných stretnutí",
		"schema.competitionPart.baseData.typeOfCompetition":"Spôsob žrebovania",
		"schema.competitionPart.listOfTeam":"Zoznam družstiev",
		"schema.competitionPart.listOfTeam.team":"Družstvá",

		"schema.schedule.new":"Nový termín",
		"schema.schedule.view":"Detail termínu stretnutia",
		"schema.schedule.search":"Termín",
		"schema.schedule.listFields.name":"Názov termínu",
		"schema.schedule.listFields.competitionPart":"Názov časti súťaže",
		"schema.schedule.listFields.competition":"Súťaž",
		"schema.schedule.listFields.date":"Dátum",
		"schema.schedule.baseData":"Základné údaje",
		"schema.schedule.baseData.name":"Názov",
		"schema.schedule.baseData.competitionPart":"Časť súťaže",
		"schema.schedule.baseData.date":"Dátum",

		"schema.refereeReport.title":"Zápis rozhodcu",
		"schema.refereeReport.listFields.homeClub":"Domáce družstvo",
		"schema.refereeReport.listFields.awayClub":"Hosťujúce družstvo",
		"schema.refereeReport.listFields.date":"Termín",
		"schema.refereeReport.baseData":"Základné údaje",
		"schema.refereeReport.baseData.competition":"Súťaž",
		"schema.refereeReport.baseData.competitionPart":"Časť súťaže",
		"schema.refereeReport.baseData.homeClub":"Domáce družstvo",
		"schema.refereeReport.baseData.awayClub":"Hosťujúce družstvo",
		"schema.refereeReport.baseData.matchRound":"Kolo",
		"schema.refereeReport.baseData.matchDate":"Termín stretnutia",
		"schema.refereeReport.baseData.halfTimeScoreHome":"Polčasové skóre domáci",
		"schema.refereeReport.baseData.halfTimeScoreAway":"Polčasové skóre hostia",
		"schema.refereeReport.baseData.fullTimeScoreHome":"Výsledok domáci",
		"schema.refereeReport.baseData.fullTimeScoreAway":"Výsledok hostia",
		"schema.refereeReport.baseData.matchBegin":"Začiatok stretnutia",
		"schema.refereeReport.baseData.attendance":"Návštevnosť",
		"schema.refereeReport.baseData.stadium":"Štadion",
		"schema.refereeReport.delegatedPerson":"Delegované osoby",
		"schema.refereeReport.delegatedPerson.referee":"Rozhodca",
		"schema.refereeReport.delegatedPerson.aReferee1":"Asistent rozhodcu",
		"schema.refereeReport.delegatedPerson.aReferee2":"Asistent rozhodcu",
		"schema.refereeReport.delegatedPerson.delegate":"Delegát",
		"schema.refereeReport.refereeReport":"Správa rozhodcu",
		"schema.refereeReport.refereeReport.note":"Popis",
		"schema.refereeReport.refereeReport.state":"Stav",
		"schema.refereeReport.refereeReport.webNumber":"Číslo webu",
		
		"schema.nomination.title":"Nominácia",
		"schema.nomination.listFields.match":"Stretnutie",
		"schema.nomination.baseData":"Základné informácie",
		"schema.nomination.match":"Stretnutie",
		"schema.nomination.club":"Klub",
		"schema.nomination.officers":"Funkcionári",
		"schema.nomination.coach":"Tréner",
		"schema.nomination.aCoach1":"Asistent trénera",
		"schema.nomination.aCoach2":"Asistent trénera",
		"schema.nomination.officer1":"Funkcionár",
		"schema.nomination.officer2":"Funkcionár",
		"schema.nomination.listOfPlayers":"Nominácia hráčov",
		"schema.nomination.players":"Hráči",
		"schema.nomination.state":"Stav"
	});
}]);
