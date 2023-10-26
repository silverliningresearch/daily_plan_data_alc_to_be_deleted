let interview_data_arr_raw = `[
    {
        "InterviewId": "4382",
        "InterviewEndDate": "2023-10-17",
        "InterviewState": "Complete",
        "Flight": "Sas",
        "Dest": "OSL",
        "AirlineCode": "Sas",
        "download_time": "26-10-2023 12:35:56"
    },
    {
        "InterviewId": "4383",
        "InterviewEndDate": "2023-10-17",
        "InterviewState": "Complete",
        "Flight": "SK - Scandinavian Airlines System (SAS)",
        "Dest": "OSL",
        "AirlineCode": "SK"
    },
    {
        "InterviewId": "4386",
        "InterviewEndDate": "2023-10-17",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "POZ",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "4388",
        "InterviewEndDate": "2023-10-17",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "POZ",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "4389",
        "InterviewEndDate": "2023-10-17",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "POZ",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "4395",
        "InterviewEndDate": "2023-10-17",
        "InterviewState": "Complete",
        "Flight": "Lufthansa",
        "Dest": "MUC",
        "AirlineCode": "Lufthansa"
    },
    {
        "InterviewId": "4397",
        "InterviewEndDate": "2023-10-17",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "MUC",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "4399",
        "InterviewEndDate": "2023-10-17",
        "InterviewState": "Complete",
        "Flight": "Eyan",
        "Dest": "EDI",
        "AirlineCode": "Eyan"
    },
    {
        "InterviewId": "4400",
        "InterviewEndDate": "2023-10-17",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "EDI",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "4401",
        "InterviewEndDate": "2023-10-17",
        "InterviewState": "Complete",
        "Flight": "Ryanair",
        "Dest": "MUC",
        "AirlineCode": "Ryanair"
    },
    {
        "InterviewId": "4402",
        "InterviewEndDate": "2023-10-17",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "EDI",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "4403",
        "InterviewEndDate": "2023-10-17",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "EDI",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "4404",
        "InterviewEndDate": "2023-10-17",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "EDI",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "4405",
        "InterviewEndDate": "2023-10-17",
        "InterviewState": "Complete",
        "Flight": "Ryan Air",
        "Dest": "EDI",
        "AirlineCode": "Ryan"
    },
    {
        "InterviewId": "4406",
        "InterviewEndDate": "2023-10-17",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "EDI",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "4407",
        "InterviewEndDate": "2023-10-17",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "4408",
        "InterviewEndDate": "2023-10-17",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "4409",
        "InterviewEndDate": "2023-10-17",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "4410",
        "InterviewEndDate": "2023-10-17",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "4411",
        "InterviewEndDate": "2023-10-17",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "4412",
        "InterviewEndDate": "2023-10-17",
        "InterviewState": "Complete",
        "Flight": "Frankfurt",
        "Dest": "FRA",
        "AirlineCode": "Frankfurt"
    },
    {
        "InterviewId": "4413",
        "InterviewEndDate": "2023-10-17",
        "InterviewState": "Complete",
        "Flight": "Loft hanza",
        "Dest": "FRA",
        "AirlineCode": "Loft"
    },
    {
        "InterviewId": "4415",
        "InterviewEndDate": "2023-10-19",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "MUC",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "4416",
        "InterviewEndDate": "2023-10-19",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "MUC",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "4417",
        "InterviewEndDate": "2023-10-19",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "MUC",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "4418",
        "InterviewEndDate": "2023-10-19",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "MUC",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "4419",
        "InterviewEndDate": "2023-10-19",
        "InterviewState": "Complete",
        "Flight": "Lufthansa",
        "Dest": "MUC",
        "AirlineCode": "Lufthansa"
    },
    {
        "InterviewId": "4420",
        "InterviewEndDate": "2023-10-19",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "MUC",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "4427",
        "InterviewEndDate": "2023-10-19",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "CRL",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "4429",
        "InterviewEndDate": "2023-10-19",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "CRL",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "4431",
        "InterviewEndDate": "2023-10-19",
        "InterviewState": "Complete",
        "Flight": "Ryanair",
        "Dest": "CRL",
        "AirlineCode": "Ryanair"
    },
    {
        "InterviewId": "4432",
        "InterviewEndDate": "2023-10-19",
        "InterviewState": "Complete",
        "Flight": "Ryanair",
        "Dest": "CRL",
        "AirlineCode": "Ryanair"
    },
    {
        "InterviewId": "4433",
        "InterviewEndDate": "2023-10-19",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "CRL",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "4434",
        "InterviewEndDate": "2023-10-19",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "CRL",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "4435",
        "InterviewEndDate": "2023-10-19",
        "InterviewState": "Complete",
        "Flight": "Airbaltic",
        "Dest": "RIX",
        "AirlineCode": "Airbaltic"
    },
    {
        "InterviewId": "4437",
        "InterviewEndDate": "2023-10-19",
        "InterviewState": "Complete",
        "Flight": "Airbaltic",
        "Dest": "RIX",
        "AirlineCode": "Airbaltic"
    },
    {
        "InterviewId": "4438",
        "InterviewEndDate": "2023-10-19",
        "InterviewState": "Complete",
        "Flight": "BT - Air Baltic",
        "Dest": "RIX",
        "AirlineCode": "BT"
    },
    {
        "InterviewId": "4439",
        "InterviewEndDate": "2023-10-19",
        "InterviewState": "Complete",
        "Flight": "AirBaltic",
        "Dest": "RIX",
        "AirlineCode": "AirBaltic"
    },
    {
        "InterviewId": "4440",
        "InterviewEndDate": "2023-10-19",
        "InterviewState": "Complete",
        "Flight": "Airbaltik",
        "Dest": "RIX",
        "AirlineCode": "Airbaltik"
    },
    {
        "InterviewId": "4442",
        "InterviewEndDate": "2023-10-19",
        "InterviewState": "Complete",
        "Flight": "BT - Air Baltic",
        "Dest": "RIX",
        "AirlineCode": "BT"
    },
    {
        "InterviewId": "4443",
        "InterviewEndDate": "2023-10-20",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "STN",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "4444",
        "InterviewEndDate": "2023-10-20",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "STN",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "4445",
        "InterviewEndDate": "2023-10-20",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "STN",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "4446",
        "InterviewEndDate": "2023-10-20",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "STN",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "4447",
        "InterviewEndDate": "2023-10-20",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "STN",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "4448",
        "InterviewEndDate": "2023-10-20",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "STN",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "4449",
        "InterviewEndDate": "2023-10-20",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "STN",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "4453",
        "InterviewEndDate": "2023-10-20",
        "InterviewState": "Complete",
        "Flight": "JTD - Jettime",
        "Dest": "ACE",
        "AirlineCode": "JTD"
    },
    {
        "InterviewId": "4454",
        "InterviewEndDate": "2023-10-20",
        "InterviewState": "Complete",
        "Flight": "Je",
        "Dest": "ACE",
        "AirlineCode": "Je"
    },
    {
        "InterviewId": "4455",
        "InterviewEndDate": "2023-10-20",
        "InterviewState": "Complete",
        "Flight": "JTD - Jettime",
        "Dest": "ACE",
        "AirlineCode": "JTD"
    },
    {
        "InterviewId": "4456",
        "InterviewEndDate": "2023-10-20",
        "InterviewState": "Complete",
        "Flight": "JTD - Jettime",
        "Dest": "ACE",
        "AirlineCode": "JTD"
    },
    {
        "InterviewId": "4457",
        "InterviewEndDate": "2023-10-20",
        "InterviewState": "Complete",
        "Flight": "JTD - Jettime",
        "Dest": "ACE",
        "AirlineCode": "JTD"
    },
    {
        "InterviewId": "4458",
        "InterviewEndDate": "2023-10-20",
        "InterviewState": "Complete",
        "Flight": "JTD - Jettime",
        "Dest": "ACE",
        "AirlineCode": "JTD"
    },
    {
        "InterviewId": "4459",
        "InterviewEndDate": "2023-10-20",
        "InterviewState": "Complete",
        "Flight": "JTD - Jettime",
        "Dest": "ACE",
        "AirlineCode": "JTD"
    },
    {
        "InterviewId": "4460",
        "InterviewEndDate": "2023-10-20",
        "InterviewState": "Complete",
        "Flight": "JTD - Jettime",
        "Dest": "ACE",
        "AirlineCode": "JTD"
    },
    {
        "InterviewId": "4462",
        "InterviewEndDate": "2023-10-20",
        "InterviewState": "Complete",
        "Flight": "RC - Atlantic Airways",
        "Dest": "FUE",
        "AirlineCode": "RC"
    },
    {
        "InterviewId": "4463",
        "InterviewEndDate": "2023-10-20",
        "InterviewState": "Complete",
        "Flight": "RC - Atlantic Airways",
        "Dest": "FUE",
        "AirlineCode": "RC"
    },
    {
        "InterviewId": "4464",
        "InterviewEndDate": "2023-10-20",
        "InterviewState": "Complete",
        "Flight": "RC - Atlantic Airways",
        "Dest": "FUE",
        "AirlineCode": "RC"
    },
    {
        "InterviewId": "4465",
        "InterviewEndDate": "2023-10-20",
        "InterviewState": "Complete",
        "Flight": "RC - Atlantic Airways",
        "Dest": "FUE",
        "AirlineCode": "RC"
    },
    {
        "InterviewId": "4466",
        "InterviewEndDate": "2023-10-20",
        "InterviewState": "Complete",
        "Flight": "RC - Atlantic Airways",
        "Dest": "FUE",
        "AirlineCode": "RC"
    },
    {
        "InterviewId": "4467",
        "InterviewEndDate": "2023-10-20",
        "InterviewState": "Complete",
        "Flight": "RC - Atlantic Airways",
        "Dest": "FUE",
        "AirlineCode": "RC"
    },
    {
        "InterviewId": "4468",
        "InterviewEndDate": "2023-10-20",
        "InterviewState": "Complete",
        "Flight": "RC - Atlantic Airways",
        "Dest": "FUE",
        "AirlineCode": "RC"
    },
    {
        "InterviewId": "4482",
        "InterviewEndDate": "2023-10-23",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "4484",
        "InterviewEndDate": "2023-10-23",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "4486",
        "InterviewEndDate": "2023-10-23",
        "InterviewState": "Complete",
        "Flight": "RC - Atlantic Airways",
        "Dest": "BGO",
        "AirlineCode": "RC"
    },
    {
        "InterviewId": "4487",
        "InterviewEndDate": "2023-10-23",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "4488",
        "InterviewEndDate": "2023-10-23",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "MLA",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "4489",
        "InterviewEndDate": "2023-10-23",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "MLA",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "4490",
        "InterviewEndDate": "2023-10-23",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "MLA",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "4492",
        "InterviewEndDate": "2023-10-23",
        "InterviewState": "Complete",
        "Flight": "RC - Atlantic Airways",
        "Dest": "BGO",
        "AirlineCode": "RC"
    },
    {
        "InterviewId": "4493",
        "InterviewEndDate": "2023-10-23",
        "InterviewState": "Complete",
        "Flight": "RC - Atlantic Airways",
        "Dest": "BGO",
        "AirlineCode": "RC"
    }
]    

 `;