let interview_data_arr_raw = `[
    {
        "InterviewId": "4071",
        "InterviewEndDate": "2023-02-20 16:45:33",
        "InterviewState": "Complete",
        "Flight": "AA - American Airlines",
        "Dest": "CLT",
        "AirlineCode": "AA",
        "download_time": "27-08-2023 01:07:16"
    },
    {
        "InterviewId": "5174",
        "InterviewEndDate": "2023-02-04 12:59:20",
        "InterviewState": "Complete",
        "Flight": "SK - SAS-Scandinavian Airlines System",
        "Dest": "OSL",
        "AirlineCode": "SK"
    },
    {
        "InterviewId": "5175",
        "InterviewEndDate": "2023-02-04 12:45:51",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "SAN",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5177",
        "InterviewEndDate": "2023-02-04 13:13:55",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "MXP",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5178",
        "InterviewEndDate": "2023-02-04 13:19:07",
        "InterviewState": "Complete",
        "Flight": "UA - United Airlines",
        "Dest": "DEN",
        "AirlineCode": "UA"
    },
    {
        "InterviewId": "5179",
        "InterviewEndDate": "2023-02-04 13:28:13",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "DUS",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5180",
        "InterviewEndDate": "2023-02-04 13:29:26",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "DUS",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5182",
        "InterviewEndDate": "2023-02-04 13:38:39",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "BRE",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5183",
        "InterviewEndDate": "2023-02-04 13:38:25",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "SKG",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5184",
        "InterviewEndDate": "2023-02-04 13:50:09",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FCO",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5185",
        "InterviewEndDate": "2023-02-04 13:48:55",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "CDG",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5186",
        "InterviewEndDate": "2023-02-04 14:00:11",
        "InterviewState": "Complete",
        "Flight": "EN - AirDolomiti",
        "Dest": "FLR",
        "AirlineCode": "EN"
    },
    {
        "InterviewId": "5187",
        "InterviewEndDate": "2023-02-04 13:58:55",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "NCE",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5188",
        "InterviewEndDate": "2023-02-04 14:13:51",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "BER",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5189",
        "InterviewEndDate": "2023-02-04 14:18:56",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "EMPTY",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5191",
        "InterviewEndDate": "2023-02-04 14:43:29",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "EMPTY",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5193",
        "InterviewEndDate": "2023-02-04 14:32:28",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "GOT",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5194",
        "InterviewEndDate": "2023-02-04 14:38:02",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "TUN",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5195",
        "InterviewEndDate": "2023-02-04 14:56:21",
        "InterviewState": "Complete",
        "Flight": "LO - LOT Polish Airlines",
        "Dest": "DEL",
        "AirlineCode": "LO"
    },
    {
        "InterviewId": "5197",
        "InterviewEndDate": "2023-02-07 18:27:28",
        "InterviewState": "Complete",
        "Flight": "IB - Iberia",
        "Dest": "MAD",
        "AirlineCode": "IB"
    },
    {
        "InterviewId": "5198",
        "InterviewEndDate": "2023-02-07 18:32:07",
        "InterviewState": "Complete",
        "Flight": "IB - Iberia",
        "Dest": "MAD",
        "AirlineCode": "IB"
    },
    {
        "InterviewId": "5199",
        "InterviewEndDate": "2023-02-07 18:36:50",
        "InterviewState": "Complete",
        "Flight": "IB - Iberia",
        "Dest": "MAD",
        "AirlineCode": "IB"
    },
    {
        "InterviewId": "5200",
        "InterviewEndDate": "2023-02-07 18:40:44",
        "InterviewState": "Complete",
        "Flight": "KL - KLM Royal Dutch Airlines",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "5201",
        "InterviewEndDate": "2023-02-07 18:44:12",
        "InterviewState": "Complete",
        "Flight": "KL - KLM Royal Dutch Airlines",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "5202",
        "InterviewEndDate": "2023-02-07 18:48:11",
        "InterviewState": "Complete",
        "Flight": "KL - KLM Royal Dutch Airlines",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "5203",
        "InterviewEndDate": "2023-02-07 18:57:04",
        "InterviewState": "Complete",
        "Flight": "EW - Eurowings",
        "Dest": "CGN",
        "AirlineCode": "EW"
    },
    {
        "InterviewId": "5204",
        "InterviewEndDate": "2023-02-07 19:10:28",
        "InterviewState": "Complete",
        "Flight": "EW - Eurowings",
        "Dest": "HAM",
        "AirlineCode": "EW"
    },
    {
        "InterviewId": "5205",
        "InterviewEndDate": "2023-02-07 19:12:28",
        "InterviewState": "Complete",
        "Flight": "EW - Eurowings",
        "Dest": "HAM",
        "AirlineCode": "EW"
    },
    {
        "InterviewId": "5206",
        "InterviewEndDate": "2023-02-07 19:58:48",
        "InterviewState": "Complete",
        "Flight": "EW - Eurowings",
        "Dest": "HAM",
        "AirlineCode": "EW"
    },
    {
        "InterviewId": "5207",
        "InterviewEndDate": "2023-02-07 20:03:00",
        "InterviewState": "Complete",
        "Flight": "DE - Condor Flugdienst",
        "Dest": "ACE",
        "AirlineCode": "DE"
    },
    {
        "InterviewId": "5208",
        "InterviewEndDate": "2023-02-07 20:13:50",
        "InterviewState": "Complete",
        "Flight": "DE - Condor Flugdienst",
        "Dest": "FUE",
        "AirlineCode": "DE"
    },
    {
        "InterviewId": "5209",
        "InterviewEndDate": "2023-02-07 20:24:03",
        "InterviewState": "Complete",
        "Flight": "DE - Condor Flugdienst",
        "Dest": "FUE",
        "AirlineCode": "DE"
    },
    {
        "InterviewId": "5210",
        "InterviewEndDate": "2023-02-08 14:47:53",
        "InterviewState": "Complete",
        "Flight": "EW - Eurowings",
        "Dest": "PRN",
        "AirlineCode": "EW"
    },
    {
        "InterviewId": "5211",
        "InterviewEndDate": "2023-02-08 14:47:22",
        "InterviewState": "Complete",
        "Flight": "EW - Eurowings",
        "Dest": "PRN",
        "AirlineCode": "EW"
    },
    {
        "InterviewId": "5212",
        "InterviewEndDate": "2023-02-08 14:55:55",
        "InterviewState": "Complete",
        "Flight": "EW - Eurowings",
        "Dest": "PRN",
        "AirlineCode": "EW"
    },
    {
        "InterviewId": "5213",
        "InterviewEndDate": "2023-02-08 14:55:33",
        "InterviewState": "Complete",
        "Flight": "EW - Eurowings",
        "Dest": "PRN",
        "AirlineCode": "EW"
    },
    {
        "InterviewId": "5214",
        "InterviewEndDate": "2023-02-08 14:59:37",
        "InterviewState": "Complete",
        "Flight": "TK - Turkish Airlines",
        "Dest": "SAW",
        "AirlineCode": "TK"
    },
    {
        "InterviewId": "5216",
        "InterviewEndDate": "2023-02-08 15:14:28",
        "InterviewState": "Complete",
        "Flight": "TK - Turkish Airlines",
        "Dest": "SAW",
        "AirlineCode": "TK"
    },
    {
        "InterviewId": "5217",
        "InterviewEndDate": "2023-02-08 15:14:15",
        "InterviewState": "Complete",
        "Flight": "TK - Turkish Airlines",
        "Dest": "SAW",
        "AirlineCode": "TK"
    },
    {
        "InterviewId": "5218",
        "InterviewEndDate": "2023-02-08 15:49:55",
        "InterviewState": "Complete",
        "Flight": "BA - British Airways",
        "Dest": "LHR",
        "AirlineCode": "BA"
    },
    {
        "InterviewId": "5219",
        "InterviewEndDate": "2023-02-08 16:02:01",
        "InterviewState": "Complete",
        "Flight": "BA - British Airways",
        "Dest": "LHR",
        "AirlineCode": "BA"
    },
    {
        "InterviewId": "5220",
        "InterviewEndDate": "2023-02-08 16:02:08",
        "InterviewState": "Complete",
        "Flight": "BA - British Airways",
        "Dest": "LHR",
        "AirlineCode": "BA"
    },
    {
        "InterviewId": "5221",
        "InterviewEndDate": "2023-02-08 16:10:18",
        "InterviewState": "Complete",
        "Flight": "BA - British Airways",
        "Dest": "LHR",
        "AirlineCode": "BA"
    },
    {
        "InterviewId": "5222",
        "InterviewEndDate": "2023-02-11 08:11:38",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5223",
        "InterviewEndDate": "2023-02-11 08:21:13",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "OSL",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5224",
        "InterviewEndDate": "2023-02-11 08:33:20",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "PRG",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5225",
        "InterviewEndDate": "2023-02-11 09:12:50",
        "InterviewState": "Complete",
        "Flight": "UA - United Airlines",
        "Dest": "ORD",
        "AirlineCode": "UA"
    },
    {
        "InterviewId": "5226",
        "InterviewEndDate": "2023-02-11 09:16:14",
        "InterviewState": "Complete",
        "Flight": "UA - United Airlines",
        "Dest": "ORD",
        "AirlineCode": "UA"
    },
    {
        "InterviewId": "5227",
        "InterviewEndDate": "2023-02-16 15:41:48",
        "InterviewState": "Complete",
        "Flight": "VY - Vueling",
        "Dest": "PMI",
        "AirlineCode": "VY"
    },
    {
        "InterviewId": "5228",
        "InterviewEndDate": "2023-02-16 15:44:20",
        "InterviewState": "Complete",
        "Flight": "VY - Vueling",
        "Dest": "PMI",
        "AirlineCode": "VY"
    },
    {
        "InterviewId": "5229",
        "InterviewEndDate": "2023-02-16 15:46:54",
        "InterviewState": "Complete",
        "Flight": "VY - Vueling",
        "Dest": "PMI",
        "AirlineCode": "VY"
    },
    {
        "InterviewId": "5230",
        "InterviewEndDate": "2023-02-16 15:52:17",
        "InterviewState": "Complete",
        "Flight": "KL - KLM Royal Dutch Airlines",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "5231",
        "InterviewEndDate": "2023-02-16 15:53:07",
        "InterviewState": "Complete",
        "Flight": "KL - KLM Royal Dutch Airlines",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "5232",
        "InterviewEndDate": "2023-02-16 16:04:00",
        "InterviewState": "Complete",
        "Flight": "KL - KLM Royal Dutch Airlines",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "5233",
        "InterviewEndDate": "2023-02-16 16:08:15",
        "InterviewState": "Complete",
        "Flight": "KL - KLM Royal Dutch Airlines",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "5234",
        "InterviewEndDate": "2023-02-16 16:49:03",
        "InterviewState": "Complete",
        "Flight": "AF - Air France",
        "Dest": "CDG",
        "AirlineCode": "AF"
    },
    {
        "InterviewId": "5235",
        "InterviewEndDate": "2023-02-16 16:51:03",
        "InterviewState": "Complete",
        "Flight": "AF - Air France",
        "Dest": "CDG",
        "AirlineCode": "AF"
    },
    {
        "InterviewId": "5236",
        "InterviewEndDate": "2023-02-16 16:53:15",
        "InterviewState": "Complete",
        "Flight": "AF - Air France",
        "Dest": "CDG",
        "AirlineCode": "AF"
    },
    {
        "InterviewId": "5237",
        "InterviewEndDate": "2023-02-16 17:09:45",
        "InterviewState": "Complete",
        "Flight": "AY - Finnair",
        "Dest": "HEL",
        "AirlineCode": "AY"
    },
    {
        "InterviewId": "5238",
        "InterviewEndDate": "2023-02-16 17:11:50",
        "InterviewState": "Complete",
        "Flight": "UX - Air Europa",
        "Dest": "MAD",
        "AirlineCode": "UX"
    },
    {
        "InterviewId": "5239",
        "InterviewEndDate": "2023-02-19 10:14:36",
        "InterviewState": "Complete",
        "Flight": "XQ - Sun Express",
        "Dest": "ESB",
        "AirlineCode": "XQ"
    },
    {
        "InterviewId": "5240",
        "InterviewEndDate": "2023-02-19 09:02:31",
        "InterviewState": "Complete",
        "Flight": "TK - Turkish Airlines",
        "Dest": "IST",
        "AirlineCode": "TK"
    },
    {
        "InterviewId": "5241",
        "InterviewEndDate": "2023-02-19 09:05:49",
        "InterviewState": "Complete",
        "Flight": "TK - Turkish Airlines",
        "Dest": "IST",
        "AirlineCode": "TK"
    },
    {
        "InterviewId": "5242",
        "InterviewEndDate": "2023-02-19 09:15:30",
        "InterviewState": "Complete",
        "Flight": "TK - Turkish Airlines",
        "Dest": "IST",
        "AirlineCode": "TK"
    },
    {
        "InterviewId": "5243",
        "InterviewEndDate": "2023-02-19 10:14:11",
        "InterviewState": "Complete",
        "Flight": "XQ - Sun Express",
        "Dest": "ESB",
        "AirlineCode": "XQ"
    },
    {
        "InterviewId": "5244",
        "InterviewEndDate": "2023-02-19 10:01:27",
        "InterviewState": "Complete",
        "Flight": "XQ - Sun Express",
        "Dest": "ESB",
        "AirlineCode": "XQ"
    },
    {
        "InterviewId": "5245",
        "InterviewEndDate": "2023-02-19 10:09:44",
        "InterviewState": "Complete",
        "Flight": "XQ - Sun Express",
        "Dest": "ESB",
        "AirlineCode": "XQ"
    },
    {
        "InterviewId": "5246",
        "InterviewEndDate": "2023-02-19 10:28:33",
        "InterviewState": "Complete",
        "Flight": "PC - Pegasus Airlines",
        "Dest": "SAW",
        "AirlineCode": "PC"
    },
    {
        "InterviewId": "5247",
        "InterviewEndDate": "2023-02-19 10:43:50",
        "InterviewState": "Complete",
        "Flight": "PC - Pegasus Airlines",
        "Dest": "SAW",
        "AirlineCode": "PC"
    },
    {
        "InterviewId": "5249",
        "InterviewEndDate": "2023-02-19 11:41:25",
        "InterviewState": "Complete",
        "Flight": "XQ - Sun Express",
        "Dest": "AYT",
        "AirlineCode": "XQ"
    },
    {
        "InterviewId": "5250",
        "InterviewEndDate": "2023-02-19 11:52:48",
        "InterviewState": "Complete",
        "Flight": "XQ - Sun Express",
        "Dest": "AYT",
        "AirlineCode": "XQ"
    },
    {
        "InterviewId": "5251",
        "InterviewEndDate": "2023-02-19 11:40:49",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "LHR",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5252",
        "InterviewEndDate": "2023-02-19 11:46:28",
        "InterviewState": "Complete",
        "Flight": "XQ - Sun Express",
        "Dest": "AYT",
        "AirlineCode": "XQ"
    },
    {
        "InterviewId": "5253",
        "InterviewEndDate": "2023-02-19 11:44:54",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "BRU",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5254",
        "InterviewEndDate": "2023-02-19 11:53:00",
        "InterviewState": "Complete",
        "Flight": "XQ - Sun Express",
        "Dest": "AYT",
        "AirlineCode": "XQ"
    },
    {
        "InterviewId": "5255",
        "InterviewEndDate": "2023-02-19 11:58:34",
        "InterviewState": "Complete",
        "Flight": "XQ - Sun Express",
        "Dest": "AYT",
        "AirlineCode": "XQ"
    },
    {
        "InterviewId": "5256",
        "InterviewEndDate": "2023-02-19 12:34:54",
        "InterviewState": "Complete",
        "Flight": "XQ - Sun Express",
        "Dest": "ADB",
        "AirlineCode": "XQ"
    },
    {
        "InterviewId": "5257",
        "InterviewEndDate": "2023-02-19 12:24:10",
        "InterviewState": "Complete",
        "Flight": "XQ - Sunexpress",
        "Dest": "ADB",
        "AirlineCode": "XQ"
    },
    {
        "InterviewId": "5258",
        "InterviewEndDate": "2023-02-19 12:10:02",
        "InterviewState": "Complete",
        "Flight": "LG - Luxair",
        "Dest": "LUX",
        "AirlineCode": "LG"
    },
    {
        "InterviewId": "5259",
        "InterviewEndDate": "2023-02-19 12:18:04",
        "InterviewState": "Complete",
        "Flight": "XQ - Sun Express",
        "Dest": "ADB",
        "AirlineCode": "XQ"
    },
    {
        "InterviewId": "5260",
        "InterviewEndDate": "2023-02-19 12:06:15",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "AMS",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5261",
        "InterviewEndDate": "2023-02-19 12:20:22",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "CDG",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5263",
        "InterviewEndDate": "2023-02-19 12:55:48",
        "InterviewState": "Complete",
        "Flight": "BA - British Airways",
        "Dest": "LHR",
        "AirlineCode": "BA"
    },
    {
        "InterviewId": "5265",
        "InterviewEndDate": "2023-02-19 13:12:06",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "OSL",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5266",
        "InterviewEndDate": "2023-02-19 13:17:10",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5267",
        "InterviewEndDate": "2023-02-19 13:40:57",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "OSL",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5268",
        "InterviewEndDate": "2023-02-20 15:50:03",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "HAM",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5269",
        "InterviewEndDate": "2023-02-20 15:53:47",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "HAM",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5270",
        "InterviewEndDate": "2023-02-20 15:56:56",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "HAM",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5271",
        "InterviewEndDate": "2023-02-20 16:01:16",
        "InterviewState": "Complete",
        "Flight": "TP - TAP Air Portugal",
        "Dest": "LIS",
        "AirlineCode": "TP"
    },
    {
        "InterviewId": "5272",
        "InterviewEndDate": "2023-02-20 16:03:31",
        "InterviewState": "Complete",
        "Flight": "TP - TAP Air Portugal",
        "Dest": "LIS",
        "AirlineCode": "TP"
    },
    {
        "InterviewId": "5273",
        "InterviewEndDate": "2023-02-20 16:12:09",
        "InterviewState": "Complete",
        "Flight": "TP - TAP Air Portugal",
        "Dest": "LIS",
        "AirlineCode": "TP"
    },
    {
        "InterviewId": "5274",
        "InterviewEndDate": "2023-02-20 16:17:33",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "LHR",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5275",
        "InterviewEndDate": "2023-02-20 16:47:41",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "HND",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5276",
        "InterviewEndDate": "2023-02-20 16:48:27",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "HND",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5277",
        "InterviewEndDate": "2023-02-20 16:51:01",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "HND",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5278",
        "InterviewEndDate": "2023-02-20 16:52:10",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "HND",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5279",
        "InterviewEndDate": "2023-02-20 17:05:12",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "ARN",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5280",
        "InterviewEndDate": "2023-02-24 06:14:02",
        "InterviewState": "Complete",
        "Flight": "AA - American Airlines",
        "Dest": "CLT",
        "AirlineCode": "AA"
    },
    {
        "InterviewId": "5281",
        "InterviewEndDate": "2023-02-24 06:15:59",
        "InterviewState": "Complete",
        "Flight": "AA - American Airlines",
        "Dest": "CLT",
        "AirlineCode": "AA"
    },
    {
        "InterviewId": "5282",
        "InterviewEndDate": "2023-02-24 06:21:29",
        "InterviewState": "Complete",
        "Flight": "AA - American Airlines",
        "Dest": "CLT",
        "AirlineCode": "AA"
    },
    {
        "InterviewId": "5283",
        "InterviewEndDate": "2023-02-24 06:26:22",
        "InterviewState": "Complete",
        "Flight": "AA - American Airlines",
        "Dest": "CLT",
        "AirlineCode": "AA"
    },
    {
        "InterviewId": "5284",
        "InterviewEndDate": "2023-02-24 06:38:36",
        "InterviewState": "Complete",
        "Flight": "AA - American Airlines",
        "Dest": "CLT",
        "AirlineCode": "AA"
    },
    {
        "InterviewId": "5285",
        "InterviewEndDate": "2023-02-24 06:50:56",
        "InterviewState": "Complete",
        "Flight": "AA - American Airlines",
        "Dest": "CLT",
        "AirlineCode": "AA"
    },
    {
        "InterviewId": "5286",
        "InterviewEndDate": "2023-02-24 07:13:42",
        "InterviewState": "Complete",
        "Flight": "EW - Eurowings",
        "Dest": "DUS",
        "AirlineCode": "EW"
    },
    {
        "InterviewId": "5287",
        "InterviewEndDate": "2023-02-24 07:16:12",
        "InterviewState": "Complete",
        "Flight": "EW - Eurowings",
        "Dest": "DUS",
        "AirlineCode": "EW"
    },
    {
        "InterviewId": "5288",
        "InterviewEndDate": "2023-02-24 07:19:40",
        "InterviewState": "Complete",
        "Flight": "EW - Eurowings",
        "Dest": "CGN",
        "AirlineCode": "EW"
    },
    {
        "InterviewId": "5289",
        "InterviewEndDate": "2023-02-24 07:22:22",
        "InterviewState": "Complete",
        "Flight": "EW - Eurowings",
        "Dest": "CGN",
        "AirlineCode": "EW"
    },
    {
        "InterviewId": "5290",
        "InterviewEndDate": "2023-02-24 07:27:53",
        "InterviewState": "Complete",
        "Flight": "EW - Eurowings",
        "Dest": "HAM",
        "AirlineCode": "EW"
    },
    {
        "InterviewId": "5291",
        "InterviewEndDate": "2023-02-24 07:30:08",
        "InterviewState": "Complete",
        "Flight": "EW - Eurowings",
        "Dest": "HAM",
        "AirlineCode": "EW"
    },
    {
        "InterviewId": "5292",
        "InterviewEndDate": "2023-02-24 07:37:46",
        "InterviewState": "Complete",
        "Flight": "EW - Eurowings",
        "Dest": "HAM",
        "AirlineCode": "EW"
    },
    {
        "InterviewId": "5294",
        "InterviewEndDate": "2023-02-26 06:19:57",
        "InterviewState": "Complete",
        "Flight": "EY - ETIHAD Airways",
        "Dest": "AUH",
        "AirlineCode": "EY"
    },
    {
        "InterviewId": "5295",
        "InterviewEndDate": "2023-02-26 06:24:06",
        "InterviewState": "Complete",
        "Flight": "EY - ETIHAD Airways",
        "Dest": "AUH",
        "AirlineCode": "EY"
    },
    {
        "InterviewId": "5296",
        "InterviewEndDate": "2023-02-26 06:28:17",
        "InterviewState": "Complete",
        "Flight": "SQ - Singapore Airlines",
        "Dest": "SIN",
        "AirlineCode": "SQ"
    },
    {
        "InterviewId": "5297",
        "InterviewEndDate": "2023-02-26 06:32:12",
        "InterviewState": "Complete",
        "Flight": "SQ - Singapore Airlines",
        "Dest": "SIN",
        "AirlineCode": "SQ"
    },
    {
        "InterviewId": "5298",
        "InterviewEndDate": "2023-02-26 06:47:19",
        "InterviewState": "Complete",
        "Flight": "SQ - Singapore Airlines",
        "Dest": "SIN",
        "AirlineCode": "SQ"
    },
    {
        "InterviewId": "5299",
        "InterviewEndDate": "2023-02-26 06:49:53",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "LEJ",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5300",
        "InterviewEndDate": "2023-02-26 07:15:49",
        "InterviewState": "Complete",
        "Flight": "UA - United Airlines",
        "Dest": "EWR",
        "AirlineCode": "UA"
    },
    {
        "InterviewId": "5301",
        "InterviewEndDate": "2023-02-26 07:19:50",
        "InterviewState": "Complete",
        "Flight": "UA - United Airlines",
        "Dest": "EWR",
        "AirlineCode": "UA"
    },
    {
        "InterviewId": "5302",
        "InterviewEndDate": "2023-02-26 07:28:58",
        "InterviewState": "Complete",
        "Flight": "TG - Thai Airways",
        "Dest": "BKK",
        "AirlineCode": "TG"
    },
    {
        "InterviewId": "5303",
        "InterviewEndDate": "2023-02-26 07:33:29",
        "InterviewState": "Complete",
        "Flight": "TG - Thai Airways",
        "Dest": "BKK",
        "AirlineCode": "TG"
    },
    {
        "InterviewId": "5304",
        "InterviewEndDate": "2023-02-26 07:45:07",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5308",
        "InterviewEndDate": "2023-03-15 15:50:55",
        "InterviewState": "Complete",
        "Flight": "DE - Condor Flugdienst",
        "Dest": "HRG",
        "AirlineCode": "DE"
    },
    {
        "InterviewId": "5309",
        "InterviewEndDate": "2023-03-15 15:56:16",
        "InterviewState": "Complete",
        "Flight": "DE - Condor Flugdienst",
        "Dest": "HRG",
        "AirlineCode": "DE"
    },
    {
        "InterviewId": "5310",
        "InterviewEndDate": "2023-03-15 15:59:20",
        "InterviewState": "Complete",
        "Flight": "DE - Condor Flugdienst",
        "Dest": "HRG",
        "AirlineCode": "DE"
    },
    {
        "InterviewId": "5311",
        "InterviewEndDate": "2023-03-15 16:06:23",
        "InterviewState": "Complete",
        "Flight": "DE - Condor Flugdienst",
        "Dest": "HRG",
        "AirlineCode": "DE"
    },
    {
        "InterviewId": "5312",
        "InterviewEndDate": "2023-03-15 16:13:31",
        "InterviewState": "Complete",
        "Flight": "DE - Condor Flugdienst",
        "Dest": "HRG",
        "AirlineCode": "DE"
    },
    {
        "InterviewId": "5313",
        "InterviewEndDate": "2023-03-15 16:15:47",
        "InterviewState": "Complete",
        "Flight": "DE - Condor Flugdienst",
        "Dest": "HRG",
        "AirlineCode": "DE"
    },
    {
        "InterviewId": "5314",
        "InterviewEndDate": "2023-03-15 16:21:17",
        "InterviewState": "Complete",
        "Flight": "BA - British Airways",
        "Dest": "LHR",
        "AirlineCode": "BA"
    },
    {
        "InterviewId": "5315",
        "InterviewEndDate": "2023-03-15 16:25:53",
        "InterviewState": "Complete",
        "Flight": "BA - British Airways",
        "Dest": "LHR",
        "AirlineCode": "BA"
    },
    {
        "InterviewId": "5316",
        "InterviewEndDate": "2023-03-15 16:30:15",
        "InterviewState": "Complete",
        "Flight": "BA - British Airways",
        "Dest": "LHR",
        "AirlineCode": "BA"
    },
    {
        "InterviewId": "5317",
        "InterviewEndDate": "2023-03-15 16:33:49",
        "InterviewState": "Complete",
        "Flight": "BA - British Airways",
        "Dest": "LHR",
        "AirlineCode": "BA"
    },
    {
        "InterviewId": "5318",
        "InterviewEndDate": "2023-03-15 16:47:52",
        "InterviewState": "Complete",
        "Flight": "BA - British Airways",
        "Dest": "LHR",
        "AirlineCode": "BA"
    },
    {
        "InterviewId": "5319",
        "InterviewEndDate": "2023-03-16 18:03:48",
        "InterviewState": "Complete",
        "Flight": "Lh",
        "Dest": "ICN",
        "AirlineCode": "Lh"
    },
    {
        "InterviewId": "5320",
        "InterviewEndDate": "2023-03-16 18:03:33",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "ICN",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5321",
        "InterviewEndDate": "2023-03-16 18:16:07",
        "InterviewState": "Complete",
        "Flight": "LO - LOT Polish Airlines",
        "Dest": "WAW",
        "AirlineCode": "LO"
    },
    {
        "InterviewId": "5323",
        "InterviewEndDate": "2023-03-16 18:15:58",
        "InterviewState": "Complete",
        "Flight": "LO - LOT Polish Airlines",
        "Dest": "WAW",
        "AirlineCode": "LO"
    },
    {
        "InterviewId": "5324",
        "InterviewEndDate": "2023-03-16 18:50:35",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "LPA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5325",
        "InterviewEndDate": "2023-03-16 18:50:37",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "LPA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5326",
        "InterviewEndDate": "2023-03-16 19:02:08",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "BUD",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5327",
        "InterviewEndDate": "2023-03-16 19:02:12",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "BUD",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5329",
        "InterviewEndDate": "2023-03-16 19:13:03",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "LHR",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5330",
        "InterviewEndDate": "2023-03-16 19:20:04",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "LHR",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5331",
        "InterviewEndDate": "2023-03-17 18:36:40",
        "InterviewState": "Complete",
        "Flight": "EI - Aer Lingus",
        "Dest": "DUB",
        "AirlineCode": "EI"
    },
    {
        "InterviewId": "5332",
        "InterviewEndDate": "2023-03-17 18:38:45",
        "InterviewState": "Complete",
        "Flight": "EI - Aer Lingus",
        "Dest": "DUB",
        "AirlineCode": "EI"
    },
    {
        "InterviewId": "5333",
        "InterviewEndDate": "2023-03-17 18:46:53",
        "InterviewState": "Complete",
        "Flight": "EI - Aer Lingus",
        "Dest": "DUB",
        "AirlineCode": "EI"
    },
    {
        "InterviewId": "5334",
        "InterviewEndDate": "2023-03-17 18:50:12",
        "InterviewState": "Complete",
        "Flight": "EI - Aer Lingus",
        "Dest": "DUB",
        "AirlineCode": "EI"
    },
    {
        "InterviewId": "5335",
        "InterviewEndDate": "2023-03-17 18:52:38",
        "InterviewState": "Complete",
        "Flight": "EI - Aer Lingus",
        "Dest": "DUB",
        "AirlineCode": "EI"
    },
    {
        "InterviewId": "5336",
        "InterviewEndDate": "2023-03-17 19:01:09",
        "InterviewState": "Complete",
        "Flight": "EI - Aer Lingus",
        "Dest": "DUB",
        "AirlineCode": "EI"
    },
    {
        "InterviewId": "5337",
        "InterviewEndDate": "2023-03-17 19:05:51",
        "InterviewState": "Complete",
        "Flight": "EI - Aer Lingus",
        "Dest": "DUB",
        "AirlineCode": "EI"
    },
    {
        "InterviewId": "5338",
        "InterviewEndDate": "2023-03-17 19:43:33",
        "InterviewState": "Complete",
        "Flight": "EW - Eurowings",
        "Dest": "LPA",
        "AirlineCode": "EW"
    },
    {
        "InterviewId": "5339",
        "InterviewEndDate": "2023-03-17 19:44:54",
        "InterviewState": "Complete",
        "Flight": "EW - Eurowings",
        "Dest": "LPA",
        "AirlineCode": "EW"
    },
    {
        "InterviewId": "5340",
        "InterviewEndDate": "2023-03-17 19:46:22",
        "InterviewState": "Complete",
        "Flight": "EW - Eurowings",
        "Dest": "LPA",
        "AirlineCode": "EW"
    },
    {
        "InterviewId": "5341",
        "InterviewEndDate": "2023-03-17 19:52:37",
        "InterviewState": "Complete",
        "Flight": "EW - Eurowings",
        "Dest": "LPA",
        "AirlineCode": "EW"
    },
    {
        "InterviewId": "5342",
        "InterviewEndDate": "2023-03-17 20:00:38",
        "InterviewState": "Complete",
        "Flight": "EW - Eurowings",
        "Dest": "LPA",
        "AirlineCode": "EW"
    },
    {
        "InterviewId": "5343",
        "InterviewEndDate": "2023-03-18 14:57:22",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "DUS",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5344",
        "InterviewEndDate": "2023-03-18 15:03:42",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "CPH",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5345",
        "InterviewEndDate": "2023-03-18 15:53:50",
        "InterviewState": "Complete",
        "Flight": "TP - TAP Air Portugal",
        "Dest": "LIS",
        "AirlineCode": "TP"
    },
    {
        "InterviewId": "5346",
        "InterviewEndDate": "2023-03-18 15:27:51",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5347",
        "InterviewEndDate": "2023-03-18 15:57:22",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5348",
        "InterviewEndDate": "2023-03-18 16:09:04",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "HAM",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5349",
        "InterviewEndDate": "2023-03-18 16:25:43",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "SFO",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5350",
        "InterviewEndDate": "2023-03-18 16:31:19",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "WAW",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5351",
        "InterviewEndDate": "2023-03-21 16:02:13",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5352",
        "InterviewEndDate": "2023-03-21 16:06:37",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5353",
        "InterviewEndDate": "2023-03-21 16:11:53",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5354",
        "InterviewEndDate": "2023-03-21 16:19:03",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "LHR",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5355",
        "InterviewEndDate": "2023-03-21 16:22:53",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "LHR",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5356",
        "InterviewEndDate": "2023-03-21 16:26:20",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "LHR",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5357",
        "InterviewEndDate": "2023-03-21 16:44:48",
        "InterviewState": "Complete",
        "Flight": "LG - Luxair",
        "Dest": "LUX",
        "AirlineCode": "LG"
    },
    {
        "InterviewId": "5358",
        "InterviewEndDate": "2023-03-21 16:56:30",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "PRG",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5359",
        "InterviewEndDate": "2023-03-21 16:59:06",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "PRG",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5360",
        "InterviewEndDate": "2023-03-21 17:02:19",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "DRS",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5361",
        "InterviewEndDate": "2023-03-21 17:07:00",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "PRG",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5362",
        "InterviewEndDate": "2023-03-21 17:45:59",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "CGN",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5363",
        "InterviewEndDate": "2023-03-29 06:07:02",
        "InterviewState": "Complete",
        "Flight": "EY - ETIHAD Airways",
        "Dest": "AUH",
        "AirlineCode": "EY"
    },
    {
        "InterviewId": "5364",
        "InterviewEndDate": "2023-03-29 06:05:38",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "CAI",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5365",
        "InterviewEndDate": "2023-03-29 06:06:36",
        "InterviewState": "Complete",
        "Flight": "SQ - Singapore Airlines",
        "Dest": "SIN",
        "AirlineCode": "SQ"
    },
    {
        "InterviewId": "5366",
        "InterviewEndDate": "2023-03-29 06:46:46",
        "InterviewState": "Complete",
        "Flight": "TG - Thai Airways",
        "Dest": "BKK",
        "AirlineCode": "TG"
    },
    {
        "InterviewId": "5367",
        "InterviewEndDate": "2023-03-29 06:42:15",
        "InterviewState": "Complete",
        "Flight": "LG - Luxair",
        "Dest": "LUX",
        "AirlineCode": "LG"
    },
    {
        "InterviewId": "5368",
        "InterviewEndDate": "2023-03-29 06:20:43",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "OTP",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5369",
        "InterviewEndDate": "2023-03-29 07:01:46",
        "InterviewState": "Complete",
        "Flight": "TG - Thai Airways",
        "Dest": "BKK",
        "AirlineCode": "TG"
    },
    {
        "InterviewId": "5370",
        "InterviewEndDate": "2023-03-29 06:52:56",
        "InterviewState": "Complete",
        "Flight": "TG - Thai Airways",
        "Dest": "BKK",
        "AirlineCode": "TG"
    },
    {
        "InterviewId": "5371",
        "InterviewEndDate": "2023-03-29 06:55:47",
        "InterviewState": "Complete",
        "Flight": "TG - Thai Airways",
        "Dest": "BKK",
        "AirlineCode": "TG"
    },
    {
        "InterviewId": "5372",
        "InterviewEndDate": "2023-03-29 07:11:51",
        "InterviewState": "Complete",
        "Flight": "BT - Air Baltic",
        "Dest": "RIX",
        "AirlineCode": "BT"
    },
    {
        "InterviewId": "5373",
        "InterviewEndDate": "2023-03-29 07:17:18",
        "InterviewState": "Complete",
        "Flight": "BT - Air Baltic",
        "Dest": "RIX",
        "AirlineCode": "BT"
    },
    {
        "InterviewId": "5374",
        "InterviewEndDate": "2023-03-29 07:22:11",
        "InterviewState": "Complete",
        "Flight": "BT - Air Baltic",
        "Dest": "RIX",
        "AirlineCode": "BT"
    },
    {
        "InterviewId": "5376",
        "InterviewEndDate": "2023-03-29 07:28:56",
        "InterviewState": "Complete",
        "Flight": "LO - LOT Polish Airlines",
        "Dest": "WAW",
        "AirlineCode": "LO"
    },
    {
        "InterviewId": "5379",
        "InterviewEndDate": "2023-03-31 16:30:37",
        "InterviewState": "Complete",
        "Flight": "TU - Tunisair",
        "Dest": "TUN",
        "AirlineCode": "TU"
    },
    {
        "InterviewId": "5380",
        "InterviewEndDate": "2023-03-31 16:44:45",
        "InterviewState": "Complete",
        "Flight": "TU - Tunisair",
        "Dest": "TUN",
        "AirlineCode": "TU"
    },
    {
        "InterviewId": "5381",
        "InterviewEndDate": "2023-03-31 16:44:56",
        "InterviewState": "Complete",
        "Flight": "TU - Tunisair",
        "Dest": "TUN",
        "AirlineCode": "TU"
    },
    {
        "InterviewId": "5382",
        "InterviewEndDate": "2023-03-31 16:48:00",
        "InterviewState": "Complete",
        "Flight": "TU - Tunisair",
        "Dest": "TUN",
        "AirlineCode": "TU"
    },
    {
        "InterviewId": "5383",
        "InterviewEndDate": "2023-03-31 16:48:43",
        "InterviewState": "Complete",
        "Flight": "TU - Tunisair",
        "Dest": "TUN",
        "AirlineCode": "TU"
    },
    {
        "InterviewId": "5384",
        "InterviewEndDate": "2023-03-31 16:50:56",
        "InterviewState": "Complete",
        "Flight": "TU - Tunisair",
        "Dest": "TUN",
        "AirlineCode": "TU"
    },
    {
        "InterviewId": "5385",
        "InterviewEndDate": "2023-03-31 17:14:08",
        "InterviewState": "Complete",
        "Flight": "WY - Oman Air",
        "Dest": "MCT",
        "AirlineCode": "WY"
    },
    {
        "InterviewId": "5386",
        "InterviewEndDate": "2023-03-31 17:16:33",
        "InterviewState": "Complete",
        "Flight": "WY - Oman Air",
        "Dest": "MCT",
        "AirlineCode": "WY"
    },
    {
        "InterviewId": "5387",
        "InterviewEndDate": "2023-03-31 17:19:33",
        "InterviewState": "Complete",
        "Flight": "WY - Oman Air",
        "Dest": "MCT",
        "AirlineCode": "WY"
    },
    {
        "InterviewId": "5388",
        "InterviewEndDate": "2023-03-31 17:23:00",
        "InterviewState": "Complete",
        "Flight": "WY - Oman Air",
        "Dest": "MCT",
        "AirlineCode": "WY"
    },
    {
        "InterviewId": "5389",
        "InterviewEndDate": "2023-03-31 17:25:56",
        "InterviewState": "Complete",
        "Flight": "WY - Oman Air",
        "Dest": "MCT",
        "AirlineCode": "WY"
    },
    {
        "InterviewId": "5390",
        "InterviewEndDate": "2023-03-31 17:35:53",
        "InterviewState": "Complete",
        "Flight": "WY - Oman Air",
        "Dest": "MCT",
        "AirlineCode": "WY"
    },
    {
        "InterviewId": "5391",
        "InterviewEndDate": "2023-03-31 17:43:31",
        "InterviewState": "Complete",
        "Flight": "",
        "Dest": "HRG",
        "AirlineCode": ""
    },
    {
        "InterviewId": "5392",
        "InterviewEndDate": "2023-03-31 17:46:12",
        "InterviewState": "Complete",
        "Flight": "",
        "Dest": "HRG",
        "AirlineCode": ""
    },
    {
        "InterviewId": "5393",
        "InterviewEndDate": "2023-03-31 18:16:26",
        "InterviewState": "Complete",
        "Flight": "",
        "Dest": "HRG",
        "AirlineCode": ""
    },
    {
        "InterviewId": "5459",
        "InterviewEndDate": "2023-04-08 11:33:38",
        "InterviewState": "Complete",
        "Flight": "EK - Emirates",
        "Dest": "DXB",
        "AirlineCode": "EK"
    },
    {
        "InterviewId": "5460",
        "InterviewEndDate": "2023-04-08 13:26:47",
        "InterviewState": "Complete",
        "Flight": "EZY",
        "Dest": "EDI",
        "AirlineCode": "EZY"
    },
    {
        "InterviewId": "5461",
        "InterviewEndDate": "2023-04-08 13:25:17",
        "InterviewState": "Complete",
        "Flight": "EZY",
        "Dest": "EDI",
        "AirlineCode": "EZY"
    },
    {
        "InterviewId": "5462",
        "InterviewEndDate": "2023-04-08 11:55:26",
        "InterviewState": "Complete",
        "Flight": "EK - Emirates",
        "Dest": "DXB",
        "AirlineCode": "EK"
    },
    {
        "InterviewId": "5463",
        "InterviewEndDate": "2023-04-08 11:44:14",
        "InterviewState": "Complete",
        "Flight": "EK - Emirates",
        "Dest": "DXB",
        "AirlineCode": "EK"
    },
    {
        "InterviewId": "5464",
        "InterviewEndDate": "2023-04-08 11:59:59",
        "InterviewState": "Complete",
        "Flight": "EK - Emirates",
        "Dest": "DXB",
        "AirlineCode": "EK"
    },
    {
        "InterviewId": "5465",
        "InterviewEndDate": "2023-04-08 12:10:46",
        "InterviewState": "Complete",
        "Flight": "EK - Emirates",
        "Dest": "DXB",
        "AirlineCode": "EK"
    },
    {
        "InterviewId": "5466",
        "InterviewEndDate": "2023-04-08 12:06:46",
        "InterviewState": "Complete",
        "Flight": "EK - Emirates",
        "Dest": "DXB",
        "AirlineCode": "EK"
    },
    {
        "InterviewId": "5467",
        "InterviewEndDate": "2023-04-08 12:13:47",
        "InterviewState": "Complete",
        "Flight": "EK - Emirates",
        "Dest": "DXB",
        "AirlineCode": "EK"
    },
    {
        "InterviewId": "5468",
        "InterviewEndDate": "2023-04-08 12:15:54",
        "InterviewState": "Complete",
        "Flight": "EK - Emirates",
        "Dest": "DXB",
        "AirlineCode": "EK"
    },
    {
        "InterviewId": "5469",
        "InterviewEndDate": "2023-04-08 12:26:38",
        "InterviewState": "Complete",
        "Flight": "TK - Turkish Airlines",
        "Dest": "IST",
        "AirlineCode": "TK"
    },
    {
        "InterviewId": "5470",
        "InterviewEndDate": "2023-04-08 12:25:53",
        "InterviewState": "Complete",
        "Flight": "EK - Emirates",
        "Dest": "DXB",
        "AirlineCode": "EK"
    },
    {
        "InterviewId": "5471",
        "InterviewEndDate": "2023-04-08 12:28:52",
        "InterviewState": "Complete",
        "Flight": "TK - Turkish Airlines",
        "Dest": "IST",
        "AirlineCode": "TK"
    },
    {
        "InterviewId": "5472",
        "InterviewEndDate": "2023-04-08 13:32:17",
        "InterviewState": "Complete",
        "Flight": "EZY",
        "Dest": "EDI",
        "AirlineCode": "EZY"
    },
    {
        "InterviewId": "5473",
        "InterviewEndDate": "2023-04-08 13:39:44",
        "InterviewState": "Complete",
        "Flight": "EZY",
        "Dest": "EDI",
        "AirlineCode": "EZY"
    },
    {
        "InterviewId": "5474",
        "InterviewEndDate": "2023-04-08 13:43:43",
        "InterviewState": "Complete",
        "Flight": "EZY",
        "Dest": "EDI",
        "AirlineCode": "EZY"
    },
    {
        "InterviewId": "5475",
        "InterviewEndDate": "2023-04-08 14:02:31",
        "InterviewState": "Complete",
        "Flight": "PC - Pegasus Airlines",
        "Dest": "SAW",
        "AirlineCode": "PC"
    },
    {
        "InterviewId": "5476",
        "InterviewEndDate": "2023-04-08 13:49:49",
        "InterviewState": "Complete",
        "Flight": "PC - Pegasus Airlines",
        "Dest": "SAW",
        "AirlineCode": "PC"
    },
    {
        "InterviewId": "5477",
        "InterviewEndDate": "2023-04-08 13:54:09",
        "InterviewState": "Complete",
        "Flight": "PC - Pegasus Airlines",
        "Dest": "SAW",
        "AirlineCode": "PC"
    },
    {
        "InterviewId": "5478",
        "InterviewEndDate": "2023-04-08 14:12:20",
        "InterviewState": "Complete",
        "Flight": "BA - British Airways",
        "Dest": "LHR",
        "AirlineCode": "BA"
    },
    {
        "InterviewId": "5479",
        "InterviewEndDate": "2023-04-08 14:06:45",
        "InterviewState": "Complete",
        "Flight": "BA - British Airways",
        "Dest": "LHR",
        "AirlineCode": "BA"
    },
    {
        "InterviewId": "5480",
        "InterviewEndDate": "2023-04-09 13:36:38",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "BUD",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5481",
        "InterviewEndDate": "2023-04-09 13:54:25",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "DEN",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5482",
        "InterviewEndDate": "2023-04-09 14:25:02",
        "InterviewState": "Complete",
        "Flight": "SK - SAS-Scandinavian Airlines System",
        "Dest": "CPH",
        "AirlineCode": "SK"
    },
    {
        "InterviewId": "5483",
        "InterviewEndDate": "2023-04-09 14:48:52",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5484",
        "InterviewEndDate": "2023-04-09 14:57:27",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "LHR",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5485",
        "InterviewEndDate": "2023-04-09 15:32:34",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5486",
        "InterviewEndDate": "2023-04-11 18:03:21",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "DUS",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5487",
        "InterviewEndDate": "2023-04-11 18:07:04",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "DUS",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5488",
        "InterviewEndDate": "2023-04-11 18:09:53",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "DUS",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5489",
        "InterviewEndDate": "2023-04-11 18:18:45",
        "InterviewState": "Complete",
        "Flight": "EN - AirDolomiti",
        "Dest": "MXP",
        "AirlineCode": "EN"
    },
    {
        "InterviewId": "5490",
        "InterviewEndDate": "2023-04-11 18:19:36",
        "InterviewState": "Complete",
        "Flight": "EN - AirDolomiti",
        "Dest": "MXP",
        "AirlineCode": "EN"
    },
    {
        "InterviewId": "5491",
        "InterviewEndDate": "2023-04-11 18:22:48",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FAO",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5492",
        "InterviewEndDate": "2023-04-11 18:47:14",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FAO",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5493",
        "InterviewEndDate": "2023-04-11 18:54:49",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FAO",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5494",
        "InterviewEndDate": "2023-04-11 18:58:14",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FAO",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5495",
        "InterviewEndDate": "2023-04-11 19:00:24",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5496",
        "InterviewEndDate": "2023-04-11 19:02:49",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5497",
        "InterviewEndDate": "2023-04-11 19:23:22",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "BHX",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5498",
        "InterviewEndDate": "2023-04-19 14:53:14",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "DUS",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5499",
        "InterviewEndDate": "2023-04-19 15:02:04",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "DUS",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5500",
        "InterviewEndDate": "2023-04-19 15:11:23",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "DUS",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5501",
        "InterviewEndDate": "2023-04-19 15:17:52",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5502",
        "InterviewEndDate": "2023-04-19 15:20:18",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5503",
        "InterviewEndDate": "2023-04-19 15:26:20",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "BER",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5504",
        "InterviewEndDate": "2023-04-19 15:39:19",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "BER",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5505",
        "InterviewEndDate": "2023-04-19 15:42:06",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "ATH",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5506",
        "InterviewEndDate": "2023-04-19 15:49:12",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FCO",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5507",
        "InterviewEndDate": "2023-04-19 15:56:49",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FCO",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5508",
        "InterviewEndDate": "2023-04-19 16:23:41",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "LEJ",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5509",
        "InterviewEndDate": "2023-04-19 16:36:33",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "LEJ",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5510",
        "InterviewEndDate": "2023-04-19 16:39:15",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "MAD",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5511",
        "InterviewEndDate": "2023-04-19 16:41:42",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "MAD",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5512",
        "InterviewEndDate": "2023-04-19 16:47:11",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "BRE",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5513",
        "InterviewEndDate": "2023-04-19 16:49:09",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "BRE",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5514",
        "InterviewEndDate": "2023-04-20 12:50:17",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "LHR",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5517",
        "InterviewEndDate": "2023-04-20 13:51:59",
        "InterviewState": "Complete",
        "Flight": "OS - Austrian Airlines",
        "Dest": "VIE",
        "AirlineCode": "OS"
    },
    {
        "InterviewId": "5518",
        "InterviewEndDate": "2023-04-20 14:13:40",
        "InterviewState": "Complete",
        "Flight": "MS - Egyptair",
        "Dest": "CAI",
        "AirlineCode": "MS"
    },
    {
        "InterviewId": "5524",
        "InterviewEndDate": "2023-04-25 11:18:44",
        "InterviewState": "Complete",
        "Flight": "TP - TAP Air Portugal",
        "Dest": "LIS",
        "AirlineCode": "TP"
    },
    {
        "InterviewId": "5525",
        "InterviewEndDate": "2023-04-25 09:08:20",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "CPH",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5526",
        "InterviewEndDate": "2023-04-25 09:45:05",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "TRN",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5527",
        "InterviewEndDate": "2023-04-25 13:18:48",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "DUS",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5528",
        "InterviewEndDate": "2023-04-25 11:40:54",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "ORD",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5529",
        "InterviewEndDate": "2023-04-25 11:54:33",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "GRU",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5530",
        "InterviewEndDate": "2023-04-25 12:38:59",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "GOT",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5531",
        "InterviewEndDate": "2023-04-25 12:49:34",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "DUB",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5532",
        "InterviewEndDate": "2023-04-25 13:03:10",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "PAD",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5533",
        "InterviewEndDate": "2023-04-25 13:23:38",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "PMO",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5534",
        "InterviewEndDate": "2023-04-25 13:31:13",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "CLJ",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5536",
        "InterviewEndDate": "2023-04-25 14:35:13",
        "InterviewState": "Complete",
        "Flight": "MS - Egyptair",
        "Dest": "CAI",
        "AirlineCode": "MS"
    },
    {
        "InterviewId": "5541",
        "InterviewEndDate": "2023-04-26 11:47:17",
        "InterviewState": "Complete",
        "Flight": "Qatar Airline",
        "Dest": "DOH",
        "AirlineCode": "Qatar"
    },
    {
        "InterviewId": "5542",
        "InterviewEndDate": "2023-04-26 12:16:36",
        "InterviewState": "Complete",
        "Flight": "QR - Qatar Airways",
        "Dest": "DOH",
        "AirlineCode": "QR"
    },
    {
        "InterviewId": "5543",
        "InterviewEndDate": "2023-04-26 14:27:01",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "DUS",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5546",
        "InterviewEndDate": "2023-04-27 15:47:52",
        "InterviewState": "Complete",
        "Flight": "AF - Air France",
        "Dest": "CDG",
        "AirlineCode": "AF"
    },
    {
        "InterviewId": "5547",
        "InterviewEndDate": "2023-04-27 15:47:53",
        "InterviewState": "Complete",
        "Flight": "AF - Air France",
        "Dest": "CDG",
        "AirlineCode": "AF"
    },
    {
        "InterviewId": "5548",
        "InterviewEndDate": "2023-04-27 15:55:40",
        "InterviewState": "Complete",
        "Flight": "AF - Air France",
        "Dest": "CDG",
        "AirlineCode": "AF"
    },
    {
        "InterviewId": "5549",
        "InterviewEndDate": "2023-04-27 16:01:44",
        "InterviewState": "Complete",
        "Flight": "UX - Air Europa",
        "Dest": "MAD",
        "AirlineCode": "UX"
    },
    {
        "InterviewId": "5550",
        "InterviewEndDate": "2023-04-27 16:01:39",
        "InterviewState": "Complete",
        "Flight": "UX - Air Europa",
        "Dest": "MAD",
        "AirlineCode": "UX"
    },
    {
        "InterviewId": "5551",
        "InterviewEndDate": "2023-04-27 16:10:19",
        "InterviewState": "Complete",
        "Flight": "UX - Air Europa",
        "Dest": "MAD",
        "AirlineCode": "UX"
    },
    {
        "InterviewId": "5552",
        "InterviewEndDate": "2023-04-27 16:50:36",
        "InterviewState": "Complete",
        "Flight": "6I - L\u00fcbeck Air",
        "Dest": "LBC",
        "AirlineCode": "6I"
    },
    {
        "InterviewId": "5553",
        "InterviewEndDate": "2023-04-27 16:50:44",
        "InterviewState": "Complete",
        "Flight": "6I - L\u00fcbeck Air",
        "Dest": "LBC",
        "AirlineCode": "6I"
    },
    {
        "InterviewId": "5554",
        "InterviewEndDate": "2023-04-27 17:21:47",
        "InterviewState": "Complete",
        "Flight": "IB - Iberia",
        "Dest": "MAD",
        "AirlineCode": "IB"
    },
    {
        "InterviewId": "5555",
        "InterviewEndDate": "2023-04-27 17:24:28",
        "InterviewState": "Complete",
        "Flight": "IB - Iberia",
        "Dest": "MAD",
        "AirlineCode": "IB"
    },
    {
        "InterviewId": "5556",
        "InterviewEndDate": "2023-04-27 17:53:46",
        "InterviewState": "Complete",
        "Flight": "IB - Iberia",
        "Dest": "MAD",
        "AirlineCode": "IB"
    },
    {
        "InterviewId": "5557",
        "InterviewEndDate": "2023-04-27 17:53:53",
        "InterviewState": "Complete",
        "Flight": "IB - Iberia",
        "Dest": "MAD",
        "AirlineCode": "IB"
    },
    {
        "InterviewId": "5558",
        "InterviewEndDate": "2023-04-27 18:03:12",
        "InterviewState": "Complete",
        "Flight": "EW - Eurowings",
        "Dest": "HAM",
        "AirlineCode": "EW"
    },
    {
        "InterviewId": "5559",
        "InterviewEndDate": "2023-04-27 18:06:41",
        "InterviewState": "Complete",
        "Flight": "EW - Eurowings",
        "Dest": "HAM",
        "AirlineCode": "EW"
    },
    {
        "InterviewId": "5560",
        "InterviewEndDate": "2023-04-27 18:15:44",
        "InterviewState": "Complete",
        "Flight": "EW - Eurowings",
        "Dest": "HAM",
        "AirlineCode": "EW"
    },
    {
        "InterviewId": "5561",
        "InterviewEndDate": "2023-04-27 18:16:22",
        "InterviewState": "Complete",
        "Flight": "EW - Eurowings",
        "Dest": "HAM",
        "AirlineCode": "EW"
    },
    {
        "InterviewId": "5564",
        "InterviewEndDate": "2023-04-28 09:37:55",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "WAW",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5565",
        "InterviewEndDate": "2023-04-28 09:49:58",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "TLS",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5566",
        "InterviewEndDate": "2023-04-28 10:16:54",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "DEL",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5567",
        "InterviewEndDate": "2023-04-28 10:23:01",
        "InterviewState": "Complete",
        "Flight": "Air dolomite",
        "Dest": "LIN",
        "AirlineCode": "Air"
    },
    {
        "InterviewId": "5568",
        "InterviewEndDate": "2023-04-28 11:49:00",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5571",
        "InterviewEndDate": "2023-04-30 04:48:23",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "DEL",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5572",
        "InterviewEndDate": "2023-04-30 04:52:41",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "DEL",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5573",
        "InterviewEndDate": "2023-04-30 04:58:29",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "SIN",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5574",
        "InterviewEndDate": "2023-04-30 05:11:42",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "SIN",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5575",
        "InterviewEndDate": "2023-04-30 05:27:30",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "TSR",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5576",
        "InterviewEndDate": "2023-04-30 05:30:24",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "WRO",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5577",
        "InterviewEndDate": "2023-05-06 14:04:32",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "HER",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5578",
        "InterviewEndDate": "2023-05-06 12:43:48",
        "InterviewState": "Complete",
        "Flight": "AY - Finnair",
        "Dest": "HEL",
        "AirlineCode": "AY"
    },
    {
        "InterviewId": "5579",
        "InterviewEndDate": "2023-05-06 13:17:45",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "BUD",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5580",
        "InterviewEndDate": "2023-05-06 13:19:06",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "BUD",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5581",
        "InterviewEndDate": "2023-05-06 12:34:44",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "OTP",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5582",
        "InterviewEndDate": "2023-05-06 12:47:55",
        "InterviewState": "Complete",
        "Flight": "AY - Finnair",
        "Dest": "HEL",
        "AirlineCode": "AY"
    },
    {
        "InterviewId": "5585",
        "InterviewEndDate": "2023-05-06 12:53:05",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "DBV",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5586",
        "InterviewEndDate": "2023-05-06 13:01:29",
        "InterviewState": "Complete",
        "Flight": "SK - SAS-Scandinavian Airlines System",
        "Dest": "CPH",
        "AirlineCode": "SK"
    },
    {
        "InterviewId": "5587",
        "InterviewEndDate": "2023-05-06 13:33:52",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "ATH",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5588",
        "InterviewEndDate": "2023-05-06 13:38:08",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "ZAG",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5589",
        "InterviewEndDate": "2023-05-06 13:42:21",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "TLS",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5590",
        "InterviewEndDate": "2023-05-06 13:54:03",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "HAM",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5591",
        "InterviewEndDate": "2023-05-06 13:54:18",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "OPO",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5592",
        "InterviewEndDate": "2023-05-06 14:04:27",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "HER",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5597",
        "InterviewEndDate": "2023-05-11 09:32:30",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "YYZ",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5598",
        "InterviewEndDate": "2023-05-11 09:14:44",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "IAD",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5599",
        "InterviewEndDate": "2023-05-11 09:11:51",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FMO",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5601",
        "InterviewEndDate": "2023-05-11 09:12:26",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FMO",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5602",
        "InterviewEndDate": "2023-05-11 09:21:25",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "BRE",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5603",
        "InterviewEndDate": "2023-05-11 09:31:42",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "YYZ",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5604",
        "InterviewEndDate": "2023-05-11 09:37:58",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "YYZ",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5605",
        "InterviewEndDate": "2023-05-11 09:46:16",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "GRZ",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5606",
        "InterviewEndDate": "2023-05-11 09:45:10",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "GRZ",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5607",
        "InterviewEndDate": "2023-05-11 09:45:57",
        "InterviewState": "Complete",
        "Flight": "LH",
        "Dest": "MIA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5608",
        "InterviewEndDate": "2023-05-11 09:56:13",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "VCE",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5609",
        "InterviewEndDate": "2023-05-11 09:57:08",
        "InterviewState": "Complete",
        "Flight": "Air doromiti",
        "Dest": "VCE",
        "AirlineCode": "Air"
    },
    {
        "InterviewId": "5610",
        "InterviewEndDate": "2023-05-11 09:55:12",
        "InterviewState": "Complete",
        "Flight": "Air Dolomiti",
        "Dest": "VCE",
        "AirlineCode": "Air"
    },
    {
        "InterviewId": "5611",
        "InterviewEndDate": "2023-05-11 10:07:20",
        "InterviewState": "Complete",
        "Flight": "Air dolomiti",
        "Dest": "VCE",
        "AirlineCode": "Air"
    },
    {
        "InterviewId": "5612",
        "InterviewEndDate": "2023-05-11 10:27:37",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "YUL",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5613",
        "InterviewEndDate": "2023-05-11 10:24:10",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "EWR",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5614",
        "InterviewEndDate": "2023-05-11 10:13:45",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "DUS",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5615",
        "InterviewEndDate": "2023-05-11 10:21:43",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "YUL",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5616",
        "InterviewEndDate": "2023-05-11 10:55:48",
        "InterviewState": "Complete",
        "Flight": "TP - TAP Air Portugal",
        "Dest": "LIS",
        "AirlineCode": "TP"
    },
    {
        "InterviewId": "5617",
        "InterviewEndDate": "2023-05-11 10:41:12",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "BER",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5618",
        "InterviewEndDate": "2023-05-11 10:39:23",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "SXF",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5619",
        "InterviewEndDate": "2023-05-11 11:10:39",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "HAM",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5620",
        "InterviewEndDate": "2023-05-11 10:50:05",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "HAM",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5621",
        "InterviewEndDate": "2023-05-11 11:19:23",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "AMS",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5622",
        "InterviewEndDate": "2023-05-11 11:11:18",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "HAM",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5623",
        "InterviewEndDate": "2023-05-11 11:23:44",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "AMS",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5625",
        "InterviewEndDate": "2023-05-11 11:34:12",
        "InterviewState": "Complete",
        "Flight": "Tap",
        "Dest": "LIS",
        "AirlineCode": "Tap"
    },
    {
        "InterviewId": "5627",
        "InterviewEndDate": "2023-05-11 11:34:00",
        "InterviewState": "Complete",
        "Flight": "TP - TAP Air Portugal",
        "Dest": "LIS",
        "AirlineCode": "TP"
    },
    {
        "InterviewId": "5628",
        "InterviewEndDate": "2023-05-11 11:33:41",
        "InterviewState": "Complete",
        "Flight": "TP - TAP Air Portugal",
        "Dest": "LIS",
        "AirlineCode": "TP"
    },
    {
        "InterviewId": "5629",
        "InterviewEndDate": "2023-05-11 11:44:35",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "IAD",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5630",
        "InterviewEndDate": "2023-05-11 11:43:49",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "IAD",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5631",
        "InterviewEndDate": "2023-05-11 11:42:36",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "IAD",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5633",
        "InterviewEndDate": "2023-05-11 11:58:48",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5634",
        "InterviewEndDate": "2023-05-11 11:56:10",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "LAX",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5636",
        "InterviewEndDate": "2023-05-12 17:21:12",
        "InterviewState": "Complete",
        "Flight": "TU - Tunisair",
        "Dest": "TUN",
        "AirlineCode": "TU"
    },
    {
        "InterviewId": "5637",
        "InterviewEndDate": "2023-05-12 17:24:04",
        "InterviewState": "Complete",
        "Flight": "TU - Tunisair",
        "Dest": "TUN",
        "AirlineCode": "TU"
    },
    {
        "InterviewId": "5638",
        "InterviewEndDate": "2023-05-12 17:26:50",
        "InterviewState": "Complete",
        "Flight": "TU - Tunisair",
        "Dest": "TUN",
        "AirlineCode": "TU"
    },
    {
        "InterviewId": "5639",
        "InterviewEndDate": "2023-05-12 17:31:18",
        "InterviewState": "Complete",
        "Flight": "C3 - Trade Air",
        "Dest": "PRN",
        "AirlineCode": "C3"
    },
    {
        "InterviewId": "5640",
        "InterviewEndDate": "2023-05-12 17:34:19",
        "InterviewState": "Complete",
        "Flight": "C3 - Trade Air",
        "Dest": "PRN",
        "AirlineCode": "C3"
    },
    {
        "InterviewId": "5641",
        "InterviewEndDate": "2023-05-12 17:37:46",
        "InterviewState": "Complete",
        "Flight": "C3 - Trade Air",
        "Dest": "PRN",
        "AirlineCode": "C3"
    },
    {
        "InterviewId": "5642",
        "InterviewEndDate": "2023-05-12 17:45:05",
        "InterviewState": "Complete",
        "Flight": "Marabu",
        "Dest": "HRG",
        "AirlineCode": "Marabu"
    },
    {
        "InterviewId": "5643",
        "InterviewEndDate": "2023-05-12 18:40:45",
        "InterviewState": "Complete",
        "Flight": "EW - Eurowings",
        "Dest": "CGN",
        "AirlineCode": "EW"
    },
    {
        "InterviewId": "5644",
        "InterviewEndDate": "2023-05-12 18:43:37",
        "InterviewState": "Complete",
        "Flight": "EW - Eurowings",
        "Dest": "CGN",
        "AirlineCode": "EW"
    },
    {
        "InterviewId": "5645",
        "InterviewEndDate": "2023-05-12 18:50:40",
        "InterviewState": "Complete",
        "Flight": "EW - Eurowings",
        "Dest": "CGN",
        "AirlineCode": "EW"
    },
    {
        "InterviewId": "5646",
        "InterviewEndDate": "2023-05-12 18:55:04",
        "InterviewState": "Complete",
        "Flight": "EW - Eurowings",
        "Dest": "CGN",
        "AirlineCode": "EW"
    },
    {
        "InterviewId": "5647",
        "InterviewEndDate": "2023-05-12 19:06:51",
        "InterviewState": "Complete",
        "Flight": "EW - Eurowings",
        "Dest": "CGN",
        "AirlineCode": "EW"
    },
    {
        "InterviewId": "5648",
        "InterviewEndDate": "2023-05-12 19:10:27",
        "InterviewState": "Complete",
        "Flight": "EW - Eurowings",
        "Dest": "CGN",
        "AirlineCode": "EW"
    },
    {
        "InterviewId": "5649",
        "InterviewEndDate": "2023-05-12 19:13:33",
        "InterviewState": "Complete",
        "Flight": "EW - Eurowings",
        "Dest": "CGN",
        "AirlineCode": "EW"
    },
    {
        "InterviewId": "5650",
        "InterviewEndDate": "2023-05-14 07:42:25",
        "InterviewState": "Complete",
        "Flight": "TK - Turkish Airlines",
        "Dest": "IST",
        "AirlineCode": "TK"
    },
    {
        "InterviewId": "5651",
        "InterviewEndDate": "2023-05-14 07:45:02",
        "InterviewState": "Complete",
        "Flight": "TK - Turkish Airlines",
        "Dest": "IST",
        "AirlineCode": "TK"
    },
    {
        "InterviewId": "5652",
        "InterviewEndDate": "2023-05-14 07:48:22",
        "InterviewState": "Complete",
        "Flight": "TK - Turkish Airlines",
        "Dest": "IST",
        "AirlineCode": "TK"
    },
    {
        "InterviewId": "5653",
        "InterviewEndDate": "2023-05-14 07:51:56",
        "InterviewState": "Complete",
        "Flight": "TK - Turkish Airlines",
        "Dest": "IST",
        "AirlineCode": "TK"
    },
    {
        "InterviewId": "5654",
        "InterviewEndDate": "2023-05-14 07:54:53",
        "InterviewState": "Complete",
        "Flight": "TK - Turkish Airlines",
        "Dest": "IST",
        "AirlineCode": "TK"
    },
    {
        "InterviewId": "5655",
        "InterviewEndDate": "2023-05-14 07:57:54",
        "InterviewState": "Complete",
        "Flight": "TK - Turkish Airlines",
        "Dest": "IST",
        "AirlineCode": "TK"
    },
    {
        "InterviewId": "5656",
        "InterviewEndDate": "2023-05-14 08:00:24",
        "InterviewState": "Complete",
        "Flight": "TK - Turkish Airlines",
        "Dest": "IST",
        "AirlineCode": "TK"
    },
    {
        "InterviewId": "5657",
        "InterviewEndDate": "2023-05-14 08:29:59",
        "InterviewState": "Complete",
        "Flight": "",
        "Dest": "AYT",
        "AirlineCode": ""
    },
    {
        "InterviewId": "5658",
        "InterviewEndDate": "2023-05-14 08:33:04",
        "InterviewState": "Complete",
        "Flight": "",
        "Dest": "AYT",
        "AirlineCode": ""
    },
    {
        "InterviewId": "5659",
        "InterviewEndDate": "2023-05-14 08:33:03",
        "InterviewState": "Complete",
        "Flight": "",
        "Dest": "AYT",
        "AirlineCode": ""
    },
    {
        "InterviewId": "5660",
        "InterviewEndDate": "2023-05-14 08:38:32",
        "InterviewState": "Complete",
        "Flight": "",
        "Dest": "AYT",
        "AirlineCode": ""
    },
    {
        "InterviewId": "5661",
        "InterviewEndDate": "2023-05-14 08:38:31",
        "InterviewState": "Complete",
        "Flight": "",
        "Dest": "AYT",
        "AirlineCode": ""
    },
    {
        "InterviewId": "5662",
        "InterviewEndDate": "2023-05-14 08:51:15",
        "InterviewState": "Complete",
        "Flight": "EI - Aer Lingus",
        "Dest": "DUB",
        "AirlineCode": "EI"
    },
    {
        "InterviewId": "5663",
        "InterviewEndDate": "2023-05-14 08:51:27",
        "InterviewState": "Complete",
        "Flight": "EI - Aer Lingus",
        "Dest": "DUB",
        "AirlineCode": "EI"
    },
    {
        "InterviewId": "5664",
        "InterviewEndDate": "2023-05-20 08:01:23",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "CGN",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5665",
        "InterviewEndDate": "2023-05-20 08:09:46",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "BCN",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5666",
        "InterviewEndDate": "2023-05-20 08:08:03",
        "InterviewState": "Complete",
        "Flight": "A3 - Aegean Airlines",
        "Dest": "HER",
        "AirlineCode": "A3"
    },
    {
        "InterviewId": "5667",
        "InterviewEndDate": "2023-05-20 08:10:28",
        "InterviewState": "Complete",
        "Flight": "OU - Croatia Airlines",
        "Dest": "SPU",
        "AirlineCode": "OU"
    },
    {
        "InterviewId": "5668",
        "InterviewEndDate": "2023-05-20 08:12:59",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "MXP",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5669",
        "InterviewEndDate": "2023-05-20 08:32:33",
        "InterviewState": "Complete",
        "Flight": "Lufthansa",
        "Dest": "LIS",
        "AirlineCode": "Lufthansa"
    },
    {
        "InterviewId": "5670",
        "InterviewEndDate": "2023-05-20 08:30:00",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "BIO",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5671",
        "InterviewEndDate": "2023-05-20 08:29:29",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "BIO",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5672",
        "InterviewEndDate": "2023-05-20 08:36:06",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "HAM",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5673",
        "InterviewEndDate": "2023-05-20 08:33:49",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "HAM",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5674",
        "InterviewEndDate": "2023-05-20 08:42:18",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5675",
        "InterviewEndDate": "2023-05-20 08:41:30",
        "InterviewState": "Complete",
        "Flight": "United",
        "Dest": "ORD",
        "AirlineCode": "United"
    },
    {
        "InterviewId": "5676",
        "InterviewEndDate": "2023-05-20 09:47:47",
        "InterviewState": "Complete",
        "Flight": "Air dolomete",
        "Dest": "BLQ",
        "AirlineCode": "Air"
    },
    {
        "InterviewId": "5677",
        "InterviewEndDate": "2023-05-20 09:11:09",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "LHR",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5678",
        "InterviewEndDate": "2023-05-20 08:50:58",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "BOS",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5679",
        "InterviewEndDate": "2023-05-20 08:58:53",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "BRE",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5680",
        "InterviewEndDate": "2023-05-20 09:14:25",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "LHR",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5682",
        "InterviewEndDate": "2023-05-20 09:44:42",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "PMI",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5683",
        "InterviewEndDate": "2023-05-20 09:39:40",
        "InterviewState": "Complete",
        "Flight": "EN - AirDolomiti",
        "Dest": "LIN",
        "AirlineCode": "EN"
    },
    {
        "InterviewId": "5684",
        "InterviewEndDate": "2023-05-20 09:48:20",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "PMI",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5685",
        "InterviewEndDate": "2023-05-20 10:01:03",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "GWT",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5686",
        "InterviewEndDate": "2023-05-20 10:00:46",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "GWT",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5687",
        "InterviewEndDate": "2023-05-20 09:57:30",
        "InterviewState": "Complete",
        "Flight": "Lufthansa",
        "Dest": "GWT",
        "AirlineCode": "Lufthansa"
    },
    {
        "InterviewId": "5688",
        "InterviewEndDate": "2023-05-20 10:01:15",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "GWT",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5689",
        "InterviewEndDate": "2023-05-20 10:12:13",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "DUS",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5691",
        "InterviewEndDate": "2023-05-20 10:11:08",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "DUS",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5692",
        "InterviewEndDate": "2023-05-20 10:23:18",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "BER",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5693",
        "InterviewEndDate": "2023-05-20 10:57:19",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "IAD",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5695",
        "InterviewEndDate": "2023-05-20 10:22:40",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "BER",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5696",
        "InterviewEndDate": "2023-05-20 10:57:42",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "IAD",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5697",
        "InterviewEndDate": "2023-05-20 10:34:05",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "LHR",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5698",
        "InterviewEndDate": "2023-05-20 11:00:00",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "IAD",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5700",
        "InterviewEndDate": "2023-05-20 11:07:09",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "IAD",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5701",
        "InterviewEndDate": "2023-05-20 11:09:35",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "IAD",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5702",
        "InterviewEndDate": "2023-05-20 11:15:03",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "CUN",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5704",
        "InterviewEndDate": "2023-05-20 11:31:01",
        "InterviewState": "Complete",
        "Flight": "Lufthansa",
        "Dest": "FCO",
        "AirlineCode": "Lufthansa"
    },
    {
        "InterviewId": "5705",
        "InterviewEndDate": "2023-05-20 11:42:51",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "IAD",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5706",
        "InterviewEndDate": "2023-05-22 18:56:10",
        "InterviewState": "Complete",
        "Flight": "Ek",
        "Dest": "DXB",
        "AirlineCode": "Ek"
    },
    {
        "InterviewId": "5707",
        "InterviewEndDate": "2023-05-22 18:58:12",
        "InterviewState": "Complete",
        "Flight": "EK - Emirates",
        "Dest": "DXB",
        "AirlineCode": "EK"
    },
    {
        "InterviewId": "5708",
        "InterviewEndDate": "2023-05-22 19:00:55",
        "InterviewState": "Complete",
        "Flight": "EK - Emirates",
        "Dest": "DXB",
        "AirlineCode": "EK"
    },
    {
        "InterviewId": "5709",
        "InterviewEndDate": "2023-05-22 19:06:39",
        "InterviewState": "Complete",
        "Flight": "EI - Aer Lingus",
        "Dest": "DUB",
        "AirlineCode": "EI"
    },
    {
        "InterviewId": "5710",
        "InterviewEndDate": "2023-05-22 19:12:00",
        "InterviewState": "Complete",
        "Flight": "EI - Aer Lingus",
        "Dest": "DUB",
        "AirlineCode": "EI"
    },
    {
        "InterviewId": "5711",
        "InterviewEndDate": "2023-05-22 19:18:00",
        "InterviewState": "Complete",
        "Flight": "EK - Emirates",
        "Dest": "DXB",
        "AirlineCode": "EK"
    },
    {
        "InterviewId": "5712",
        "InterviewEndDate": "2023-05-22 19:25:55",
        "InterviewState": "Complete",
        "Flight": "EI - Aer Lingus",
        "Dest": "DUB",
        "AirlineCode": "EI"
    },
    {
        "InterviewId": "5713",
        "InterviewEndDate": "2023-05-23 15:31:02",
        "InterviewState": "Complete",
        "Flight": "AF - Air France",
        "Dest": "CDG",
        "AirlineCode": "AF"
    },
    {
        "InterviewId": "5714",
        "InterviewEndDate": "2023-05-23 15:31:25",
        "InterviewState": "Complete",
        "Flight": "AF - Air France",
        "Dest": "CDG",
        "AirlineCode": "AF"
    },
    {
        "InterviewId": "5715",
        "InterviewEndDate": "2023-05-23 15:42:56",
        "InterviewState": "Complete",
        "Flight": "EW - Eurowings",
        "Dest": "PMI",
        "AirlineCode": "EW"
    },
    {
        "InterviewId": "5716",
        "InterviewEndDate": "2023-05-23 15:47:35",
        "InterviewState": "Complete",
        "Flight": "EW - Eurowings",
        "Dest": "PMI",
        "AirlineCode": "EW"
    },
    {
        "InterviewId": "5717",
        "InterviewEndDate": "2023-05-23 16:00:39",
        "InterviewState": "Complete",
        "Flight": "EW - Eurowings",
        "Dest": "PMI",
        "AirlineCode": "EW"
    },
    {
        "InterviewId": "5718",
        "InterviewEndDate": "2023-05-23 16:00:30",
        "InterviewState": "Complete",
        "Flight": "EW - Eurowings",
        "Dest": "PMI",
        "AirlineCode": "EW"
    },
    {
        "InterviewId": "5719",
        "InterviewEndDate": "2023-05-23 16:22:15",
        "InterviewState": "Complete",
        "Flight": "AY - Finnair",
        "Dest": "HEL",
        "AirlineCode": "AY"
    },
    {
        "InterviewId": "5720",
        "InterviewEndDate": "2023-05-23 16:22:04",
        "InterviewState": "Complete",
        "Flight": "AY - Finnair",
        "Dest": "HEL",
        "AirlineCode": "AY"
    },
    {
        "InterviewId": "5721",
        "InterviewEndDate": "2023-05-23 16:40:15",
        "InterviewState": "Complete",
        "Flight": "UX - Air Europa",
        "Dest": "MAD",
        "AirlineCode": "UX"
    },
    {
        "InterviewId": "5722",
        "InterviewEndDate": "2023-05-23 16:40:12",
        "InterviewState": "Complete",
        "Flight": "UX - Air Europa",
        "Dest": "MAD",
        "AirlineCode": "UX"
    },
    {
        "InterviewId": "5723",
        "InterviewEndDate": "2023-05-23 16:50:58",
        "InterviewState": "Complete",
        "Flight": "UX - Air Europa",
        "Dest": "MAD",
        "AirlineCode": "UX"
    },
    {
        "InterviewId": "5724",
        "InterviewEndDate": "2023-05-23 16:51:00",
        "InterviewState": "Complete",
        "Flight": "UX - Air Europa",
        "Dest": "MAD",
        "AirlineCode": "UX"
    },
    {
        "InterviewId": "5725",
        "InterviewEndDate": "2023-05-23 17:49:46",
        "InterviewState": "Complete",
        "Flight": "IB - Iberia",
        "Dest": "MAD",
        "AirlineCode": "IB"
    },
    {
        "InterviewId": "5726",
        "InterviewEndDate": "2023-05-23 17:49:44",
        "InterviewState": "Complete",
        "Flight": "IB - Iberia",
        "Dest": "MAD",
        "AirlineCode": "IB"
    },
    {
        "InterviewId": "5727",
        "InterviewEndDate": "2023-05-23 17:57:48",
        "InterviewState": "Complete",
        "Flight": "IB - Iberia",
        "Dest": "MAD",
        "AirlineCode": "IB"
    },
    {
        "InterviewId": "5728",
        "InterviewEndDate": "2023-05-23 18:02:36",
        "InterviewState": "Complete",
        "Flight": "EW - Eurowings",
        "Dest": "DUS",
        "AirlineCode": "EW"
    },
    {
        "InterviewId": "5729",
        "InterviewEndDate": "2023-05-23 18:02:07",
        "InterviewState": "Complete",
        "Flight": "EW - Eurowings",
        "Dest": "DUS",
        "AirlineCode": "EW"
    },
    {
        "InterviewId": "5730",
        "InterviewEndDate": "2023-05-23 18:12:10",
        "InterviewState": "Complete",
        "Flight": "EW - Eurowings",
        "Dest": "DUS",
        "AirlineCode": "EW"
    },
    {
        "InterviewId": "5731",
        "InterviewEndDate": "2023-05-31 17:20:49",
        "InterviewState": "Complete",
        "Flight": "TK - Turkish Airlines",
        "Dest": "IST",
        "AirlineCode": "TK"
    },
    {
        "InterviewId": "5732",
        "InterviewEndDate": "2023-05-31 17:20:22",
        "InterviewState": "Complete",
        "Flight": "TK - Turkish Airlines",
        "Dest": "IST",
        "AirlineCode": "TK"
    },
    {
        "InterviewId": "5733",
        "InterviewEndDate": "2023-05-31 17:47:44",
        "InterviewState": "Complete",
        "Flight": "IB - Iberia",
        "Dest": "MAD",
        "AirlineCode": "IB"
    },
    {
        "InterviewId": "5734",
        "InterviewEndDate": "2023-05-31 17:47:38",
        "InterviewState": "Complete",
        "Flight": "IB - Iberia",
        "Dest": "MAD",
        "AirlineCode": "IB"
    },
    {
        "InterviewId": "5735",
        "InterviewEndDate": "2023-05-31 17:53:13",
        "InterviewState": "Complete",
        "Flight": "IB - Iberia",
        "Dest": "MAD",
        "AirlineCode": "IB"
    },
    {
        "InterviewId": "5736",
        "InterviewEndDate": "2023-05-31 18:05:50",
        "InterviewState": "Complete",
        "Flight": "AF - Air France",
        "Dest": "CDG",
        "AirlineCode": "AF"
    },
    {
        "InterviewId": "5737",
        "InterviewEndDate": "2023-05-31 18:05:56",
        "InterviewState": "Complete",
        "Flight": "AF - Air France",
        "Dest": "CDG",
        "AirlineCode": "AF"
    },
    {
        "InterviewId": "5738",
        "InterviewEndDate": "2023-05-31 18:12:05",
        "InterviewState": "Complete",
        "Flight": "AF - Air France",
        "Dest": "CDG",
        "AirlineCode": "AF"
    },
    {
        "InterviewId": "5741",
        "InterviewEndDate": "2023-06-02 16:57:12",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "SPU",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5742",
        "InterviewEndDate": "2023-06-02 16:40:34",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "KRK",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5744",
        "InterviewEndDate": "2023-06-02 17:18:09",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "KIV",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5745",
        "InterviewEndDate": "2023-06-04 07:48:40",
        "InterviewState": "Complete",
        "Flight": "UA - United Airlines",
        "Dest": "EWR",
        "AirlineCode": "UA"
    },
    {
        "InterviewId": "5746",
        "InterviewEndDate": "2023-06-04 08:21:37",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5747",
        "InterviewEndDate": "2023-06-04 08:56:06",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "BIO",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5748",
        "InterviewEndDate": "2023-06-04 09:23:40",
        "InterviewState": "Complete",
        "Flight": "TK - Turkish Airlines",
        "Dest": "IST",
        "AirlineCode": "TK"
    },
    {
        "InterviewId": "5749",
        "InterviewEndDate": "2023-06-04 10:07:12",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "HAM",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5750",
        "InterviewEndDate": "2023-06-04 11:06:48",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "BER",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5751",
        "InterviewEndDate": "2023-06-04 11:36:15",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "AMS",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5753",
        "InterviewEndDate": "2023-06-13 14:36:31",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "LHR",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5756",
        "InterviewEndDate": "2023-06-13 16:12:51",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "MAD",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5757",
        "InterviewEndDate": "2023-06-13 16:21:53",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "SFO",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5759",
        "InterviewEndDate": "2023-06-13 16:28:52",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "CGN",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5761",
        "InterviewEndDate": "2023-06-13 16:37:05",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "DUS",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5762",
        "InterviewEndDate": "2023-06-13 16:50:42",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "HAJ",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5763",
        "InterviewEndDate": "2023-06-13 16:52:43",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "SPU",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5764",
        "InterviewEndDate": "2023-06-13 17:12:56",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "WAW",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5765",
        "InterviewEndDate": "2023-06-13 17:05:00",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "DBV",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5766",
        "InterviewEndDate": "2023-06-13 17:11:03",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "ZRH",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5767",
        "InterviewEndDate": "2023-06-13 17:28:54",
        "InterviewState": "Complete",
        "Flight": "SK - SAS-Scandinavian Airlines System",
        "Dest": "CPH",
        "AirlineCode": "SK"
    },
    {
        "InterviewId": "5770",
        "InterviewEndDate": "2023-06-13 17:46:04",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "TRN",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5771",
        "InterviewEndDate": "2023-06-13 17:57:59",
        "InterviewState": "Complete",
        "Flight": "TP - TAP Air Portugal",
        "Dest": "LIS",
        "AirlineCode": "TP"
    },
    {
        "InterviewId": "5772",
        "InterviewEndDate": "2023-06-13 18:04:32",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "IAS",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5773",
        "InterviewEndDate": "2023-06-13 18:33:34",
        "InterviewState": "Complete",
        "Flight": "DE - Condor Flugdienst",
        "Dest": "FRA",
        "AirlineCode": "DE"
    },
    {
        "InterviewId": "5774",
        "InterviewEndDate": "2023-06-13 18:41:52",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5776",
        "InterviewEndDate": "2023-06-14 04:43:26",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "SIN",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5777",
        "InterviewEndDate": "2023-06-14 04:53:36",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "EMPTY",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5778",
        "InterviewEndDate": "2023-06-14 04:44:56",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "SIN",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5779",
        "InterviewEndDate": "2023-06-14 04:51:15",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "BOM",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5780",
        "InterviewEndDate": "2023-06-14 04:53:38",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "BOM",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5781",
        "InterviewEndDate": "2023-06-14 05:01:56",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "CAI",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5782",
        "InterviewEndDate": "2023-06-14 05:03:50",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "CAI",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5783",
        "InterviewEndDate": "2023-06-14 05:05:07",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "EMPTY",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5784",
        "InterviewEndDate": "2023-06-14 05:45:39",
        "InterviewState": "Complete",
        "Flight": "TG - Thai Airways",
        "Dest": "BKK",
        "AirlineCode": "TG"
    },
    {
        "InterviewId": "5785",
        "InterviewEndDate": "2023-06-14 05:17:25",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "CAI",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5786",
        "InterviewEndDate": "2023-06-14 05:16:11",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "CAI",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5787",
        "InterviewEndDate": "2023-06-14 05:26:08",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "CGN",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5788",
        "InterviewEndDate": "2023-06-14 05:23:47",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "BOM",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5789",
        "InterviewEndDate": "2023-06-14 05:35:03",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "CLJ",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5790",
        "InterviewEndDate": "2023-06-14 05:41:18",
        "InterviewState": "Complete",
        "Flight": "TG - Thai Airways",
        "Dest": "BKK",
        "AirlineCode": "TG"
    },
    {
        "InterviewId": "5791",
        "InterviewEndDate": "2023-06-14 05:40:39",
        "InterviewState": "Complete",
        "Flight": "SQ - Singapore Airlines",
        "Dest": "SIN",
        "AirlineCode": "SQ"
    },
    {
        "InterviewId": "5792",
        "InterviewEndDate": "2023-06-14 05:57:59",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "WRO",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5793",
        "InterviewEndDate": "2023-06-14 05:59:59",
        "InterviewState": "Complete",
        "Flight": "TG - Thai Airways",
        "Dest": "BKK",
        "AirlineCode": "TG"
    },
    {
        "InterviewId": "5794",
        "InterviewEndDate": "2023-06-14 05:58:14",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "HAJ",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5795",
        "InterviewEndDate": "2023-06-14 06:16:32",
        "InterviewState": "Complete",
        "Flight": "LG - Luxair",
        "Dest": "LUX",
        "AirlineCode": "LG"
    },
    {
        "InterviewId": "5796",
        "InterviewEndDate": "2023-06-14 06:17:10",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "HEL",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5797",
        "InterviewEndDate": "2023-06-14 06:16:22",
        "InterviewState": "Complete",
        "Flight": "TG - Thai Airways",
        "Dest": "BKK",
        "AirlineCode": "TG"
    },
    {
        "InterviewId": "5798",
        "InterviewEndDate": "2023-06-14 06:24:24",
        "InterviewState": "Complete",
        "Flight": "LG - Luxair",
        "Dest": "LUX",
        "AirlineCode": "LG"
    },
    {
        "InterviewId": "5799",
        "InterviewEndDate": "2023-06-14 06:41:33",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "ARN",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5800",
        "InterviewEndDate": "2023-06-14 06:36:26",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "TLS",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5802",
        "InterviewEndDate": "2023-06-14 06:45:06",
        "InterviewState": "Complete",
        "Flight": "LX - Swiss",
        "Dest": "DXB",
        "AirlineCode": "LX"
    },
    {
        "InterviewId": "5803",
        "InterviewEndDate": "2023-06-14 06:44:41",
        "InterviewState": "Complete",
        "Flight": "LX - Swiss",
        "Dest": "JFK",
        "AirlineCode": "LX"
    },
    {
        "InterviewId": "5804",
        "InterviewEndDate": "2023-06-14 06:50:09",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "BER",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5808",
        "InterviewEndDate": "2023-06-14 16:19:12",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "BCN",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5809",
        "InterviewEndDate": "2023-06-14 19:53:48",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "ORY",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5811",
        "InterviewEndDate": "2023-06-15 14:51:44",
        "InterviewState": "Complete",
        "Flight": "DE - Condor Flugdienst",
        "Dest": "FNC",
        "AirlineCode": "DE"
    },
    {
        "InterviewId": "5812",
        "InterviewEndDate": "2023-06-15 14:54:56",
        "InterviewState": "Complete",
        "Flight": "DE - Condor Flugdienst",
        "Dest": "FNC",
        "AirlineCode": "DE"
    },
    {
        "InterviewId": "5813",
        "InterviewEndDate": "2023-06-15 15:03:46",
        "InterviewState": "Complete",
        "Flight": "DE - Condor Flugdienst",
        "Dest": "FNC",
        "AirlineCode": "DE"
    },
    {
        "InterviewId": "5814",
        "InterviewEndDate": "2023-06-15 15:05:54",
        "InterviewState": "Complete",
        "Flight": "DE - Condor Flugdienst",
        "Dest": "FNC",
        "AirlineCode": "DE"
    },
    {
        "InterviewId": "5815",
        "InterviewEndDate": "2023-06-15 15:30:59",
        "InterviewState": "Complete",
        "Flight": "XQ - Sunexpress",
        "Dest": "EMPTY",
        "AirlineCode": "XQ"
    },
    {
        "InterviewId": "5816",
        "InterviewEndDate": "2023-06-15 15:31:18",
        "InterviewState": "Complete",
        "Flight": "XQ - Sun Express",
        "Dest": "EMPTY",
        "AirlineCode": "XQ"
    },
    {
        "InterviewId": "5817",
        "InterviewEndDate": "2023-06-15 15:42:11",
        "InterviewState": "Complete",
        "Flight": "XQ - Sun Express",
        "Dest": "EMPTY",
        "AirlineCode": "XQ"
    },
    {
        "InterviewId": "5818",
        "InterviewEndDate": "2023-06-15 15:42:02",
        "InterviewState": "Complete",
        "Flight": "XQ - Sun Express",
        "Dest": "EMPTY",
        "AirlineCode": "XQ"
    },
    {
        "InterviewId": "5819",
        "InterviewEndDate": "2023-06-15 15:42:06",
        "InterviewState": "Complete",
        "Flight": "AF - Air France",
        "Dest": "CDG",
        "AirlineCode": "AF"
    },
    {
        "InterviewId": "5820",
        "InterviewEndDate": "2023-06-15 15:49:27",
        "InterviewState": "Complete",
        "Flight": "XQ - Sun Express",
        "Dest": "EMPTY",
        "AirlineCode": "XQ"
    },
    {
        "InterviewId": "5821",
        "InterviewEndDate": "2023-06-15 15:49:17",
        "InterviewState": "Complete",
        "Flight": "XQ - Sun Express",
        "Dest": "EMPTY",
        "AirlineCode": "XQ"
    },
    {
        "InterviewId": "5822",
        "InterviewEndDate": "2023-06-15 15:50:35",
        "InterviewState": "Complete",
        "Flight": "AF - Air France",
        "Dest": "CDG",
        "AirlineCode": "AF"
    },
    {
        "InterviewId": "5823",
        "InterviewEndDate": "2023-06-15 15:54:00",
        "InterviewState": "Complete",
        "Flight": "AF - Air France",
        "Dest": "CDG",
        "AirlineCode": "AF"
    },
    {
        "InterviewId": "5824",
        "InterviewEndDate": "2023-06-15 15:55:35",
        "InterviewState": "Complete",
        "Flight": "UX - Air Europa",
        "Dest": "MAD",
        "AirlineCode": "UX"
    },
    {
        "InterviewId": "5825",
        "InterviewEndDate": "2023-06-15 15:59:13",
        "InterviewState": "Complete",
        "Flight": "AF - Air France",
        "Dest": "CDG",
        "AirlineCode": "AF"
    },
    {
        "InterviewId": "5826",
        "InterviewEndDate": "2023-06-15 16:06:05",
        "InterviewState": "Complete",
        "Flight": "UX - Air Europa",
        "Dest": "MAD",
        "AirlineCode": "UX"
    },
    {
        "InterviewId": "5827",
        "InterviewEndDate": "2023-06-15 16:10:37",
        "InterviewState": "Complete",
        "Flight": "XQ - Sun Express",
        "Dest": "AYT",
        "AirlineCode": "XQ"
    },
    {
        "InterviewId": "5828",
        "InterviewEndDate": "2023-06-15 16:09:17",
        "InterviewState": "Complete",
        "Flight": "UX - Air Europa",
        "Dest": "MAD",
        "AirlineCode": "UX"
    },
    {
        "InterviewId": "5829",
        "InterviewEndDate": "2023-06-15 16:10:34",
        "InterviewState": "Complete",
        "Flight": "XQ - Sun Express",
        "Dest": "AYT",
        "AirlineCode": "XQ"
    },
    {
        "InterviewId": "5830",
        "InterviewEndDate": "2023-06-15 16:20:29",
        "InterviewState": "Complete",
        "Flight": "XQ - Sun Express",
        "Dest": "AYT",
        "AirlineCode": "XQ"
    },
    {
        "InterviewId": "5831",
        "InterviewEndDate": "2023-06-15 16:16:20",
        "InterviewState": "Complete",
        "Flight": "UX - Air Europa",
        "Dest": "MAD",
        "AirlineCode": "UX"
    },
    {
        "InterviewId": "5832",
        "InterviewEndDate": "2023-06-15 16:20:34",
        "InterviewState": "Complete",
        "Flight": "XQ - Sun Express",
        "Dest": "AYT",
        "AirlineCode": "XQ"
    },
    {
        "InterviewId": "5833",
        "InterviewEndDate": "2023-06-15 16:49:04",
        "InterviewState": "Complete",
        "Flight": "XQ - Sun Express",
        "Dest": "AYT",
        "AirlineCode": "XQ"
    },
    {
        "InterviewId": "5834",
        "InterviewEndDate": "2023-06-15 16:49:08",
        "InterviewState": "Complete",
        "Flight": "XQ - Sun Express",
        "Dest": "AYT",
        "AirlineCode": "XQ"
    },
    {
        "InterviewId": "5835",
        "InterviewEndDate": "2023-06-15 17:07:24",
        "InterviewState": "Complete",
        "Flight": "BA - British Airways",
        "Dest": "LHR",
        "AirlineCode": "BA"
    },
    {
        "InterviewId": "5836",
        "InterviewEndDate": "2023-06-15 17:07:01",
        "InterviewState": "Complete",
        "Flight": "BA - British Airways",
        "Dest": "LHR",
        "AirlineCode": "BA"
    },
    {
        "InterviewId": "5837",
        "InterviewEndDate": "2023-06-15 17:15:14",
        "InterviewState": "Complete",
        "Flight": "BA - British Airways",
        "Dest": "LHR",
        "AirlineCode": "BA"
    },
    {
        "InterviewId": "5838",
        "InterviewEndDate": "2023-06-15 17:26:00",
        "InterviewState": "Complete",
        "Flight": "WY - Oman Air",
        "Dest": "MCT",
        "AirlineCode": "WY"
    },
    {
        "InterviewId": "5839",
        "InterviewEndDate": "2023-06-15 17:35:31",
        "InterviewState": "Complete",
        "Flight": "WY - Oman Air",
        "Dest": "MCT",
        "AirlineCode": "WY"
    },
    {
        "InterviewId": "5840",
        "InterviewEndDate": "2023-06-15 17:35:27",
        "InterviewState": "Complete",
        "Flight": "WY - Oman Air",
        "Dest": "MCT",
        "AirlineCode": "WY"
    },
    {
        "InterviewId": "5841",
        "InterviewEndDate": "2023-06-15 18:10:09",
        "InterviewState": "Complete",
        "Flight": "AF - Air France",
        "Dest": "CDG",
        "AirlineCode": "AF"
    },
    {
        "InterviewId": "5842",
        "InterviewEndDate": "2023-06-15 18:10:39",
        "InterviewState": "Complete",
        "Flight": "AF - Air France",
        "Dest": "CDG",
        "AirlineCode": "AF"
    },
    {
        "InterviewId": "5843",
        "InterviewEndDate": "2023-06-17 12:03:35",
        "InterviewState": "Complete",
        "Flight": "AY - Finnair",
        "Dest": "KEF",
        "AirlineCode": "AY"
    },
    {
        "InterviewId": "5844",
        "InterviewEndDate": "2023-06-17 12:20:16",
        "InterviewState": "Complete",
        "Flight": "AY - Finnair",
        "Dest": "KEF",
        "AirlineCode": "AY"
    },
    {
        "InterviewId": "5845",
        "InterviewEndDate": "2023-06-17 12:03:12",
        "InterviewState": "Complete",
        "Flight": "AY - Finnair",
        "Dest": "KEF",
        "AirlineCode": "AY"
    },
    {
        "InterviewId": "5846",
        "InterviewEndDate": "2023-06-17 12:17:27",
        "InterviewState": "Complete",
        "Flight": "AY - Finnair",
        "Dest": "KEF",
        "AirlineCode": "AY"
    },
    {
        "InterviewId": "5847",
        "InterviewEndDate": "2023-06-17 12:18:18",
        "InterviewState": "Complete",
        "Flight": "CX - Cathay Pacific Airways",
        "Dest": "KEF",
        "AirlineCode": "CX"
    },
    {
        "InterviewId": "5848",
        "InterviewEndDate": "2023-06-17 12:22:05",
        "InterviewState": "Complete",
        "Flight": "AY - Finnair",
        "Dest": "KEF",
        "AirlineCode": "AY"
    },
    {
        "InterviewId": "5849",
        "InterviewEndDate": "2023-06-17 12:25:18",
        "InterviewState": "Complete",
        "Flight": "AY - Finnaira",
        "Dest": "KEF",
        "AirlineCode": "AY"
    },
    {
        "InterviewId": "5850",
        "InterviewEndDate": "2023-06-17 12:28:43",
        "InterviewState": "Complete",
        "Flight": "AY - Finnair",
        "Dest": "KEF",
        "AirlineCode": "AY"
    },
    {
        "InterviewId": "5851",
        "InterviewEndDate": "2023-06-17 12:37:09",
        "InterviewState": "Complete",
        "Flight": "AY - Finnair",
        "Dest": "KEF",
        "AirlineCode": "AY"
    },
    {
        "InterviewId": "5852",
        "InterviewEndDate": "2023-06-17 12:43:00",
        "InterviewState": "Complete",
        "Flight": "DE - Condor Flugdienst",
        "Dest": "CHQ",
        "AirlineCode": "DE"
    },
    {
        "InterviewId": "5853",
        "InterviewEndDate": "2023-06-17 12:48:33",
        "InterviewState": "Complete",
        "Flight": "DE - Condor Flugdienst",
        "Dest": "CHQ",
        "AirlineCode": "DE"
    },
    {
        "InterviewId": "5854",
        "InterviewEndDate": "2023-06-17 12:52:22",
        "InterviewState": "Complete",
        "Flight": "DE - Condor Flugdienst",
        "Dest": "CHQ",
        "AirlineCode": "DE"
    },
    {
        "InterviewId": "5856",
        "InterviewEndDate": "2023-06-17 13:07:50",
        "InterviewState": "Complete",
        "Flight": "EW - Eurowings",
        "Dest": "PMI",
        "AirlineCode": "EW"
    },
    {
        "InterviewId": "5857",
        "InterviewEndDate": "2023-06-17 13:08:56",
        "InterviewState": "Complete",
        "Flight": "EW - Eurowings",
        "Dest": "PMI",
        "AirlineCode": "EW"
    },
    {
        "InterviewId": "5858",
        "InterviewEndDate": "2023-06-17 13:21:30",
        "InterviewState": "Complete",
        "Flight": "AF - Air France",
        "Dest": "CDG",
        "AirlineCode": "AF"
    },
    {
        "InterviewId": "5859",
        "InterviewEndDate": "2023-06-17 13:14:55",
        "InterviewState": "Complete",
        "Flight": "AF - Air France",
        "Dest": "CDG",
        "AirlineCode": "AF"
    },
    {
        "InterviewId": "5860",
        "InterviewEndDate": "2023-06-17 14:01:33",
        "InterviewState": "Complete",
        "Flight": "AF - Air France",
        "Dest": "CDG",
        "AirlineCode": "AF"
    },
    {
        "InterviewId": "5861",
        "InterviewEndDate": "2023-06-17 13:41:10",
        "InterviewState": "Complete",
        "Flight": "AF - Air France",
        "Dest": "CDG",
        "AirlineCode": "AF"
    },
    {
        "InterviewId": "5863",
        "InterviewEndDate": "2023-06-21 17:49:19",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "HAM",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5864",
        "InterviewEndDate": "2023-06-21 18:35:58",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5865",
        "InterviewEndDate": "2023-06-21 19:04:36",
        "InterviewState": "Complete",
        "Flight": "BA - British Airways",
        "Dest": "LHR",
        "AirlineCode": "BA"
    },
    {
        "InterviewId": "5866",
        "InterviewEndDate": "2023-06-21 19:32:42",
        "InterviewState": "Complete",
        "Flight": "A3 - Aegean Airlines",
        "Dest": "SKG",
        "AirlineCode": "A3"
    },
    {
        "InterviewId": "5867",
        "InterviewEndDate": "2023-06-21 19:56:59",
        "InterviewState": "Complete",
        "Flight": "EI - Aer Lingus",
        "Dest": "DUB",
        "AirlineCode": "EI"
    },
    {
        "InterviewId": "5868",
        "InterviewEndDate": "2023-06-21 20:01:09",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "MAN",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5869",
        "InterviewEndDate": "2023-06-22 16:22:49",
        "InterviewState": "Complete",
        "Flight": "Air dolomiti",
        "Dest": "OLB",
        "AirlineCode": "Air"
    },
    {
        "InterviewId": "5870",
        "InterviewEndDate": "2023-06-22 16:54:40",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "ATH",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5871",
        "InterviewEndDate": "2023-06-22 17:55:53",
        "InterviewState": "Complete",
        "Flight": "BA - British Airways",
        "Dest": "LHR",
        "AirlineCode": "BA"
    },
    {
        "InterviewId": "5872",
        "InterviewEndDate": "2023-06-22 18:50:27",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "DUS",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5874",
        "InterviewEndDate": "2023-06-23 15:42:56",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "WAW",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5875",
        "InterviewEndDate": "2023-06-23 15:47:31",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "HND",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5876",
        "InterviewEndDate": "2023-06-23 15:46:17",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "HND",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5877",
        "InterviewEndDate": "2023-06-23 16:00:10",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "WAW",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5878",
        "InterviewEndDate": "2023-06-23 15:47:51",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "HND",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5879",
        "InterviewEndDate": "2023-06-23 15:51:29",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "HND",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5882",
        "InterviewEndDate": "2023-06-23 16:00:21",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5883",
        "InterviewEndDate": "2023-06-23 16:04:48",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "MEX",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5884",
        "InterviewEndDate": "2023-06-23 16:02:20",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5885",
        "InterviewEndDate": "2023-06-23 16:13:28",
        "InterviewState": "Complete",
        "Flight": "A3 - Aegean Airlines",
        "Dest": "ATH",
        "AirlineCode": "A3"
    },
    {
        "InterviewId": "5886",
        "InterviewEndDate": "2023-06-23 16:09:57",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "AMS",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5887",
        "InterviewEndDate": "2023-06-23 16:37:40",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "ATH",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5888",
        "InterviewEndDate": "2023-06-23 17:03:22",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "SFO",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5889",
        "InterviewEndDate": "2023-06-23 16:28:58",
        "InterviewState": "Complete",
        "Flight": "TP - TAP Air Portugal",
        "Dest": "LIS",
        "AirlineCode": "TP"
    },
    {
        "InterviewId": "5890",
        "InterviewEndDate": "2023-06-23 16:40:39",
        "InterviewState": "Complete",
        "Flight": "TK - Turkish Airlines",
        "Dest": "IST",
        "AirlineCode": "TK"
    },
    {
        "InterviewId": "5891",
        "InterviewEndDate": "2023-06-23 16:56:30",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "LIS",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5894",
        "InterviewEndDate": "2023-06-23 17:07:28",
        "InterviewState": "Complete",
        "Flight": "A3 - Aegean Airlines",
        "Dest": "ATH",
        "AirlineCode": "A3"
    },
    {
        "InterviewId": "5895",
        "InterviewEndDate": "2023-06-23 17:32:43",
        "InterviewState": "Complete",
        "Flight": "SN - Brussels Airlines",
        "Dest": "BRU",
        "AirlineCode": "SN"
    },
    {
        "InterviewId": "5896",
        "InterviewEndDate": "2023-06-23 17:17:00",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "LIS",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5897",
        "InterviewEndDate": "2023-06-23 17:09:52",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "WAW",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5898",
        "InterviewEndDate": "2023-06-23 17:26:51",
        "InterviewState": "Complete",
        "Flight": "KM - Air Malta",
        "Dest": "MLA",
        "AirlineCode": "KM"
    },
    {
        "InterviewId": "5900",
        "InterviewEndDate": "2023-06-23 17:36:34",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "OLB",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5901",
        "InterviewEndDate": "2023-06-23 17:38:36",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "SIN",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5902",
        "InterviewEndDate": "2023-06-23 17:46:39",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5903",
        "InterviewEndDate": "2023-06-23 19:21:48",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5904",
        "InterviewEndDate": "2023-06-23 17:50:38",
        "InterviewState": "Complete",
        "Flight": "TP - TAP Air Portugal",
        "Dest": "LIS",
        "AirlineCode": "TP"
    },
    {
        "InterviewId": "5905",
        "InterviewEndDate": "2023-06-23 18:05:35",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "STR",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5908",
        "InterviewEndDate": "2023-06-23 19:32:30",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "LIS",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5909",
        "InterviewEndDate": "2023-06-24 08:31:37",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "TLS",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5910",
        "InterviewEndDate": "2023-06-24 08:50:48",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "HAM",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5911",
        "InterviewEndDate": "2023-06-24 09:00:57",
        "InterviewState": "Complete",
        "Flight": "DL - Delta Air Lines",
        "Dest": "ATL",
        "AirlineCode": "DL"
    },
    {
        "InterviewId": "5912",
        "InterviewEndDate": "2023-06-24 09:27:09",
        "InterviewState": "Complete",
        "Flight": "TG - Thai Airways",
        "Dest": "BKK",
        "AirlineCode": "TG"
    },
    {
        "InterviewId": "5913",
        "InterviewEndDate": "2023-06-24 09:43:48",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "LYS",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5914",
        "InterviewEndDate": "2023-06-24 10:28:37",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "PMI",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5915",
        "InterviewEndDate": "2023-06-24 11:36:31",
        "InterviewState": "Complete",
        "Flight": "EN - AirDolomiti",
        "Dest": "BDS",
        "AirlineCode": "EN"
    },
    {
        "InterviewId": "5916",
        "InterviewEndDate": "2023-06-24 12:34:09",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "PRG",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5917",
        "InterviewEndDate": "2023-06-24 13:14:04",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "BER",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5918",
        "InterviewEndDate": "2023-06-24 13:52:30",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "KRK",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5919",
        "InterviewEndDate": "2023-06-25 04:27:39",
        "InterviewState": "Complete",
        "Flight": "XQ - Sun Express",
        "Dest": "ADB",
        "AirlineCode": "XQ"
    },
    {
        "InterviewId": "5921",
        "InterviewEndDate": "2023-06-25 04:30:25",
        "InterviewState": "Complete",
        "Flight": "XQ - Sun Express",
        "Dest": "ADB",
        "AirlineCode": "XQ"
    },
    {
        "InterviewId": "5922",
        "InterviewEndDate": "2023-06-25 04:33:51",
        "InterviewState": "Complete",
        "Flight": "XQ - Sun Express",
        "Dest": "ADB",
        "AirlineCode": "XQ"
    },
    {
        "InterviewId": "5923",
        "InterviewEndDate": "2023-06-25 04:47:11",
        "InterviewState": "Complete",
        "Flight": "AA - American Airlines",
        "Dest": "CLT",
        "AirlineCode": "AA"
    },
    {
        "InterviewId": "5924",
        "InterviewEndDate": "2023-06-25 04:53:53",
        "InterviewState": "Complete",
        "Flight": "AA - American Airlines",
        "Dest": "CLT",
        "AirlineCode": "AA"
    },
    {
        "InterviewId": "5925",
        "InterviewEndDate": "2023-06-25 04:57:11",
        "InterviewState": "Complete",
        "Flight": "AA - American Airlines",
        "Dest": "CLT",
        "AirlineCode": "AA"
    },
    {
        "InterviewId": "5926",
        "InterviewEndDate": "2023-06-25 05:09:25",
        "InterviewState": "Complete",
        "Flight": "AA - American Airlines",
        "Dest": "CLT",
        "AirlineCode": "AA"
    },
    {
        "InterviewId": "5927",
        "InterviewEndDate": "2023-06-25 05:12:50",
        "InterviewState": "Complete",
        "Flight": "AA - American Airlines",
        "Dest": "CLT",
        "AirlineCode": "AA"
    },
    {
        "InterviewId": "5928",
        "InterviewEndDate": "2023-06-25 05:29:38",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "KIX",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5929",
        "InterviewEndDate": "2023-06-25 06:09:11",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "OTP",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5930",
        "InterviewEndDate": "2023-06-25 06:20:05",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "NCE",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5931",
        "InterviewEndDate": "2023-06-25 07:06:29",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "YYZ",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5932",
        "InterviewEndDate": "2023-06-25 07:24:04",
        "InterviewState": "Complete",
        "Flight": "EW - Eurowings",
        "Dest": "PMI",
        "AirlineCode": "EW"
    },
    {
        "InterviewId": "5933",
        "InterviewEndDate": "2023-06-25 07:26:56",
        "InterviewState": "Complete",
        "Flight": "EW - Eurowings",
        "Dest": "PMI",
        "AirlineCode": "EW"
    },
    {
        "InterviewId": "5935",
        "InterviewEndDate": "2023-06-25 07:36:54",
        "InterviewState": "Complete",
        "Flight": "VY - Vueling",
        "Dest": "BCN",
        "AirlineCode": "VY"
    },
    {
        "InterviewId": "5936",
        "InterviewEndDate": "2023-06-25 07:41:03",
        "InterviewState": "Complete",
        "Flight": "UA - United Airlines",
        "Dest": "IAD",
        "AirlineCode": "UA"
    },
    {
        "InterviewId": "5937",
        "InterviewEndDate": "2023-06-25 07:39:48",
        "InterviewState": "Complete",
        "Flight": "VY - Vueling",
        "Dest": "BCN",
        "AirlineCode": "VY"
    },
    {
        "InterviewId": "5938",
        "InterviewEndDate": "2023-06-25 08:01:56",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5939",
        "InterviewEndDate": "2023-06-25 08:01:21",
        "InterviewState": "Complete",
        "Flight": "XQ - Sun Express",
        "Dest": "AYT",
        "AirlineCode": "XQ"
    },
    {
        "InterviewId": "5940",
        "InterviewEndDate": "2023-06-25 08:03:22",
        "InterviewState": "Complete",
        "Flight": "XQ - Sun Express",
        "Dest": "AYT",
        "AirlineCode": "XQ"
    },
    {
        "InterviewId": "5941",
        "InterviewEndDate": "2023-06-25 08:06:23",
        "InterviewState": "Complete",
        "Flight": "XQ - Sun Express",
        "Dest": "AYT",
        "AirlineCode": "XQ"
    },
    {
        "InterviewId": "5942",
        "InterviewEndDate": "2023-06-25 08:30:48",
        "InterviewState": "Complete",
        "Flight": "LO - LOT Polish Airlines",
        "Dest": "WAW",
        "AirlineCode": "LO"
    },
    {
        "InterviewId": "5943",
        "InterviewEndDate": "2023-06-25 08:50:08",
        "InterviewState": "Complete",
        "Flight": "TK - Turkish Airlines",
        "Dest": "IST",
        "AirlineCode": "TK"
    },
    {
        "InterviewId": "5945",
        "InterviewEndDate": "2023-06-25 08:53:49",
        "InterviewState": "Complete",
        "Flight": "TK - Turkish Airlines",
        "Dest": "IST",
        "AirlineCode": "TK"
    },
    {
        "InterviewId": "5946",
        "InterviewEndDate": "2023-06-25 09:01:02",
        "InterviewState": "Complete",
        "Flight": "TK - Turkish Airlines",
        "Dest": "IST",
        "AirlineCode": "TK"
    },
    {
        "InterviewId": "5947",
        "InterviewEndDate": "2023-06-25 09:22:00",
        "InterviewState": "Complete",
        "Flight": "A3 - Aegean Airlines",
        "Dest": "SKG",
        "AirlineCode": "A3"
    },
    {
        "InterviewId": "5948",
        "InterviewEndDate": "2023-06-25 09:47:31",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "DEN",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5949",
        "InterviewEndDate": "2023-06-25 10:28:01",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "CPH",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5950",
        "InterviewEndDate": "2023-06-25 10:53:53",
        "InterviewState": "Complete",
        "Flight": "AY - Finnair",
        "Dest": "HEL",
        "AirlineCode": "AY"
    },
    {
        "InterviewId": "5952",
        "InterviewEndDate": "2023-06-26 11:31:59",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FCO",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5953",
        "InterviewEndDate": "2023-06-26 11:34:01",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "IAD",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5954",
        "InterviewEndDate": "2023-06-26 11:46:58",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "GIG",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5955",
        "InterviewEndDate": "2023-06-26 11:54:17",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "GRU",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5956",
        "InterviewEndDate": "2023-06-26 12:05:36",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "DUS",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5957",
        "InterviewEndDate": "2023-06-26 12:17:56",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "TOS",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5958",
        "InterviewEndDate": "2023-06-26 12:22:40",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "AMS",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5959",
        "InterviewEndDate": "2023-06-26 12:40:00",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "BGY",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5960",
        "InterviewEndDate": "2023-06-26 12:44:49",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "MXP",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5961",
        "InterviewEndDate": "2023-06-26 12:55:37",
        "InterviewState": "Complete",
        "Flight": "SN - Brussels Airlines",
        "Dest": "OSL",
        "AirlineCode": "SN"
    },
    {
        "InterviewId": "5962",
        "InterviewEndDate": "2023-06-26 13:05:44",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "ZAG",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5963",
        "InterviewEndDate": "2023-06-26 13:15:09",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FCO",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5964",
        "InterviewEndDate": "2023-06-26 13:22:49",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "KRK",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5966",
        "InterviewEndDate": "2023-06-26 13:27:50",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "KRK",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5967",
        "InterviewEndDate": "2023-06-26 13:41:03",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "WAW",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5968",
        "InterviewEndDate": "2023-06-26 13:56:21",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "MLA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5969",
        "InterviewEndDate": "2023-06-26 14:01:11",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "BCN",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5970",
        "InterviewEndDate": "2023-06-26 14:03:59",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "MRS",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5971",
        "InterviewEndDate": "2023-06-26 14:04:17",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "MRS",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5972",
        "InterviewEndDate": "2023-06-26 14:12:37",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "GVA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5973",
        "InterviewEndDate": "2023-06-26 14:12:44",
        "InterviewState": "Complete",
        "Flight": "EN - AirDolomiti",
        "Dest": "GVA",
        "AirlineCode": "EN"
    },
    {
        "InterviewId": "5975",
        "InterviewEndDate": "2023-06-26 14:19:28",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "GVA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5976",
        "InterviewEndDate": "2023-06-26 14:35:32",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "CDG",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5979",
        "InterviewEndDate": "2023-06-29 18:12:53",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "CDG",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5980",
        "InterviewEndDate": "2023-06-29 18:16:00",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "CDG",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5981",
        "InterviewEndDate": "2023-06-29 18:13:38",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "CDG",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5982",
        "InterviewEndDate": "2023-06-29 18:17:39",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "DBV",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5983",
        "InterviewEndDate": "2023-06-29 19:17:15",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "IBZ",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5984",
        "InterviewEndDate": "2023-06-29 18:28:11",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "CDG",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5985",
        "InterviewEndDate": "2023-06-29 18:39:15",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "BRI",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5986",
        "InterviewEndDate": "2023-06-29 18:23:17",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "GVA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5987",
        "InterviewEndDate": "2023-06-29 18:35:21",
        "InterviewState": "Complete",
        "Flight": "Air soll!iti",
        "Dest": "BRI",
        "AirlineCode": "Air"
    },
    {
        "InterviewId": "5988",
        "InterviewEndDate": "2023-06-29 18:37:57",
        "InterviewState": "Complete",
        "Flight": "EN - AirDolomiti",
        "Dest": "BRI",
        "AirlineCode": "EN"
    },
    {
        "InterviewId": "5989",
        "InterviewEndDate": "2023-06-29 18:54:55",
        "InterviewState": "Complete",
        "Flight": "BT - Air Baltic",
        "Dest": "ZRH",
        "AirlineCode": "BT"
    },
    {
        "InterviewId": "5990",
        "InterviewEndDate": "2023-06-29 18:45:03",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "PMI",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5991",
        "InterviewEndDate": "2023-06-29 19:02:46",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "TLV",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5992",
        "InterviewEndDate": "2023-06-29 19:02:10",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "TLV",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5993",
        "InterviewEndDate": "2023-06-29 19:03:34",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "TLV",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5995",
        "InterviewEndDate": "2023-06-29 19:08:46",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "BCN",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5996",
        "InterviewEndDate": "2023-06-29 19:16:43",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "IBZ",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "5998",
        "InterviewEndDate": "2023-06-29 19:17:11",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "IBZ",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6001",
        "InterviewEndDate": "2023-06-29 19:34:04",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "HAM",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6002",
        "InterviewEndDate": "2023-06-29 19:25:01",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "CTA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6003",
        "InterviewEndDate": "2023-06-29 19:30:37",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "HAM",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6004",
        "InterviewEndDate": "2023-06-29 19:31:58",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "HAM",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6009",
        "InterviewEndDate": "2023-06-30 12:12:27",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "OSL",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6010",
        "InterviewEndDate": "2023-06-30 12:12:52",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "HAM",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6011",
        "InterviewEndDate": "2023-06-30 12:13:53",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "HAM",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6012",
        "InterviewEndDate": "2023-06-30 12:27:00",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "DUS",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6013",
        "InterviewEndDate": "2023-06-30 12:21:51",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "DUS",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6014",
        "InterviewEndDate": "2023-06-30 12:23:27",
        "InterviewState": "Complete",
        "Flight": "Lufthansa",
        "Dest": "DUS",
        "AirlineCode": "Lufthansa"
    },
    {
        "InterviewId": "6015",
        "InterviewEndDate": "2023-06-30 12:28:38",
        "InterviewState": "Complete",
        "Flight": "Lufthana",
        "Dest": "DUS",
        "AirlineCode": "Lufthana"
    },
    {
        "InterviewId": "6016",
        "InterviewEndDate": "2023-06-30 12:31:54",
        "InterviewState": "Complete",
        "Flight": "0B - Blue Air",
        "Dest": "DUS",
        "AirlineCode": "0B"
    },
    {
        "InterviewId": "6017",
        "InterviewEndDate": "2023-06-30 12:36:45",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "SKG",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6018",
        "InterviewEndDate": "2023-06-30 12:36:28",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "SKG",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6020",
        "InterviewEndDate": "2023-06-30 12:47:31",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "POZ",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6021",
        "InterviewEndDate": "2023-06-30 12:46:11",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "POZ",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6022",
        "InterviewEndDate": "2023-06-30 12:45:31",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "KRK",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6023",
        "InterviewEndDate": "2023-06-30 13:07:55",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6025",
        "InterviewEndDate": "2023-06-30 12:56:24",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "TLL",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6026",
        "InterviewEndDate": "2023-06-30 13:05:28",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "AOI",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6027",
        "InterviewEndDate": "2023-06-30 13:06:39",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6028",
        "InterviewEndDate": "2023-07-04 04:48:32",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "SIN",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6029",
        "InterviewEndDate": "2023-07-04 04:48:06",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "DEL",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6031",
        "InterviewEndDate": "2023-07-04 05:13:46",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "CAI",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6032",
        "InterviewEndDate": "2023-07-04 05:10:09",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "CAI",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6033",
        "InterviewEndDate": "2023-07-04 05:07:16",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "KIX",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6034",
        "InterviewEndDate": "2023-07-04 05:25:01",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FMO",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6037",
        "InterviewEndDate": "2023-07-04 05:36:43",
        "InterviewState": "Complete",
        "Flight": "Thai",
        "Dest": "BKK",
        "AirlineCode": "Thai"
    },
    {
        "InterviewId": "6038",
        "InterviewEndDate": "2023-07-04 05:45:38",
        "InterviewState": "Complete",
        "Flight": "TG - Thai Airways",
        "Dest": "BKK",
        "AirlineCode": "TG"
    },
    {
        "InterviewId": "6040",
        "InterviewEndDate": "2023-07-04 05:48:20",
        "InterviewState": "Complete",
        "Flight": "BR - Eva Airways",
        "Dest": "TPE",
        "AirlineCode": "BR"
    },
    {
        "InterviewId": "6041",
        "InterviewEndDate": "2023-07-04 05:52:24",
        "InterviewState": "Complete",
        "Flight": "BR - Eva Airways",
        "Dest": "TPE",
        "AirlineCode": "BR"
    },
    {
        "InterviewId": "6043",
        "InterviewEndDate": "2023-07-04 05:49:33",
        "InterviewState": "Complete",
        "Flight": "BR - Eva Airways",
        "Dest": "TPE",
        "AirlineCode": "BR"
    },
    {
        "InterviewId": "6044",
        "InterviewEndDate": "2023-07-04 06:06:56",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "ORD",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6045",
        "InterviewEndDate": "2023-07-04 05:59:10",
        "InterviewState": "Complete",
        "Flight": "AC - Air Canada",
        "Dest": "YYZ",
        "AirlineCode": "AC"
    },
    {
        "InterviewId": "6049",
        "InterviewEndDate": "2023-07-04 06:19:41",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "HEL",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6050",
        "InterviewEndDate": "2023-07-04 06:16:42",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "CPH",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6051",
        "InterviewEndDate": "2023-07-04 06:20:56",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "CPH",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6052",
        "InterviewEndDate": "2023-07-04 06:27:22",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "HEL",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6055",
        "InterviewEndDate": "2023-07-04 06:36:07",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "KEF",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6056",
        "InterviewEndDate": "2023-07-04 06:47:14",
        "InterviewState": "Complete",
        "Flight": "PC - Pegasus Airlines",
        "Dest": "IST",
        "AirlineCode": "PC"
    },
    {
        "InterviewId": "6057",
        "InterviewEndDate": "2023-07-04 06:45:22",
        "InterviewState": "Complete",
        "Flight": "BR - Eva Airways",
        "Dest": "TPE",
        "AirlineCode": "BR"
    },
    {
        "InterviewId": "6058",
        "InterviewEndDate": "2023-07-04 06:50:26",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "CDG",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6063",
        "InterviewEndDate": "2023-07-11 10:35:14",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "LHR",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6064",
        "InterviewEndDate": "2023-07-11 10:32:51",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "ORY",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6065",
        "InterviewEndDate": "2023-07-11 10:33:08",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "ORY",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6066",
        "InterviewEndDate": "2023-07-11 10:42:21",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "LHR",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6067",
        "InterviewEndDate": "2023-07-11 10:39:45",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "LHR",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6068",
        "InterviewEndDate": "2023-07-11 10:50:40",
        "InterviewState": "Complete",
        "Flight": "TP - TAP Air Portugal",
        "Dest": "LIS",
        "AirlineCode": "TP"
    },
    {
        "InterviewId": "6069",
        "InterviewEndDate": "2023-07-11 10:52:45",
        "InterviewState": "Complete",
        "Flight": "FI - Icelandair",
        "Dest": "KEF",
        "AirlineCode": "FI"
    },
    {
        "InterviewId": "6070",
        "InterviewEndDate": "2023-07-11 11:05:36",
        "InterviewState": "Complete",
        "Flight": "TP - TAP Air Portugal",
        "Dest": "MIA",
        "AirlineCode": "TP"
    },
    {
        "InterviewId": "6071",
        "InterviewEndDate": "2023-07-11 11:03:38",
        "InterviewState": "Complete",
        "Flight": "TP - TAP Air Portugal",
        "Dest": "LIS",
        "AirlineCode": "TP"
    },
    {
        "InterviewId": "6072",
        "InterviewEndDate": "2023-07-11 11:00:07",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "HAM",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6073",
        "InterviewEndDate": "2023-07-11 11:19:32",
        "InterviewState": "Complete",
        "Flight": "0B - Blue Air",
        "Dest": "IAD",
        "AirlineCode": "0B"
    },
    {
        "InterviewId": "6074",
        "InterviewEndDate": "2023-07-11 11:17:08",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "EMPTY",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6076",
        "InterviewEndDate": "2023-07-11 11:35:59",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "ORD",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6077",
        "InterviewEndDate": "2023-07-11 11:32:22",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "EWR",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6078",
        "InterviewEndDate": "2023-07-11 11:34:41",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "LAX",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6079",
        "InterviewEndDate": "2023-07-11 11:42:04",
        "InterviewState": "Complete",
        "Flight": "Lufthansa",
        "Dest": "ORD",
        "AirlineCode": "Lufthansa"
    },
    {
        "InterviewId": "6081",
        "InterviewEndDate": "2023-07-11 11:52:20",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "YVR",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6082",
        "InterviewEndDate": "2023-07-11 11:53:10",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "YVR",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6083",
        "InterviewEndDate": "2023-07-11 12:01:53",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "DUS",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6084",
        "InterviewEndDate": "2023-07-11 12:02:05",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "DUS",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6085",
        "InterviewEndDate": "2023-07-12 13:04:02",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "LYS",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6086",
        "InterviewEndDate": "2023-07-12 13:02:14",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "BCN",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6087",
        "InterviewEndDate": "2023-07-12 12:58:28",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "BCN",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6088",
        "InterviewEndDate": "2023-07-12 13:07:47",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "BCN",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6089",
        "InterviewEndDate": "2023-07-12 13:13:53",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "YYZ",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6090",
        "InterviewEndDate": "2023-07-12 13:27:59",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "LYS",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6091",
        "InterviewEndDate": "2023-07-12 13:18:06",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "LYS",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6092",
        "InterviewEndDate": "2023-07-12 13:22:43",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "AOI",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6093",
        "InterviewEndDate": "2023-07-12 13:29:26",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "BUD",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6094",
        "InterviewEndDate": "2023-07-12 13:36:23",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "BUD",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6095",
        "InterviewEndDate": "2023-07-12 13:48:57",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FCO",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6096",
        "InterviewEndDate": "2023-07-12 13:37:58",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "VIE",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6097",
        "InterviewEndDate": "2023-07-12 13:53:21",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FCO",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6098",
        "InterviewEndDate": "2023-07-12 14:01:19",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FCO",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6099",
        "InterviewEndDate": "2023-07-12 13:55:24",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FCO",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6100",
        "InterviewEndDate": "2023-07-12 14:10:54",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FCO",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6101",
        "InterviewEndDate": "2023-07-12 14:08:11",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FCO",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6102",
        "InterviewEndDate": "2023-07-12 14:12:18",
        "InterviewState": "Complete",
        "Flight": "SN - Brussels Airlines",
        "Dest": "BRU",
        "AirlineCode": "SN"
    },
    {
        "InterviewId": "6103",
        "InterviewEndDate": "2023-07-12 14:25:04",
        "InterviewState": "Complete",
        "Flight": "EN - AirDolomiti",
        "Dest": "GVA",
        "AirlineCode": "EN"
    },
    {
        "InterviewId": "6104",
        "InterviewEndDate": "2023-07-12 14:34:53",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "OPO",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6105",
        "InterviewEndDate": "2023-07-12 15:04:21",
        "InterviewState": "Complete",
        "Flight": "BA - British Airways",
        "Dest": "LHR",
        "AirlineCode": "BA"
    },
    {
        "InterviewId": "6106",
        "InterviewEndDate": "2023-07-12 15:10:10",
        "InterviewState": "Complete",
        "Flight": "BA - British Airways",
        "Dest": "LHR",
        "AirlineCode": "BA"
    },
    {
        "InterviewId": "6107",
        "InterviewEndDate": "2023-07-12 15:13:30",
        "InterviewState": "Complete",
        "Flight": "BA - British Airways",
        "Dest": "LHR",
        "AirlineCode": "BA"
    },
    {
        "InterviewId": "6108",
        "InterviewEndDate": "2023-07-12 17:45:37",
        "InterviewState": "Complete",
        "Flight": "XQ - Sunexpress",
        "Dest": "AYT",
        "AirlineCode": "XQ"
    },
    {
        "InterviewId": "6109",
        "InterviewEndDate": "2023-07-12 17:48:17",
        "InterviewState": "Complete",
        "Flight": "XQ - Sun Express",
        "Dest": "AYT",
        "AirlineCode": "XQ"
    },
    {
        "InterviewId": "6110",
        "InterviewEndDate": "2023-07-12 17:50:36",
        "InterviewState": "Complete",
        "Flight": "XQ - Sun Express",
        "Dest": "AYT",
        "AirlineCode": "XQ"
    },
    {
        "InterviewId": "6111",
        "InterviewEndDate": "2023-07-12 18:05:43",
        "InterviewState": "Complete",
        "Flight": "XQ - Sun Express",
        "Dest": "AYT",
        "AirlineCode": "XQ"
    },
    {
        "InterviewId": "6112",
        "InterviewEndDate": "2023-07-12 18:08:59",
        "InterviewState": "Complete",
        "Flight": "XQ - Sun Express",
        "Dest": "AYT",
        "AirlineCode": "XQ"
    },
    {
        "InterviewId": "6113",
        "InterviewEndDate": "2023-07-12 18:14:58",
        "InterviewState": "Complete",
        "Flight": "TU - Tunisair",
        "Dest": "TUN",
        "AirlineCode": "TU"
    },
    {
        "InterviewId": "6114",
        "InterviewEndDate": "2023-07-13 17:21:30",
        "InterviewState": "Complete",
        "Flight": "TU - Tunisair",
        "Dest": "TUN",
        "AirlineCode": "TU"
    },
    {
        "InterviewId": "6115",
        "InterviewEndDate": "2023-07-12 18:49:16",
        "InterviewState": "Complete",
        "Flight": "TU - Tunisair",
        "Dest": "TUN",
        "AirlineCode": "TU"
    },
    {
        "InterviewId": "6116",
        "InterviewEndDate": "2023-07-12 18:54:30",
        "InterviewState": "Complete",
        "Flight": "BA - British Airways",
        "Dest": "LHR",
        "AirlineCode": "BA"
    },
    {
        "InterviewId": "6117",
        "InterviewEndDate": "2023-07-12 19:02:44",
        "InterviewState": "Complete",
        "Flight": "BA - British Airways",
        "Dest": "LHR",
        "AirlineCode": "BA"
    },
    {
        "InterviewId": "6118",
        "InterviewEndDate": "2023-07-13 14:59:27",
        "InterviewState": "Complete",
        "Flight": "BA - British Airways",
        "Dest": "LHR",
        "AirlineCode": "BA"
    },
    {
        "InterviewId": "6119",
        "InterviewEndDate": "2023-07-13 15:53:16",
        "InterviewState": "Complete",
        "Flight": "XQ - Sun Express",
        "Dest": "BJV",
        "AirlineCode": "XQ"
    },
    {
        "InterviewId": "6120",
        "InterviewEndDate": "2023-07-13 15:56:05",
        "InterviewState": "Complete",
        "Flight": "XQ - Sun Express",
        "Dest": "BJV",
        "AirlineCode": "XQ"
    },
    {
        "InterviewId": "6121",
        "InterviewEndDate": "2023-07-13 16:00:21",
        "InterviewState": "Complete",
        "Flight": "XQ - Sun Express",
        "Dest": "EMPTY",
        "AirlineCode": "XQ"
    },
    {
        "InterviewId": "6122",
        "InterviewEndDate": "2023-07-13 16:36:37",
        "InterviewState": "Complete",
        "Flight": "XQ - Sun Express",
        "Dest": "AYT",
        "AirlineCode": "XQ"
    },
    {
        "InterviewId": "6123",
        "InterviewEndDate": "2023-07-13 16:39:34",
        "InterviewState": "Complete",
        "Flight": "XQ - Sun Express",
        "Dest": "AYT",
        "AirlineCode": "XQ"
    },
    {
        "InterviewId": "6124",
        "InterviewEndDate": "2023-07-13 16:43:13",
        "InterviewState": "Complete",
        "Flight": "XQ - Sun Express",
        "Dest": "AYT",
        "AirlineCode": "XQ"
    },
    {
        "InterviewId": "6125",
        "InterviewEndDate": "2023-07-13 16:46:22",
        "InterviewState": "Complete",
        "Flight": "TK - Turkish Airlines",
        "Dest": "IST",
        "AirlineCode": "TK"
    },
    {
        "InterviewId": "6126",
        "InterviewEndDate": "2023-07-13 16:49:03",
        "InterviewState": "Complete",
        "Flight": "TK - Turkish Airlines",
        "Dest": "IST",
        "AirlineCode": "TK"
    },
    {
        "InterviewId": "6127",
        "InterviewEndDate": "2023-07-13 16:57:31",
        "InterviewState": "Complete",
        "Flight": "TK - Turkish Airlines",
        "Dest": "IST",
        "AirlineCode": "TK"
    },
    {
        "InterviewId": "6128",
        "InterviewEndDate": "2023-07-13 17:06:50",
        "InterviewState": "Complete",
        "Flight": "WY - Oman Air",
        "Dest": "MCT",
        "AirlineCode": "WY"
    },
    {
        "InterviewId": "6129",
        "InterviewEndDate": "2023-07-13 17:10:03",
        "InterviewState": "Complete",
        "Flight": "WY - Oman Air",
        "Dest": "MCT",
        "AirlineCode": "WY"
    },
    {
        "InterviewId": "6130",
        "InterviewEndDate": "2023-07-13 17:13:30",
        "InterviewState": "Complete",
        "Flight": "WY - Oman Air",
        "Dest": "MCT",
        "AirlineCode": "WY"
    },
    {
        "InterviewId": "6131",
        "InterviewEndDate": "2023-07-13 17:23:37",
        "InterviewState": "Complete",
        "Flight": "TK - Turkish Airlines",
        "Dest": "AYT",
        "AirlineCode": "TK"
    },
    {
        "InterviewId": "6132",
        "InterviewEndDate": "2023-07-13 17:35:52",
        "InterviewState": "Complete",
        "Flight": "IV - VG Airlines",
        "Dest": "PRN",
        "AirlineCode": "IV"
    },
    {
        "InterviewId": "6133",
        "InterviewEndDate": "2023-07-13 17:42:26",
        "InterviewState": "Complete",
        "Flight": "IV - VG Airlines",
        "Dest": "PRN",
        "AirlineCode": "IV"
    },
    {
        "InterviewId": "6134",
        "InterviewEndDate": "2023-07-15 13:05:41",
        "InterviewState": "Complete",
        "Flight": "EK - Emirates",
        "Dest": "DXB",
        "AirlineCode": "EK"
    },
    {
        "InterviewId": "6135",
        "InterviewEndDate": "2023-07-15 12:48:36",
        "InterviewState": "Complete",
        "Flight": "EK - Emirates",
        "Dest": "DXB",
        "AirlineCode": "EK"
    },
    {
        "InterviewId": "6136",
        "InterviewEndDate": "2023-07-15 12:36:08",
        "InterviewState": "Complete",
        "Flight": "EK - Emirates",
        "Dest": "DXB",
        "AirlineCode": "EK"
    },
    {
        "InterviewId": "6137",
        "InterviewEndDate": "2023-07-15 13:07:04",
        "InterviewState": "Complete",
        "Flight": "EK - Emirates",
        "Dest": "DXB",
        "AirlineCode": "EK"
    },
    {
        "InterviewId": "6138",
        "InterviewEndDate": "2023-07-15 13:08:02",
        "InterviewState": "Complete",
        "Flight": "EK - Emirates",
        "Dest": "DXB",
        "AirlineCode": "EK"
    },
    {
        "InterviewId": "6139",
        "InterviewEndDate": "2023-07-15 13:21:57",
        "InterviewState": "Complete",
        "Flight": "EK - Emirates",
        "Dest": "DXB",
        "AirlineCode": "EK"
    },
    {
        "InterviewId": "6140",
        "InterviewEndDate": "2023-07-15 13:13:33",
        "InterviewState": "Complete",
        "Flight": "EK - Emirates",
        "Dest": "DXB",
        "AirlineCode": "EK"
    },
    {
        "InterviewId": "6141",
        "InterviewEndDate": "2023-07-15 13:19:54",
        "InterviewState": "Complete",
        "Flight": "EK - Emirates",
        "Dest": "DXB",
        "AirlineCode": "EK"
    },
    {
        "InterviewId": "6142",
        "InterviewEndDate": "2023-07-15 13:23:39",
        "InterviewState": "Complete",
        "Flight": "EK - Emirates",
        "Dest": "DXB",
        "AirlineCode": "EK"
    },
    {
        "InterviewId": "6143",
        "InterviewEndDate": "2023-07-15 13:28:31",
        "InterviewState": "Complete",
        "Flight": "EK - Emirates",
        "Dest": "DXB",
        "AirlineCode": "EK"
    },
    {
        "InterviewId": "6144",
        "InterviewEndDate": "2023-07-15 13:34:32",
        "InterviewState": "Complete",
        "Flight": "EK - Emirates",
        "Dest": "DXB",
        "AirlineCode": "EK"
    },
    {
        "InterviewId": "6145",
        "InterviewEndDate": "2023-07-15 13:43:13",
        "InterviewState": "Complete",
        "Flight": "Ezy",
        "Dest": "EDI",
        "AirlineCode": "Ezy"
    },
    {
        "InterviewId": "6146",
        "InterviewEndDate": "2023-07-15 13:43:57",
        "InterviewState": "Complete",
        "Flight": "EK - Emirates",
        "Dest": "DXB",
        "AirlineCode": "EK"
    },
    {
        "InterviewId": "6149",
        "InterviewEndDate": "2023-07-15 13:48:06",
        "InterviewState": "Complete",
        "Flight": "Ezy",
        "Dest": "EDI",
        "AirlineCode": "Ezy"
    },
    {
        "InterviewId": "6150",
        "InterviewEndDate": "2023-07-15 13:50:59",
        "InterviewState": "Complete",
        "Flight": "Ezy",
        "Dest": "EDI",
        "AirlineCode": "Ezy"
    },
    {
        "InterviewId": "6152",
        "InterviewEndDate": "2023-07-15 14:00:47",
        "InterviewState": "Complete",
        "Flight": "EK - Emirates",
        "Dest": "DXB",
        "AirlineCode": "EK"
    },
    {
        "InterviewId": "6155",
        "InterviewEndDate": "2023-07-15 14:04:45",
        "InterviewState": "Complete",
        "Flight": "GP",
        "Dest": "PRN",
        "AirlineCode": "GP"
    },
    {
        "InterviewId": "6157",
        "InterviewEndDate": "2023-07-17 16:37:54",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "BCN",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6158",
        "InterviewEndDate": "2023-07-17 16:38:22",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "BCN",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6159",
        "InterviewEndDate": "2023-07-17 16:54:19",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "SPU",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6160",
        "InterviewEndDate": "2023-07-17 16:48:03",
        "InterviewState": "Complete",
        "Flight": "Luft",
        "Dest": "SPU",
        "AirlineCode": "Luft"
    },
    {
        "InterviewId": "6161",
        "InterviewEndDate": "2023-07-17 16:53:42",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "SPU",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6162",
        "InterviewEndDate": "2023-07-17 16:59:51",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "SPU",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6163",
        "InterviewEndDate": "2023-07-17 17:32:33",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "LCA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6164",
        "InterviewEndDate": "2023-07-17 17:33:17",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "LCA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6166",
        "InterviewEndDate": "2023-07-17 17:40:18",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "LCA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6167",
        "InterviewEndDate": "2023-07-17 17:42:15",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "LCA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6168",
        "InterviewEndDate": "2023-07-17 17:47:30",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "EMPTY",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6169",
        "InterviewEndDate": "2023-07-17 17:53:09",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6170",
        "InterviewEndDate": "2023-07-17 18:06:06",
        "InterviewState": "Complete",
        "Flight": "Lufthasa",
        "Dest": "PMI",
        "AirlineCode": "Lufthasa"
    },
    {
        "InterviewId": "6171",
        "InterviewEndDate": "2023-07-21 16:48:20",
        "InterviewState": "Complete",
        "Flight": "TK - Turkish Airlines",
        "Dest": "IST",
        "AirlineCode": "TK"
    },
    {
        "InterviewId": "6172",
        "InterviewEndDate": "2023-07-21 16:56:07",
        "InterviewState": "Complete",
        "Flight": "TK - Turkish Airlines",
        "Dest": "IST",
        "AirlineCode": "TK"
    },
    {
        "InterviewId": "6173",
        "InterviewEndDate": "2023-07-21 16:55:54",
        "InterviewState": "Complete",
        "Flight": "TK - Turkish Airlines",
        "Dest": "IST",
        "AirlineCode": "TK"
    },
    {
        "InterviewId": "6174",
        "InterviewEndDate": "2023-07-21 17:07:57",
        "InterviewState": "Complete",
        "Flight": "AZ - Alitalia",
        "Dest": "FCO",
        "AirlineCode": "AZ"
    },
    {
        "InterviewId": "6175",
        "InterviewEndDate": "2023-07-21 17:08:03",
        "InterviewState": "Complete",
        "Flight": "AZ - Alitalia",
        "Dest": "FCO",
        "AirlineCode": "AZ"
    },
    {
        "InterviewId": "6176",
        "InterviewEndDate": "2023-07-21 17:19:03",
        "InterviewState": "Complete",
        "Flight": "Air L\u00fcbeck",
        "Dest": "LBC",
        "AirlineCode": "Air"
    },
    {
        "InterviewId": "6177",
        "InterviewEndDate": "2023-07-21 17:44:29",
        "InterviewState": "Complete",
        "Flight": "EW - Eurowings",
        "Dest": "DUS",
        "AirlineCode": "EW"
    },
    {
        "InterviewId": "6178",
        "InterviewEndDate": "2023-07-21 17:44:31",
        "InterviewState": "Complete",
        "Flight": "EW - Eurowings",
        "Dest": "DUS",
        "AirlineCode": "EW"
    },
    {
        "InterviewId": "6179",
        "InterviewEndDate": "2023-07-21 18:00:29",
        "InterviewState": "Complete",
        "Flight": "EW - Eurowings",
        "Dest": "DUS",
        "AirlineCode": "EW"
    },
    {
        "InterviewId": "6180",
        "InterviewEndDate": "2023-07-21 18:00:34",
        "InterviewState": "Complete",
        "Flight": "EW - Eurowings",
        "Dest": "DUS",
        "AirlineCode": "EW"
    },
    {
        "InterviewId": "6181",
        "InterviewEndDate": "2023-07-24 15:45:16",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "ATH",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6182",
        "InterviewEndDate": "2023-07-24 15:50:17",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "MLA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6183",
        "InterviewEndDate": "2023-07-24 15:45:34",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "ATH",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6185",
        "InterviewEndDate": "2023-07-24 15:54:21",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "ATH",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6186",
        "InterviewEndDate": "2023-07-24 16:19:39",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "BER",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6187",
        "InterviewEndDate": "2023-07-24 16:05:15",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "ATH",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6188",
        "InterviewEndDate": "2023-07-24 16:05:48",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "ATH",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6189",
        "InterviewEndDate": "2023-07-24 16:17:29",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "BER",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6190",
        "InterviewEndDate": "2023-07-24 16:16:34",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "BER",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6191",
        "InterviewEndDate": "2023-07-24 16:30:42",
        "InterviewState": "Complete",
        "Flight": "EN - AirDolomiti",
        "Dest": "OLB",
        "AirlineCode": "EN"
    },
    {
        "InterviewId": "6192",
        "InterviewEndDate": "2023-07-24 16:35:50",
        "InterviewState": "Complete",
        "Flight": "Air Dolomiti",
        "Dest": "OLB",
        "AirlineCode": "Air"
    },
    {
        "InterviewId": "6193",
        "InterviewEndDate": "2023-07-24 16:33:06",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "BER",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6194",
        "InterviewEndDate": "2023-07-24 16:51:11",
        "InterviewState": "Complete",
        "Flight": "OS - Austrian Airlines",
        "Dest": "VAR",
        "AirlineCode": "OS"
    },
    {
        "InterviewId": "6195",
        "InterviewEndDate": "2023-07-24 17:14:42",
        "InterviewState": "Complete",
        "Flight": "SK - SAS-Scandinavian Airlines System",
        "Dest": "CPH",
        "AirlineCode": "SK"
    },
    {
        "InterviewId": "6196",
        "InterviewEndDate": "2023-07-24 16:47:58",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "OLB",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6197",
        "InterviewEndDate": "2023-07-24 17:42:46",
        "InterviewState": "Complete",
        "Flight": "A3 - Aegean Airlines",
        "Dest": "SKG",
        "AirlineCode": "A3"
    },
    {
        "InterviewId": "6198",
        "InterviewEndDate": "2023-07-24 17:01:19",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "CGN",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6199",
        "InterviewEndDate": "2023-07-24 17:14:07",
        "InterviewState": "Complete",
        "Flight": "SK - SAS-Scandinavian Airlines System",
        "Dest": "CPH",
        "AirlineCode": "SK"
    },
    {
        "InterviewId": "6200",
        "InterviewEndDate": "2023-07-24 17:22:42",
        "InterviewState": "Complete",
        "Flight": "BT - AirBaltic",
        "Dest": "RIX",
        "AirlineCode": "BT"
    },
    {
        "InterviewId": "6201",
        "InterviewEndDate": "2023-07-24 17:24:45",
        "InterviewState": "Complete",
        "Flight": "BT - Air Baltic",
        "Dest": "VNO",
        "AirlineCode": "BT"
    },
    {
        "InterviewId": "6202",
        "InterviewEndDate": "2023-07-24 17:36:42",
        "InterviewState": "Complete",
        "Flight": "A3 - Aegean Airlines",
        "Dest": "SKG",
        "AirlineCode": "A3"
    },
    {
        "InterviewId": "6203",
        "InterviewEndDate": "2023-07-24 17:38:56",
        "InterviewState": "Complete",
        "Flight": "A3 - Aegean Airlines",
        "Dest": "SKG",
        "AirlineCode": "A3"
    },
    {
        "InterviewId": "6204",
        "InterviewEndDate": "2023-07-25 05:52:19",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "ORD",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6205",
        "InterviewEndDate": "2023-07-25 05:50:44",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "ORD",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6207",
        "InterviewEndDate": "2023-07-25 05:54:31",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "ORD",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6208",
        "InterviewEndDate": "2023-07-25 05:59:20",
        "InterviewState": "Complete",
        "Flight": "UA - United Airlines",
        "Dest": "IAD",
        "AirlineCode": "UA"
    },
    {
        "InterviewId": "6209",
        "InterviewEndDate": "2023-07-25 05:58:16",
        "InterviewState": "Complete",
        "Flight": "UA - United Airlines",
        "Dest": "IAD",
        "AirlineCode": "UA"
    },
    {
        "InterviewId": "6210",
        "InterviewEndDate": "2023-07-25 05:59:42",
        "InterviewState": "Complete",
        "Flight": "UA - United Airlines",
        "Dest": "IAD",
        "AirlineCode": "UA"
    },
    {
        "InterviewId": "6212",
        "InterviewEndDate": "2023-07-25 06:09:15",
        "InterviewState": "Complete",
        "Flight": "Luftansa",
        "Dest": "ORD",
        "AirlineCode": "Luftansa"
    },
    {
        "InterviewId": "6213",
        "InterviewEndDate": "2023-07-25 06:08:39",
        "InterviewState": "Complete",
        "Flight": "UA - United Airlines",
        "Dest": "IAD",
        "AirlineCode": "UA"
    },
    {
        "InterviewId": "6214",
        "InterviewEndDate": "2023-07-25 06:27:18",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "JFK",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6215",
        "InterviewEndDate": "2023-07-25 06:19:44",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "JFK",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6217",
        "InterviewEndDate": "2023-07-25 06:20:50",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "JFK",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6218",
        "InterviewEndDate": "2023-07-25 06:44:50",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "GOT",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6219",
        "InterviewEndDate": "2023-07-25 06:40:38",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "GOT",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6220",
        "InterviewEndDate": "2023-07-25 06:44:41",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "GOT",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6223",
        "InterviewEndDate": "2023-07-25 06:54:35",
        "InterviewState": "Complete",
        "Flight": "Lufthansa/Air Croaria",
        "Dest": "LHR",
        "AirlineCode": "Lufthansa/Air"
    },
    {
        "InterviewId": "6225",
        "InterviewEndDate": "2023-07-25 10:55:19",
        "InterviewState": "Complete",
        "Flight": "SN - Brussels Airlines",
        "Dest": "EMPTY",
        "AirlineCode": "SN"
    },
    {
        "InterviewId": "6226",
        "InterviewEndDate": "2023-07-25 10:54:36",
        "InterviewState": "Complete",
        "Flight": "SN - Brussels Airlines",
        "Dest": "BRU",
        "AirlineCode": "SN"
    },
    {
        "InterviewId": "6227",
        "InterviewEndDate": "2023-07-25 10:24:31",
        "InterviewState": "Complete",
        "Flight": "Lh100",
        "Dest": "FRA",
        "AirlineCode": "Lh100"
    },
    {
        "InterviewId": "6228",
        "InterviewEndDate": "2023-07-25 10:35:43",
        "InterviewState": "Complete",
        "Flight": "SN - Brussels Airlines",
        "Dest": "BRU",
        "AirlineCode": "SN"
    },
    {
        "InterviewId": "6229",
        "InterviewEndDate": "2023-07-25 10:48:01",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "BRU",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6230",
        "InterviewEndDate": "2023-07-25 11:16:41",
        "InterviewState": "Complete",
        "Flight": "TP - TAP Air Portugal",
        "Dest": "LIS",
        "AirlineCode": "TP"
    },
    {
        "InterviewId": "6231",
        "InterviewEndDate": "2023-07-25 11:09:58",
        "InterviewState": "Complete",
        "Flight": "TP - TAP Air Portugal",
        "Dest": "LIS",
        "AirlineCode": "TP"
    },
    {
        "InterviewId": "6232",
        "InterviewEndDate": "2023-07-25 11:54:43",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "YVR",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6233",
        "InterviewEndDate": "2023-07-25 11:38:10",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FCO",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6234",
        "InterviewEndDate": "2023-07-25 11:25:59",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "LHR",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6235",
        "InterviewEndDate": "2023-07-25 11:33:51",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FCO",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6237",
        "InterviewEndDate": "2023-07-25 11:50:23",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "YVR",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6240",
        "InterviewEndDate": "2023-07-27 11:27:04",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "HAM",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6242",
        "InterviewEndDate": "2023-07-27 12:16:10",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "HAM",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6243",
        "InterviewEndDate": "2023-07-27 12:20:40",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "HAM",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6244",
        "InterviewEndDate": "2023-07-27 13:01:02",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6245",
        "InterviewEndDate": "2023-07-27 13:05:30",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6246",
        "InterviewEndDate": "2023-07-27 13:09:54",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6248",
        "InterviewEndDate": "2023-07-27 16:40:10",
        "InterviewState": "Complete",
        "Flight": "AY - Finnair",
        "Dest": "HEL",
        "AirlineCode": "AY"
    },
    {
        "InterviewId": "6249",
        "InterviewEndDate": "2023-07-27 16:40:30",
        "InterviewState": "Complete",
        "Flight": "AY - Finnair",
        "Dest": "HEL",
        "AirlineCode": "AY"
    },
    {
        "InterviewId": "6250",
        "InterviewEndDate": "2023-07-27 16:48:26",
        "InterviewState": "Complete",
        "Flight": "GQ - Sky Express",
        "Dest": "HER",
        "AirlineCode": "GQ"
    },
    {
        "InterviewId": "6251",
        "InterviewEndDate": "2023-07-27 16:48:10",
        "InterviewState": "Complete",
        "Flight": "GQ - Sky Express",
        "Dest": "HER",
        "AirlineCode": "GQ"
    },
    {
        "InterviewId": "6252",
        "InterviewEndDate": "2023-07-27 17:14:40",
        "InterviewState": "Complete",
        "Flight": "6I - L\u00fcbeck Air",
        "Dest": "LBC",
        "AirlineCode": "6I"
    },
    {
        "InterviewId": "6253",
        "InterviewEndDate": "2023-07-27 17:18:41",
        "InterviewState": "Complete",
        "Flight": "6I - L\u00fcbeck Air",
        "Dest": "LBC",
        "AirlineCode": "6I"
    },
    {
        "InterviewId": "6254",
        "InterviewEndDate": "2023-07-27 17:36:31",
        "InterviewState": "Complete",
        "Flight": "IB - Iberia",
        "Dest": "MAD",
        "AirlineCode": "IB"
    },
    {
        "InterviewId": "6255",
        "InterviewEndDate": "2023-07-27 17:40:18",
        "InterviewState": "Complete",
        "Flight": "IB - Iberia",
        "Dest": "MAD",
        "AirlineCode": "IB"
    },
    {
        "InterviewId": "6256",
        "InterviewEndDate": "2023-07-27 17:57:34",
        "InterviewState": "Complete",
        "Flight": "IB - Iberia",
        "Dest": "MAD",
        "AirlineCode": "IB"
    },
    {
        "InterviewId": "6257",
        "InterviewEndDate": "2023-07-27 17:56:45",
        "InterviewState": "Complete",
        "Flight": "IB - Iberia",
        "Dest": "MAD",
        "AirlineCode": "IB"
    },
    {
        "InterviewId": "6258",
        "InterviewEndDate": "2023-07-28 06:34:17",
        "InterviewState": "Complete",
        "Flight": "EN - AirDolomiti",
        "Dest": "GVA",
        "AirlineCode": "EN"
    },
    {
        "InterviewId": "6259",
        "InterviewEndDate": "2023-07-28 06:46:50",
        "InterviewState": "Complete",
        "Flight": "SN - Brussels Airlines",
        "Dest": "BRU",
        "AirlineCode": "SN"
    },
    {
        "InterviewId": "6260",
        "InterviewEndDate": "2023-07-28 07:21:34",
        "InterviewState": "Complete",
        "Flight": "UA - United Airlines",
        "Dest": "IAD",
        "AirlineCode": "UA"
    },
    {
        "InterviewId": "6261",
        "InterviewEndDate": "2023-07-28 07:36:16",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6262",
        "InterviewEndDate": "2023-07-28 07:54:31",
        "InterviewState": "Complete",
        "Flight": "LO - LOT Polish Airlines",
        "Dest": "WAW",
        "AirlineCode": "LO"
    },
    {
        "InterviewId": "6264",
        "InterviewEndDate": "2023-07-28 08:23:53",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "CLT",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6265",
        "InterviewEndDate": "2023-07-28 08:27:01",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "BUD",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6266",
        "InterviewEndDate": "2023-07-28 08:37:22",
        "InterviewState": "Complete",
        "Flight": "LO - LOT Polish Airlines",
        "Dest": "WAW",
        "AirlineCode": "LO"
    },
    {
        "InterviewId": "6267",
        "InterviewEndDate": "2023-07-28 08:52:16",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "BCN",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6268",
        "InterviewEndDate": "2023-07-30 12:02:14",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "YVR",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6269",
        "InterviewEndDate": "2023-07-30 12:04:07",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "YVR",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6270",
        "InterviewEndDate": "2023-07-30 12:04:01",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "YVR",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6271",
        "InterviewEndDate": "2023-07-30 12:13:19",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "BCN",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6272",
        "InterviewEndDate": "2023-07-30 12:13:17",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "BCN",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6273",
        "InterviewEndDate": "2023-07-30 12:15:19",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "BCN",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6274",
        "InterviewEndDate": "2023-07-30 12:17:58",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "BCN",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6275",
        "InterviewEndDate": "2023-07-30 12:24:57",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "BIO",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6276",
        "InterviewEndDate": "2023-07-30 12:27:17",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "BIO",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6277",
        "InterviewEndDate": "2023-07-30 12:27:26",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "BIO",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6278",
        "InterviewEndDate": "2023-07-30 12:34:01",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "BIO",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6279",
        "InterviewEndDate": "2023-07-30 12:41:35",
        "InterviewState": "Complete",
        "Flight": "Lufthansa",
        "Dest": "HAJ",
        "AirlineCode": "Lufthansa"
    },
    {
        "InterviewId": "6280",
        "InterviewEndDate": "2023-07-30 12:49:03",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "HAJ",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6281",
        "InterviewEndDate": "2023-07-30 12:50:30",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "WRO",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6282",
        "InterviewEndDate": "2023-07-30 12:53:19",
        "InterviewState": "Complete",
        "Flight": "Luftansa",
        "Dest": "WRO",
        "AirlineCode": "Luftansa"
    },
    {
        "InterviewId": "6283",
        "InterviewEndDate": "2023-07-30 12:59:22",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "WRO",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6284",
        "InterviewEndDate": "2023-07-30 13:00:47",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "WRO",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6286",
        "InterviewEndDate": "2023-07-30 13:14:09",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FCO",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6287",
        "InterviewEndDate": "2023-07-30 13:21:34",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "GOT",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6291",
        "InterviewEndDate": "2023-07-30 13:33:14",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "CPH",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6292",
        "InterviewEndDate": "2023-07-30 13:35:20",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "CPH",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6293",
        "InterviewEndDate": "2023-07-30 13:48:03",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "ZAG",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6294",
        "InterviewEndDate": "2023-07-30 13:51:00",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "ZAG",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6295",
        "InterviewEndDate": "2023-07-30 14:00:51",
        "InterviewState": "Complete",
        "Flight": "OS - Austrian Airlines",
        "Dest": "VIE",
        "AirlineCode": "OS"
    },
    {
        "InterviewId": "6296",
        "InterviewEndDate": "2023-07-30 14:05:43",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "GDN",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6297",
        "InterviewEndDate": "2023-07-30 14:12:34",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "KRK",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6299",
        "InterviewEndDate": "2023-07-30 14:19:16",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "KRK",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6300",
        "InterviewEndDate": "2023-07-30 14:16:35",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "EMPTY",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6301",
        "InterviewEndDate": "2023-07-30 14:53:45",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "CLJ",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6302",
        "InterviewEndDate": "2023-07-30 14:58:59",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "CLJ",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6303",
        "InterviewEndDate": "2023-07-30 15:01:32",
        "InterviewState": "Complete",
        "Flight": "EN - AirDolomiti",
        "Dest": "CLJ",
        "AirlineCode": "EN"
    },
    {
        "InterviewId": "6304",
        "InterviewEndDate": "2023-07-30 15:01:14",
        "InterviewState": "Complete",
        "Flight": "EN - AirDolomiti",
        "Dest": "CLJ",
        "AirlineCode": "EN"
    },
    {
        "InterviewId": "6305",
        "InterviewEndDate": "2023-07-30 15:09:59",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "LHR",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6306",
        "InterviewEndDate": "2023-07-30 15:10:50",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "LHR",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6307",
        "InterviewEndDate": "2023-07-30 15:22:58",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "LHR",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6309",
        "InterviewEndDate": "2023-07-30 15:25:45",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "LHR",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6310",
        "InterviewEndDate": "2023-07-30 15:28:38",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "LHR",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6311",
        "InterviewEndDate": "2023-07-30 15:32:28",
        "InterviewState": "Complete",
        "Flight": "Lufthansa",
        "Dest": "LHR",
        "AirlineCode": "Lufthansa"
    },
    {
        "InterviewId": "6312",
        "InterviewEndDate": "2023-07-30 15:38:23",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "SFO",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6313",
        "InterviewEndDate": "2023-07-30 15:42:27",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "SFO",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6314",
        "InterviewEndDate": "2023-07-31 06:22:57",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "CGN",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6315",
        "InterviewEndDate": "2023-07-31 06:34:34",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6316",
        "InterviewEndDate": "2023-07-31 07:03:06",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "CDG",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6317",
        "InterviewEndDate": "2023-07-31 07:19:57",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "BER",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6318",
        "InterviewEndDate": "2023-07-31 07:45:58",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "AMS",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6319",
        "InterviewEndDate": "2023-07-31 07:52:40",
        "InterviewState": "Complete",
        "Flight": "UA - United Airlines",
        "Dest": "IAH",
        "AirlineCode": "UA"
    },
    {
        "InterviewId": "6320",
        "InterviewEndDate": "2023-07-31 08:11:46",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "BIO",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6321",
        "InterviewEndDate": "2023-07-31 08:17:56",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FCO",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6322",
        "InterviewEndDate": "2023-07-31 16:29:55",
        "InterviewState": "Complete",
        "Flight": "AY - Finnair",
        "Dest": "HEL",
        "AirlineCode": "AY"
    },
    {
        "InterviewId": "6323",
        "InterviewEndDate": "2023-07-31 16:37:54",
        "InterviewState": "Complete",
        "Flight": "XQ - Sun Express",
        "Dest": "AYT",
        "AirlineCode": "XQ"
    },
    {
        "InterviewId": "6324",
        "InterviewEndDate": "2023-07-31 16:42:27",
        "InterviewState": "Complete",
        "Flight": "XQ - Sun Express",
        "Dest": "AYT",
        "AirlineCode": "XQ"
    },
    {
        "InterviewId": "6325",
        "InterviewEndDate": "2023-07-31 16:47:50",
        "InterviewState": "Complete",
        "Flight": "XQ - Sunexpress",
        "Dest": "AYT",
        "AirlineCode": "XQ"
    },
    {
        "InterviewId": "6327",
        "InterviewEndDate": "2023-07-31 16:57:56",
        "InterviewState": "Complete",
        "Flight": "KL - KLM Royal Dutch Airlines",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "6328",
        "InterviewEndDate": "2023-07-31 17:02:29",
        "InterviewState": "Complete",
        "Flight": "IV - VG Airlines",
        "Dest": "PRN",
        "AirlineCode": "IV"
    },
    {
        "InterviewId": "6329",
        "InterviewEndDate": "2023-07-31 17:26:08",
        "InterviewState": "Complete",
        "Flight": "EW - Eurowings",
        "Dest": "DUS",
        "AirlineCode": "EW"
    },
    {
        "InterviewId": "6330",
        "InterviewEndDate": "2023-07-31 17:21:49",
        "InterviewState": "Complete",
        "Flight": "EW - Eurowings",
        "Dest": "DUS",
        "AirlineCode": "EW"
    },
    {
        "InterviewId": "6332",
        "InterviewEndDate": "2023-08-01 11:15:12",
        "InterviewState": "Complete",
        "Flight": "XQ - Sun Express",
        "Dest": "AYT",
        "AirlineCode": "XQ"
    },
    {
        "InterviewId": "6333",
        "InterviewEndDate": "2023-08-01 11:08:10",
        "InterviewState": "Complete",
        "Flight": "XQ - Sunexpress",
        "Dest": "AYT",
        "AirlineCode": "XQ"
    },
    {
        "InterviewId": "6334",
        "InterviewEndDate": "2023-08-01 11:04:30",
        "InterviewState": "Complete",
        "Flight": "XQ - Sunexpress",
        "Dest": "AYT",
        "AirlineCode": "XQ"
    },
    {
        "InterviewId": "6335",
        "InterviewEndDate": "2023-08-01 11:37:17",
        "InterviewState": "Complete",
        "Flight": "Emirates",
        "Dest": "MRU",
        "AirlineCode": "Emirates"
    },
    {
        "InterviewId": "6336",
        "InterviewEndDate": "2023-08-01 11:39:07",
        "InterviewState": "Complete",
        "Flight": "EK - Emirates",
        "Dest": "DXB",
        "AirlineCode": "EK"
    },
    {
        "InterviewId": "6337",
        "InterviewEndDate": "2023-08-01 11:27:56",
        "InterviewState": "Complete",
        "Flight": "XQ - Sun Express",
        "Dest": "AYT",
        "AirlineCode": "XQ"
    },
    {
        "InterviewId": "6338",
        "InterviewEndDate": "2023-08-01 11:40:07",
        "InterviewState": "Complete",
        "Flight": "EK - Emirates",
        "Dest": "DXB",
        "AirlineCode": "EK"
    },
    {
        "InterviewId": "6339",
        "InterviewEndDate": "2023-08-01 11:46:48",
        "InterviewState": "Complete",
        "Flight": "EK - Emirates",
        "Dest": "BOM",
        "AirlineCode": "EK"
    },
    {
        "InterviewId": "6340",
        "InterviewEndDate": "2023-08-01 11:56:09",
        "InterviewState": "Complete",
        "Flight": "EK - Emirates",
        "Dest": "DXB",
        "AirlineCode": "EK"
    },
    {
        "InterviewId": "6341",
        "InterviewEndDate": "2023-08-01 11:48:58",
        "InterviewState": "Complete",
        "Flight": "EK - Emirates",
        "Dest": "DXB",
        "AirlineCode": "EK"
    },
    {
        "InterviewId": "6342",
        "InterviewEndDate": "2023-08-01 12:02:12",
        "InterviewState": "Complete",
        "Flight": "Emirates",
        "Dest": "BKK",
        "AirlineCode": "Emirates"
    },
    {
        "InterviewId": "6343",
        "InterviewEndDate": "2023-08-01 12:11:07",
        "InterviewState": "Complete",
        "Flight": "EK - Emirates",
        "Dest": "DXB",
        "AirlineCode": "EK"
    },
    {
        "InterviewId": "6344",
        "InterviewEndDate": "2023-08-01 12:16:30",
        "InterviewState": "Complete",
        "Flight": "EK - Emirates",
        "Dest": "MRU",
        "AirlineCode": "EK"
    },
    {
        "InterviewId": "6345",
        "InterviewEndDate": "2023-08-01 12:13:39",
        "InterviewState": "Complete",
        "Flight": "EK - Emirates",
        "Dest": "HND",
        "AirlineCode": "EK"
    },
    {
        "InterviewId": "6346",
        "InterviewEndDate": "2023-08-01 12:32:15",
        "InterviewState": "Complete",
        "Flight": "TK - Turkish Airlines",
        "Dest": "IST",
        "AirlineCode": "TK"
    },
    {
        "InterviewId": "6347",
        "InterviewEndDate": "2023-08-01 12:31:50",
        "InterviewState": "Complete",
        "Flight": "T\u00fcrkisch Airlines",
        "Dest": "IST",
        "AirlineCode": "T\u00fcrkisch"
    },
    {
        "InterviewId": "6349",
        "InterviewEndDate": "2023-08-01 12:30:53",
        "InterviewState": "Complete",
        "Flight": "TK - Turkish Airlines",
        "Dest": "DEL",
        "AirlineCode": "TK"
    },
    {
        "InterviewId": "6352",
        "InterviewEndDate": "2023-08-01 12:39:51",
        "InterviewState": "Complete",
        "Flight": "TK - Turkish Airlines",
        "Dest": "IST",
        "AirlineCode": "TK"
    },
    {
        "InterviewId": "6354",
        "InterviewEndDate": "2023-08-04 04:56:25",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "DEL",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6355",
        "InterviewEndDate": "2023-08-04 04:52:22",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "DEL",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6356",
        "InterviewEndDate": "2023-08-04 04:50:04",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "DEL",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6357",
        "InterviewEndDate": "2023-08-04 05:01:39",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "DEL",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6358",
        "InterviewEndDate": "2023-08-04 04:59:04",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "DEL",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6359",
        "InterviewEndDate": "2023-08-04 05:21:48",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "PAD",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6360",
        "InterviewEndDate": "2023-08-04 05:13:33",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "PAD",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6361",
        "InterviewEndDate": "2023-08-04 05:13:11",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "PAD",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6362",
        "InterviewEndDate": "2023-08-04 05:38:01",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "HND",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6363",
        "InterviewEndDate": "2023-08-04 05:35:24",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "HND",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6365",
        "InterviewEndDate": "2023-08-04 05:44:58",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "BUD",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6367",
        "InterviewEndDate": "2023-08-04 05:46:03",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "POZ",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6369",
        "InterviewEndDate": "2023-08-04 16:36:06",
        "InterviewState": "Complete",
        "Flight": "KL - KLM Royal Dutch Airlines",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "6370",
        "InterviewEndDate": "2023-08-04 16:36:07",
        "InterviewState": "Complete",
        "Flight": "KL - KLM Royal Dutch Airlines",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "6371",
        "InterviewEndDate": "2023-08-04 16:49:31",
        "InterviewState": "Complete",
        "Flight": "XQ - Sun Express",
        "Dest": "AYT",
        "AirlineCode": "XQ"
    },
    {
        "InterviewId": "6372",
        "InterviewEndDate": "2023-08-04 17:03:10",
        "InterviewState": "Complete",
        "Flight": "6I - L\u00fcbeck Air",
        "Dest": "LBC",
        "AirlineCode": "6I"
    },
    {
        "InterviewId": "6373",
        "InterviewEndDate": "2023-08-04 17:20:39",
        "InterviewState": "Complete",
        "Flight": "XQ - Sun Express",
        "Dest": "AYT",
        "AirlineCode": "XQ"
    },
    {
        "InterviewId": "6375",
        "InterviewEndDate": "2023-08-04 17:20:36",
        "InterviewState": "Complete",
        "Flight": "XQ - Sun Express",
        "Dest": "AYT",
        "AirlineCode": "XQ"
    },
    {
        "InterviewId": "6376",
        "InterviewEndDate": "2023-08-04 17:26:58",
        "InterviewState": "Complete",
        "Flight": "XQ - Sun Express",
        "Dest": "AYT",
        "AirlineCode": "XQ"
    },
    {
        "InterviewId": "6377",
        "InterviewEndDate": "2023-08-04 18:11:27",
        "InterviewState": "Complete",
        "Flight": "XQ - Sun Express",
        "Dest": "ASR",
        "AirlineCode": "XQ"
    },
    {
        "InterviewId": "6378",
        "InterviewEndDate": "2023-08-04 18:11:37",
        "InterviewState": "Complete",
        "Flight": "XQ - Sun Express",
        "Dest": "ASR",
        "AirlineCode": "XQ"
    },
    {
        "InterviewId": "6380",
        "InterviewEndDate": "2023-08-06 12:09:46",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "SAN",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6381",
        "InterviewEndDate": "2023-08-06 12:21:18",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "ORD",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6382",
        "InterviewEndDate": "2023-08-06 12:25:35",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "LHR",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6383",
        "InterviewEndDate": "2023-08-06 12:35:11",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "LHR",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6385",
        "InterviewEndDate": "2023-08-06 13:11:08",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "VLC",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6386",
        "InterviewEndDate": "2023-08-06 13:08:19",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "PMO",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6387",
        "InterviewEndDate": "2023-08-06 13:14:25",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "VLC",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6388",
        "InterviewEndDate": "2023-08-06 13:18:23",
        "InterviewState": "Complete",
        "Flight": "OS - Austrian Airlines",
        "Dest": "VIE",
        "AirlineCode": "OS"
    },
    {
        "InterviewId": "6389",
        "InterviewEndDate": "2023-08-06 13:22:01",
        "InterviewState": "Complete",
        "Flight": "OS - Austrian Airlines",
        "Dest": "CTA",
        "AirlineCode": "OS"
    },
    {
        "InterviewId": "6390",
        "InterviewEndDate": "2023-08-06 13:32:15",
        "InterviewState": "Complete",
        "Flight": "TP - TAP Air Portugal",
        "Dest": "GRU",
        "AirlineCode": "TP"
    },
    {
        "InterviewId": "6391",
        "InterviewEndDate": "2023-08-06 13:39:40",
        "InterviewState": "Complete",
        "Flight": "Lufthansa",
        "Dest": "MLA",
        "AirlineCode": "Lufthansa"
    },
    {
        "InterviewId": "6392",
        "InterviewEndDate": "2023-08-06 13:42:35",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "MLA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6393",
        "InterviewEndDate": "2023-08-06 13:43:43",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "MLA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6394",
        "InterviewEndDate": "2023-08-06 13:55:50",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "ZRH",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6395",
        "InterviewEndDate": "2023-08-06 14:00:31",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "AOI",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6398",
        "InterviewEndDate": "2023-08-06 14:12:53",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "TLS",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6399",
        "InterviewEndDate": "2023-08-06 14:29:46",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "OPO",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6400",
        "InterviewEndDate": "2023-08-06 14:34:02",
        "InterviewState": "Complete",
        "Flight": "MS - Egyptair",
        "Dest": "CAI",
        "AirlineCode": "MS"
    },
    {
        "InterviewId": "6401",
        "InterviewEndDate": "2023-08-06 14:43:56",
        "InterviewState": "Complete",
        "Flight": "MS - Egyptair",
        "Dest": "CAI",
        "AirlineCode": "MS"
    },
    {
        "InterviewId": "6402",
        "InterviewEndDate": "2023-08-06 14:51:01",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "LHR",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6403",
        "InterviewEndDate": "2023-08-06 15:00:00",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "LHR",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6404",
        "InterviewEndDate": "2023-08-06 15:05:30",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "LHR",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6405",
        "InterviewEndDate": "2023-08-06 15:21:05",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "BER",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6406",
        "InterviewEndDate": "2023-08-06 15:29:37",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "CFU",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6408",
        "InterviewEndDate": "2023-08-06 15:33:20",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "CFU",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6410",
        "InterviewEndDate": "2023-08-06 15:41:13",
        "InterviewState": "Complete",
        "Flight": "Air dolomiti",
        "Dest": "OLB",
        "AirlineCode": "Air"
    },
    {
        "InterviewId": "6411",
        "InterviewEndDate": "2023-08-07 08:16:57",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FCO",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6412",
        "InterviewEndDate": "2023-08-07 08:31:14",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "LHR",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6414",
        "InterviewEndDate": "2023-08-07 08:39:00",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FCO",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6415",
        "InterviewEndDate": "2023-08-07 08:49:17",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "OPO",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6416",
        "InterviewEndDate": "2023-08-07 09:26:30",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "DUS",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6417",
        "InterviewEndDate": "2023-08-07 09:34:31",
        "InterviewState": "Complete",
        "Flight": "EN - AirDolomiti",
        "Dest": "MXP",
        "AirlineCode": "EN"
    },
    {
        "InterviewId": "6418",
        "InterviewEndDate": "2023-08-07 09:56:16",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "BER",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6419",
        "InterviewEndDate": "2023-08-07 10:06:38",
        "InterviewState": "Complete",
        "Flight": "EN - AirDolomiti",
        "Dest": "LIN",
        "AirlineCode": "EN"
    },
    {
        "InterviewId": "6421",
        "InterviewEndDate": "2023-08-07 10:27:36",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "BOS",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6422",
        "InterviewEndDate": "2023-08-07 10:38:26",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "CLT",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6423",
        "InterviewEndDate": "2023-08-07 10:45:38",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "LHR",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6427",
        "InterviewEndDate": "2023-08-07 18:10:20",
        "InterviewState": "Complete",
        "Flight": "TP - TAP Air Portugal",
        "Dest": "EMPTY",
        "AirlineCode": "TP"
    },
    {
        "InterviewId": "6428",
        "InterviewEndDate": "2023-08-07 18:10:52",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "LTN",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6429",
        "InterviewEndDate": "2023-08-08 08:15:21",
        "InterviewState": "Complete",
        "Flight": "DE - Condor Flugdienst",
        "Dest": "AYT",
        "AirlineCode": "DE"
    },
    {
        "InterviewId": "6430",
        "InterviewEndDate": "2023-08-08 08:22:15",
        "InterviewState": "Complete",
        "Flight": "XC - Corendon Airlines",
        "Dest": "AYT",
        "AirlineCode": "XC"
    },
    {
        "InterviewId": "6431",
        "InterviewEndDate": "2023-08-08 08:27:24",
        "InterviewState": "Complete",
        "Flight": "XC - Corendon Airlines",
        "Dest": "AYT",
        "AirlineCode": "XC"
    },
    {
        "InterviewId": "6432",
        "InterviewEndDate": "2023-08-08 08:58:30",
        "InterviewState": "Complete",
        "Flight": "AZ - Alitalia",
        "Dest": "FCO",
        "AirlineCode": "AZ"
    },
    {
        "InterviewId": "6433",
        "InterviewEndDate": "2023-08-08 09:50:28",
        "InterviewState": "Complete",
        "Flight": "KL - KLM Royal Dutch Airlines",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "6434",
        "InterviewEndDate": "2023-08-08 09:57:49",
        "InterviewState": "Complete",
        "Flight": "",
        "Dest": "ATH",
        "AirlineCode": ""
    },
    {
        "InterviewId": "6435",
        "InterviewEndDate": "2023-08-08 10:03:31",
        "InterviewState": "Complete",
        "Flight": "DE - Condor Flugdienst",
        "Dest": "PMI",
        "AirlineCode": "DE"
    },
    {
        "InterviewId": "6436",
        "InterviewEndDate": "2023-08-08 10:05:54",
        "InterviewState": "Complete",
        "Flight": "DE - Condor Flugdienst",
        "Dest": "PMI",
        "AirlineCode": "DE"
    },
    {
        "InterviewId": "6437",
        "InterviewEndDate": "2023-08-08 10:13:45",
        "InterviewState": "Complete",
        "Flight": "DE - Condor Flugdienst",
        "Dest": "PMI",
        "AirlineCode": "DE"
    },
    {
        "InterviewId": "6438",
        "InterviewEndDate": "2023-08-08 10:23:32",
        "InterviewState": "Complete",
        "Flight": "DE - Condor Flugdienst",
        "Dest": "HER",
        "AirlineCode": "DE"
    },
    {
        "InterviewId": "6439",
        "InterviewEndDate": "2023-08-08 10:26:01",
        "InterviewState": "Complete",
        "Flight": "EW - Eurowings",
        "Dest": "DUS",
        "AirlineCode": "EW"
    },
    {
        "InterviewId": "6440",
        "InterviewEndDate": "2023-08-09 05:50:38",
        "InterviewState": "Complete",
        "Flight": "OS - Austrian Airlines",
        "Dest": "VIE",
        "AirlineCode": "OS"
    },
    {
        "InterviewId": "6441",
        "InterviewEndDate": "2023-08-09 05:55:11",
        "InterviewState": "Complete",
        "Flight": "OS - Austrian Airlines",
        "Dest": "VIE",
        "AirlineCode": "OS"
    },
    {
        "InterviewId": "6442",
        "InterviewEndDate": "2023-08-09 05:57:14",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "WAW",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6443",
        "InterviewEndDate": "2023-08-09 06:08:55",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "HEL",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6444",
        "InterviewEndDate": "2023-08-09 06:05:02",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "HEL",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6445",
        "InterviewEndDate": "2023-08-09 06:11:34",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "HEL",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6446",
        "InterviewEndDate": "2023-08-09 06:13:16",
        "InterviewState": "Complete",
        "Flight": "Luxair",
        "Dest": "LUX",
        "AirlineCode": "Luxair"
    },
    {
        "InterviewId": "6447",
        "InterviewEndDate": "2023-08-09 06:17:26",
        "InterviewState": "Complete",
        "Flight": "LG - Luxair",
        "Dest": "LUX",
        "AirlineCode": "LG"
    },
    {
        "InterviewId": "6449",
        "InterviewEndDate": "2023-08-09 06:24:25",
        "InterviewState": "Complete",
        "Flight": "EN - AirDolomiti",
        "Dest": "FLR",
        "AirlineCode": "EN"
    },
    {
        "InterviewId": "6450",
        "InterviewEndDate": "2023-08-09 06:34:47",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "EMPTY",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6452",
        "InterviewEndDate": "2023-08-09 06:42:13",
        "InterviewState": "Complete",
        "Flight": "SN - Brussels Airlines",
        "Dest": "EMPTY",
        "AirlineCode": "SN"
    },
    {
        "InterviewId": "6453",
        "InterviewEndDate": "2023-08-09 06:41:37",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansab",
        "Dest": "EMPTY",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6454",
        "InterviewEndDate": "2023-08-09 06:50:00",
        "InterviewState": "Complete",
        "Flight": "UA - United Airlines",
        "Dest": "EWR",
        "AirlineCode": "UA"
    },
    {
        "InterviewId": "6455",
        "InterviewEndDate": "2023-08-09 06:50:44",
        "InterviewState": "Complete",
        "Flight": "SQ - Singapore Airlines",
        "Dest": "SIN",
        "AirlineCode": "SQ"
    },
    {
        "InterviewId": "6458",
        "InterviewEndDate": "2023-08-09 09:59:22",
        "InterviewState": "Complete",
        "Flight": "KM - Air Malta",
        "Dest": "MLA",
        "AirlineCode": "KM"
    },
    {
        "InterviewId": "6459",
        "InterviewEndDate": "2023-08-09 10:50:22",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "IAD",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6460",
        "InterviewEndDate": "2023-08-09 10:57:51",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "IAD",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6461",
        "InterviewEndDate": "2023-08-09 11:22:09",
        "InterviewState": "Complete",
        "Flight": "TP - TAP Air Portugal",
        "Dest": "LIS",
        "AirlineCode": "TP"
    },
    {
        "InterviewId": "6462",
        "InterviewEndDate": "2023-08-09 11:25:39",
        "InterviewState": "Complete",
        "Flight": "TP - TAP Air Portugal",
        "Dest": "LIS",
        "AirlineCode": "TP"
    },
    {
        "InterviewId": "6463",
        "InterviewEndDate": "2023-08-09 11:30:23",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "AMS",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6464",
        "InterviewEndDate": "2023-08-09 11:58:04",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6465",
        "InterviewEndDate": "2023-08-09 12:07:54",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "OSL",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6466",
        "InterviewEndDate": "2023-08-09 12:10:16",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "OSL",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6467",
        "InterviewEndDate": "2023-08-09 12:14:05",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "YVR",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6468",
        "InterviewEndDate": "2023-08-09 12:16:48",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "YVR",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6469",
        "InterviewEndDate": "2023-08-09 12:21:27",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "YVR",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6470",
        "InterviewEndDate": "2023-08-09 12:26:54",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "YVR",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6471",
        "InterviewEndDate": "2023-08-09 12:40:17",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "BCN",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6472",
        "InterviewEndDate": "2023-08-09 12:48:33",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "BCN",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6474",
        "InterviewEndDate": "2023-08-09 13:18:19",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "MAD",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6475",
        "InterviewEndDate": "2023-08-09 13:21:58",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "MAD",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6476",
        "InterviewEndDate": "2023-08-09 13:25:21",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "MAD",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6478",
        "InterviewEndDate": "2023-08-11 05:33:14",
        "InterviewState": "Complete",
        "Flight": "EY - ETIHAD Airways",
        "Dest": "AUH",
        "AirlineCode": "EY"
    },
    {
        "InterviewId": "6479",
        "InterviewEndDate": "2023-08-11 05:38:37",
        "InterviewState": "Complete",
        "Flight": "EY - ETIHAD Airways",
        "Dest": "AUH",
        "AirlineCode": "EY"
    },
    {
        "InterviewId": "6480",
        "InterviewEndDate": "2023-08-11 05:59:56",
        "InterviewState": "Complete",
        "Flight": "QR - Qatar Airways",
        "Dest": "DOH",
        "AirlineCode": "QR"
    },
    {
        "InterviewId": "6481",
        "InterviewEndDate": "2023-08-11 06:03:09",
        "InterviewState": "Complete",
        "Flight": "QR - Qatar Airways",
        "Dest": "DOH",
        "AirlineCode": "QR"
    },
    {
        "InterviewId": "6482",
        "InterviewEndDate": "2023-08-11 06:06:42",
        "InterviewState": "Complete",
        "Flight": "QR - Qatar Airways",
        "Dest": "DOH",
        "AirlineCode": "QR"
    },
    {
        "InterviewId": "6483",
        "InterviewEndDate": "2023-08-11 06:09:13",
        "InterviewState": "Complete",
        "Flight": "QR - Qatar Airways",
        "Dest": "DOH",
        "AirlineCode": "QR"
    },
    {
        "InterviewId": "6484",
        "InterviewEndDate": "2023-08-11 06:13:36",
        "InterviewState": "Complete",
        "Flight": "IV - VG Airlines",
        "Dest": "PRN",
        "AirlineCode": "IV"
    },
    {
        "InterviewId": "6485",
        "InterviewEndDate": "2023-08-11 06:15:29",
        "InterviewState": "Complete",
        "Flight": "IV - VG Airlines",
        "Dest": "PRN",
        "AirlineCode": "IV"
    },
    {
        "InterviewId": "6486",
        "InterviewEndDate": "2023-08-11 07:02:35",
        "InterviewState": "Complete",
        "Flight": "PC - Pegasus Airlines",
        "Dest": "AYT",
        "AirlineCode": "PC"
    },
    {
        "InterviewId": "6487",
        "InterviewEndDate": "2023-08-11 07:19:45",
        "InterviewState": "Complete",
        "Flight": "PC - Pegasus Airlines",
        "Dest": "AYT",
        "AirlineCode": "PC"
    },
    {
        "InterviewId": "6488",
        "InterviewEndDate": "2023-08-11 07:49:26",
        "InterviewState": "Complete",
        "Flight": "TK - Turkish Airlines",
        "Dest": "IST",
        "AirlineCode": "TK"
    },
    {
        "InterviewId": "6489",
        "InterviewEndDate": "2023-08-11 13:45:37",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "ATH",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6490",
        "InterviewEndDate": "2023-08-11 13:48:04",
        "InterviewState": "Complete",
        "Flight": "EN - AirDolomiti",
        "Dest": "BLQ",
        "AirlineCode": "EN"
    },
    {
        "InterviewId": "6491",
        "InterviewEndDate": "2023-08-11 14:08:45",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "BER",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6492",
        "InterviewEndDate": "2023-08-11 14:11:55",
        "InterviewState": "Complete",
        "Flight": "EN - AirDolomiti",
        "Dest": "BRI",
        "AirlineCode": "EN"
    },
    {
        "InterviewId": "6493",
        "InterviewEndDate": "2023-08-11 14:16:54",
        "InterviewState": "Complete",
        "Flight": "EN - AirDolomiti",
        "Dest": "BRI",
        "AirlineCode": "EN"
    },
    {
        "InterviewId": "6494",
        "InterviewEndDate": "2023-08-11 14:23:39",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "SAN",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6495",
        "InterviewEndDate": "2023-08-11 14:57:01",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "LHR",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6496",
        "InterviewEndDate": "2023-08-11 15:00:58",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "LHR",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6497",
        "InterviewEndDate": "2023-08-11 15:23:55",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "BCN",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6498",
        "InterviewEndDate": "2023-08-11 15:27:49",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "BCN",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6499",
        "InterviewEndDate": "2023-08-11 15:32:56",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "BCN",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6500",
        "InterviewEndDate": "2023-08-11 15:37:22",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "ATH",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6501",
        "InterviewEndDate": "2023-08-11 15:41:18",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "SBZ",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6503",
        "InterviewEndDate": "2023-08-11 15:45:53",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "BIO",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6504",
        "InterviewEndDate": "2023-08-11 15:48:56",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "AGP",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6506",
        "InterviewEndDate": "2023-08-11 15:57:58",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "BER",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6507",
        "InterviewEndDate": "2023-08-11 16:12:22",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "ATH",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6508",
        "InterviewEndDate": "2023-08-11 16:21:11",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "BCN",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6509",
        "InterviewEndDate": "2023-08-11 16:23:26",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "BCN",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6510",
        "InterviewEndDate": "2023-08-11 16:25:52",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "BCN",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6511",
        "InterviewEndDate": "2023-08-11 16:29:54",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "BCN",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6512",
        "InterviewEndDate": "2023-08-11 16:34:30",
        "InterviewState": "Complete",
        "Flight": "A3 - Aegean Airlines",
        "Dest": "ATH",
        "AirlineCode": "A3"
    },
    {
        "InterviewId": "6513",
        "InterviewEndDate": "2023-08-11 16:40:15",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "BER",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6514",
        "InterviewEndDate": "2023-08-11 16:42:05",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "BRE",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6515",
        "InterviewEndDate": "2023-08-11 16:45:25",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FCO",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6516",
        "InterviewEndDate": "2023-08-11 16:48:07",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "BER",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6518",
        "InterviewEndDate": "2023-08-12 13:25:49",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "BRE",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6519",
        "InterviewEndDate": "2023-08-12 13:27:03",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "BRE",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6520",
        "InterviewEndDate": "2023-08-12 13:30:08",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "KRK",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6521",
        "InterviewEndDate": "2023-08-12 13:35:44",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "BRE",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6522",
        "InterviewEndDate": "2023-08-12 13:44:14",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "VLC",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6524",
        "InterviewEndDate": "2023-08-12 13:43:55",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "VLC",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6525",
        "InterviewEndDate": "2023-08-12 13:45:07",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "VLC",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6526",
        "InterviewEndDate": "2023-08-12 13:44:32",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "VLC",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6527",
        "InterviewEndDate": "2023-08-12 13:52:21",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "NCE",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6528",
        "InterviewEndDate": "2023-08-12 13:53:48",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "NCE",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6529",
        "InterviewEndDate": "2023-08-12 13:52:32",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "NCE",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6530",
        "InterviewEndDate": "2023-08-12 13:54:34",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "NCE",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6533",
        "InterviewEndDate": "2023-08-13 12:05:36",
        "InterviewState": "Complete",
        "Flight": "LH 453",
        "Dest": "LAX",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6535",
        "InterviewEndDate": "2023-08-13 12:18:17",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "MAN",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6536",
        "InterviewEndDate": "2023-08-13 12:23:38",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "MAN",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6537",
        "InterviewEndDate": "2023-08-13 12:29:48",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "MAN",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6538",
        "InterviewEndDate": "2023-08-13 12:40:42",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "YVR",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6539",
        "InterviewEndDate": "2023-08-13 12:45:02",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "YVR",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6540",
        "InterviewEndDate": "2023-08-13 12:46:08",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "YVR",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6541",
        "InterviewEndDate": "2023-08-13 12:46:02",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "YVR",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6542",
        "InterviewEndDate": "2023-08-13 12:53:30",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "YVR",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6543",
        "InterviewEndDate": "2023-08-13 12:59:57",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "YVR",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6544",
        "InterviewEndDate": "2023-08-13 13:09:41",
        "InterviewState": "Complete",
        "Flight": "LH 2517",
        "Dest": "DUB",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6545",
        "InterviewEndDate": "2023-08-13 13:19:47",
        "InterviewState": "Complete",
        "Flight": "LH 2059",
        "Dest": "HAM",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6546",
        "InterviewEndDate": "2023-08-13 13:21:04",
        "InterviewState": "Complete",
        "Flight": "LH 2059",
        "Dest": "HAM",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6547",
        "InterviewEndDate": "2023-08-13 13:28:36",
        "InterviewState": "Complete",
        "Flight": "LH 2059",
        "Dest": "HAM",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6548",
        "InterviewEndDate": "2023-08-13 13:31:49",
        "InterviewState": "Complete",
        "Flight": "LH 2193",
        "Dest": "BRE",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6549",
        "InterviewEndDate": "2023-08-13 13:38:06",
        "InterviewState": "Complete",
        "Flight": "LH 2193",
        "Dest": "BRE",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6550",
        "InterviewEndDate": "2023-08-13 13:42:33",
        "InterviewState": "Complete",
        "Flight": "LH 1877",
        "Dest": "NAP",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6551",
        "InterviewEndDate": "2023-08-13 13:47:40",
        "InterviewState": "Complete",
        "Flight": "LH 2369",
        "Dest": "ZRH",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6552",
        "InterviewEndDate": "2023-08-13 14:03:20",
        "InterviewState": "Complete",
        "Flight": "LH 2435",
        "Dest": "STR",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6553",
        "InterviewEndDate": "2023-08-13 14:20:45",
        "InterviewState": "Complete",
        "Flight": "LH 2461",
        "Dest": "HEL",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6554",
        "InterviewEndDate": "2023-08-13 14:42:35",
        "InterviewState": "Complete",
        "Flight": "LH 2461",
        "Dest": "HEL",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6555",
        "InterviewEndDate": "2023-08-13 14:45:27",
        "InterviewState": "Complete",
        "Flight": "LH 2461",
        "Dest": "HEL",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6556",
        "InterviewEndDate": "2023-08-13 15:02:55",
        "InterviewState": "Complete",
        "Flight": "LH 1823",
        "Dest": "SVQ",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6557",
        "InterviewEndDate": "2023-08-13 15:05:20",
        "InterviewState": "Complete",
        "Flight": "LH 1823",
        "Dest": "SVQ",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6558",
        "InterviewEndDate": "2023-08-13 15:07:46",
        "InterviewState": "Complete",
        "Flight": "LH1823",
        "Dest": "SVQ",
        "AirlineCode": "LH1823"
    },
    {
        "InterviewId": "6559",
        "InterviewEndDate": "2023-08-13 15:19:33",
        "InterviewState": "Complete",
        "Flight": "LH 715",
        "Dest": "HND",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6560",
        "InterviewEndDate": "2023-08-13 15:22:26",
        "InterviewState": "Complete",
        "Flight": "LH 715",
        "Dest": "HND",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6561",
        "InterviewEndDate": "2023-08-13 15:23:27",
        "InterviewState": "Complete",
        "Flight": "LH 715",
        "Dest": "HND",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6562",
        "InterviewEndDate": "2023-08-13 15:27:15",
        "InterviewState": "Complete",
        "Flight": "LH 1823",
        "Dest": "SVQ",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6563",
        "InterviewEndDate": "2023-08-13 15:33:44",
        "InterviewState": "Complete",
        "Flight": "LH 715",
        "Dest": "HND",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6564",
        "InterviewEndDate": "2023-08-13 15:35:15",
        "InterviewState": "Complete",
        "Flight": "LH 715",
        "Dest": "HND",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6565",
        "InterviewEndDate": "2023-08-13 15:47:55",
        "InterviewState": "Complete",
        "Flight": "LH 1823",
        "Dest": "SVQ",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6566",
        "InterviewEndDate": "2023-08-14 14:49:37",
        "InterviewState": "Complete",
        "Flight": "LH 1823",
        "Dest": "SVQ",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6567",
        "InterviewEndDate": "2023-08-14 14:53:15",
        "InterviewState": "Complete",
        "Flight": "LH 1823",
        "Dest": "SVQ",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6568",
        "InterviewEndDate": "2023-08-14 14:54:44",
        "InterviewState": "Complete",
        "Flight": "LH 1823",
        "Dest": "SVQ",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6569",
        "InterviewEndDate": "2023-08-14 14:56:43",
        "InterviewState": "Complete",
        "Flight": "LH 1823",
        "Dest": "SVQ",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6570",
        "InterviewEndDate": "2023-08-14 15:06:18",
        "InterviewState": "Complete",
        "Flight": "LH 110",
        "Dest": "AYT",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6571",
        "InterviewEndDate": "2023-08-14 15:06:25",
        "InterviewState": "Complete",
        "Flight": "LH 110",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6572",
        "InterviewEndDate": "2023-08-14 15:12:16",
        "InterviewState": "Complete",
        "Flight": "LH 1823",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6573",
        "InterviewEndDate": "2023-08-14 15:11:08",
        "InterviewState": "Complete",
        "Flight": "LH 1009",
        "Dest": "BRU",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6574",
        "InterviewEndDate": "2023-08-14 15:22:52",
        "InterviewState": "Complete",
        "Flight": "LH 501",
        "Dest": "GIG",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6575",
        "InterviewEndDate": "2023-08-14 15:29:20",
        "InterviewState": "Complete",
        "Flight": "LH 1943",
        "Dest": "BGO",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6576",
        "InterviewEndDate": "2023-08-14 15:31:02",
        "InterviewState": "Complete",
        "Flight": "LH 1943",
        "Dest": "BER",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6577",
        "InterviewEndDate": "2023-08-14 15:42:14",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa 719",
        "Dest": "ICN",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6578",
        "InterviewEndDate": "2023-08-14 15:44:44",
        "InterviewState": "Complete",
        "Flight": "LH 719",
        "Dest": "ICN",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6579",
        "InterviewEndDate": "2023-08-14 15:46:12",
        "InterviewState": "Complete",
        "Flight": "LH 719",
        "Dest": "ICN",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6580",
        "InterviewEndDate": "2023-08-14 15:51:45",
        "InterviewState": "Complete",
        "Flight": "LH 719",
        "Dest": "ICN",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6581",
        "InterviewEndDate": "2023-08-14 15:55:38",
        "InterviewState": "Complete",
        "Flight": "LzH 719",
        "Dest": "ICN",
        "AirlineCode": "LzH"
    },
    {
        "InterviewId": "6584",
        "InterviewEndDate": "2023-08-14 16:06:59",
        "InterviewState": "Complete",
        "Flight": "LH 715",
        "Dest": "HND",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6585",
        "InterviewEndDate": "2023-08-14 16:08:23",
        "InterviewState": "Complete",
        "Flight": "LH 715",
        "Dest": "HND",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6586",
        "InterviewEndDate": "2023-08-14 16:11:15",
        "InterviewState": "Complete",
        "Flight": "LH 715",
        "Dest": "HND",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6587",
        "InterviewEndDate": "2023-08-14 16:20:35",
        "InterviewState": "Complete",
        "Flight": "LH 715",
        "Dest": "HND",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6588",
        "InterviewEndDate": "2023-08-14 16:20:11",
        "InterviewState": "Complete",
        "Flight": "LH 715",
        "Dest": "HND",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6589",
        "InterviewEndDate": "2023-08-14 16:28:37",
        "InterviewState": "Complete",
        "Flight": "LH 1815",
        "Dest": "BCN",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6590",
        "InterviewEndDate": "2023-08-14 16:36:41",
        "InterviewState": "Complete",
        "Flight": "LH 1815",
        "Dest": "BCN",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6591",
        "InterviewEndDate": "2023-08-14 16:34:47",
        "InterviewState": "Complete",
        "Flight": "LH 1815",
        "Dest": "BGI",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6592",
        "InterviewEndDate": "2023-08-14 16:38:01",
        "InterviewState": "Complete",
        "Flight": "LH 1815",
        "Dest": "BCN",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6593",
        "InterviewEndDate": "2023-08-14 16:47:29",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "EDI",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6594",
        "InterviewEndDate": "2023-08-14 16:56:38",
        "InterviewState": "Complete",
        "Flight": "L H 114",
        "Dest": "FRA",
        "AirlineCode": "L"
    },
    {
        "InterviewId": "6595",
        "InterviewEndDate": "2023-08-14 17:04:04",
        "InterviewState": "Complete",
        "Flight": "OS 115",
        "Dest": "VIE",
        "AirlineCode": "OS"
    },
    {
        "InterviewId": "6596",
        "InterviewEndDate": "2023-08-14 17:10:36",
        "InterviewState": "Complete",
        "Flight": "BT 223",
        "Dest": "RIX",
        "AirlineCode": "BT"
    },
    {
        "InterviewId": "6598",
        "InterviewEndDate": "2023-08-14 17:14:29",
        "InterviewState": "Complete",
        "Flight": "OS 115",
        "Dest": "VIE",
        "AirlineCode": "OS"
    },
    {
        "InterviewId": "6599",
        "InterviewEndDate": "2023-08-14 17:21:06",
        "InterviewState": "Complete",
        "Flight": "BT 223",
        "Dest": "RIX",
        "AirlineCode": "BT"
    },
    {
        "InterviewId": "6600",
        "InterviewEndDate": "2023-08-14 17:28:50",
        "InterviewState": "Complete",
        "Flight": "BT 223",
        "Dest": "RIX",
        "AirlineCode": "BT"
    },
    {
        "InterviewId": "6601",
        "InterviewEndDate": "2023-08-14 17:33:41",
        "InterviewState": "Complete",
        "Flight": "LH 114",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6602",
        "InterviewEndDate": "2023-08-14 17:36:41",
        "InterviewState": "Complete",
        "Flight": "A3 - Aegean Airlines",
        "Dest": "SKG",
        "AirlineCode": "A3"
    },
    {
        "InterviewId": "6603",
        "InterviewEndDate": "2023-08-14 17:44:50",
        "InterviewState": "Complete",
        "Flight": "A3 - Aegean Airlines",
        "Dest": "SKG",
        "AirlineCode": "A3"
    },
    {
        "InterviewId": "6604",
        "InterviewEndDate": "2023-08-14 17:49:50",
        "InterviewState": "Complete",
        "Flight": "A3 - Aegean Airlines",
        "Dest": "SKG",
        "AirlineCode": "A3"
    },
    {
        "InterviewId": "6605",
        "InterviewEndDate": "2023-08-14 17:57:38",
        "InterviewState": "Complete",
        "Flight": "LH 1775",
        "Dest": "SKG",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6606",
        "InterviewEndDate": "2023-08-14 17:59:16",
        "InterviewState": "Complete",
        "Flight": "LH 1775",
        "Dest": "SKG",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6607",
        "InterviewEndDate": "2023-08-14 18:05:45",
        "InterviewState": "Complete",
        "Flight": "Lh 1797",
        "Dest": "PMI",
        "AirlineCode": "Lh"
    },
    {
        "InterviewId": "6608",
        "InterviewEndDate": "2023-08-14 18:13:31",
        "InterviewState": "Complete",
        "Flight": "A3 - Aegean Airlines",
        "Dest": "RHO",
        "AirlineCode": "A3"
    },
    {
        "InterviewId": "6609",
        "InterviewEndDate": "2023-08-14 18:16:27",
        "InterviewState": "Complete",
        "Flight": "A3 - Aegean Airlines",
        "Dest": "RHO",
        "AirlineCode": "A3"
    },
    {
        "InterviewId": "6610",
        "InterviewEndDate": "2023-08-15 11:00:27",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "IAD",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6611",
        "InterviewEndDate": "2023-08-15 10:40:43",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "IAD",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6612",
        "InterviewEndDate": "2023-08-15 10:44:03",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "IAD",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6613",
        "InterviewEndDate": "2023-08-15 10:51:48",
        "InterviewState": "Complete",
        "Flight": "UA - United Airlines",
        "Dest": "SFO",
        "AirlineCode": "UA"
    },
    {
        "InterviewId": "6617",
        "InterviewEndDate": "2023-08-15 11:06:05",
        "InterviewState": "Complete",
        "Flight": "KM - Air Malta",
        "Dest": "MLA",
        "AirlineCode": "KM"
    },
    {
        "InterviewId": "6618",
        "InterviewEndDate": "2023-08-15 11:52:28",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "YVR",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6620",
        "InterviewEndDate": "2023-08-15 11:38:06",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "YVR",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6621",
        "InterviewEndDate": "2023-08-15 12:34:31",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "ORD",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6622",
        "InterviewEndDate": "2023-08-17 06:31:10",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "CGN",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6623",
        "InterviewEndDate": "2023-08-17 06:57:40",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "BER",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6624",
        "InterviewEndDate": "2023-08-17 07:04:58",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "BER",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6625",
        "InterviewEndDate": "2023-08-17 07:08:53",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "BER",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6626",
        "InterviewEndDate": "2023-08-17 07:26:08",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "BER",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6627",
        "InterviewEndDate": "2023-08-17 07:28:21",
        "InterviewState": "Complete",
        "Flight": "UA - United Airlines",
        "Dest": "SFO",
        "AirlineCode": "UA"
    },
    {
        "InterviewId": "6628",
        "InterviewEndDate": "2023-08-17 07:37:13",
        "InterviewState": "Complete",
        "Flight": "UA - United Airlines",
        "Dest": "SFO",
        "AirlineCode": "UA"
    },
    {
        "InterviewId": "6629",
        "InterviewEndDate": "2023-08-17 07:41:59",
        "InterviewState": "Complete",
        "Flight": "SN - Brussels Airlines",
        "Dest": "BRU",
        "AirlineCode": "SN"
    },
    {
        "InterviewId": "6630",
        "InterviewEndDate": "2023-08-17 07:50:18",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "DUS",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6631",
        "InterviewEndDate": "2023-08-17 07:59:06",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "DUS",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6632",
        "InterviewEndDate": "2023-08-17 08:01:01",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "DUS",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6633",
        "InterviewEndDate": "2023-08-17 08:11:28",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "DEN",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6634",
        "InterviewEndDate": "2023-08-17 08:18:15",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "DEN",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6635",
        "InterviewEndDate": "2023-08-17 08:21:24",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6636",
        "InterviewEndDate": "2023-08-17 08:28:49",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "PRG",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6637",
        "InterviewEndDate": "2023-08-17 08:36:07",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "DEN",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6638",
        "InterviewEndDate": "2023-08-17 08:39:03",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "DEN",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6639",
        "InterviewEndDate": "2023-08-17 16:23:21",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "BER",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6640",
        "InterviewEndDate": "2023-08-17 16:23:14",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "BER",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6641",
        "InterviewEndDate": "2023-08-17 16:47:24",
        "InterviewState": "Complete",
        "Flight": "EN - AirDolomiti",
        "Dest": "FLR",
        "AirlineCode": "EN"
    },
    {
        "InterviewId": "6642",
        "InterviewEndDate": "2023-08-17 16:47:21",
        "InterviewState": "Complete",
        "Flight": "EN - AirDolomiti",
        "Dest": "FLR",
        "AirlineCode": "EN"
    },
    {
        "InterviewId": "6643",
        "InterviewEndDate": "2023-08-17 17:04:57",
        "InterviewState": "Complete",
        "Flight": "KM - Air Malta",
        "Dest": "MLA",
        "AirlineCode": "KM"
    },
    {
        "InterviewId": "6644",
        "InterviewEndDate": "2023-08-17 17:04:59",
        "InterviewState": "Complete",
        "Flight": "KM - Air Malta",
        "Dest": "MLA",
        "AirlineCode": "KM"
    },
    {
        "InterviewId": "6645",
        "InterviewEndDate": "2023-08-17 17:11:06",
        "InterviewState": "Complete",
        "Flight": "KM - Air Malta",
        "Dest": "MLA",
        "AirlineCode": "KM"
    },
    {
        "InterviewId": "6646",
        "InterviewEndDate": "2023-08-17 17:40:06",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "SPU",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6647",
        "InterviewEndDate": "2023-08-17 17:40:55",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "SPU",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6649",
        "InterviewEndDate": "2023-08-20 12:33:51",
        "InterviewState": "Complete",
        "Flight": "LH 2517",
        "Dest": "DUB",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6651",
        "InterviewEndDate": "2023-08-20 12:36:55",
        "InterviewState": "Complete",
        "Flight": "LH 2517",
        "Dest": "DUB",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6652",
        "InterviewEndDate": "2023-08-20 12:44:36",
        "InterviewState": "Complete",
        "Flight": "LH 2517",
        "Dest": "DUB",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6653",
        "InterviewEndDate": "2023-08-20 12:46:49",
        "InterviewState": "Complete",
        "Flight": "LH 1651",
        "Dest": "OTP",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6654",
        "InterviewEndDate": "2023-08-20 12:51:46",
        "InterviewState": "Complete",
        "Flight": "LH 1651",
        "Dest": "OTP",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6655",
        "InterviewEndDate": "2023-08-20 12:56:51",
        "InterviewState": "Complete",
        "Flight": "LH 1651",
        "Dest": "OTP",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6656",
        "InterviewEndDate": "2023-08-20 13:10:28",
        "InterviewState": "Complete",
        "Flight": "UA 760",
        "Dest": "DEN",
        "AirlineCode": "UA"
    },
    {
        "InterviewId": "6657",
        "InterviewEndDate": "2023-08-20 13:10:15",
        "InterviewState": "Complete",
        "Flight": "UA - United Airlines 760",
        "Dest": "DEN",
        "AirlineCode": "UA"
    },
    {
        "InterviewId": "6658",
        "InterviewEndDate": "2023-08-20 13:12:41",
        "InterviewState": "Complete",
        "Flight": "UA - United Airlines 760",
        "Dest": "DEN",
        "AirlineCode": "UA"
    },
    {
        "InterviewId": "6659",
        "InterviewEndDate": "2023-08-20 13:15:08",
        "InterviewState": "Complete",
        "Flight": "UA 760",
        "Dest": "DEN",
        "AirlineCode": "UA"
    },
    {
        "InterviewId": "6660",
        "InterviewEndDate": "2023-08-20 13:22:32",
        "InterviewState": "Complete",
        "Flight": "UA - United Airlines 760",
        "Dest": "DEN",
        "AirlineCode": "UA"
    },
    {
        "InterviewId": "6661",
        "InterviewEndDate": "2023-08-20 13:28:36",
        "InterviewState": "Complete",
        "Flight": "3U - Sichuan Airlines 760",
        "Dest": "DEN",
        "AirlineCode": "3U"
    },
    {
        "InterviewId": "6662",
        "InterviewEndDate": "2023-08-20 13:35:59",
        "InterviewState": "Complete",
        "Flight": "LH 1665",
        "Dest": "SBZ",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6663",
        "InterviewEndDate": "2023-08-20 13:39:47",
        "InterviewState": "Complete",
        "Flight": "LH 1657",
        "Dest": "TSR",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6664",
        "InterviewEndDate": "2023-08-20 13:42:32",
        "InterviewState": "Complete",
        "Flight": "LH 1667",
        "Dest": "TSR",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6665",
        "InterviewEndDate": "2023-08-20 13:51:56",
        "InterviewState": "Complete",
        "Flight": "LH 1751",
        "Dest": "ATH",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6667",
        "InterviewEndDate": "2023-08-20 13:57:49",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa 1751",
        "Dest": "ATH",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6668",
        "InterviewEndDate": "2023-08-20 14:01:36",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa 1751",
        "Dest": "ATH",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6669",
        "InterviewEndDate": "2023-08-20 14:00:30",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa1751",
        "Dest": "ATH",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6670",
        "InterviewEndDate": "2023-08-20 14:06:43",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa 1751",
        "Dest": "ATH",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6671",
        "InterviewEndDate": "2023-08-20 14:23:24",
        "InterviewState": "Complete",
        "Flight": "SK - SAS-Scandinavian Airlines System 2657",
        "Dest": "CPH",
        "AirlineCode": "SK"
    },
    {
        "InterviewId": "6672",
        "InterviewEndDate": "2023-08-20 14:30:57",
        "InterviewState": "Complete",
        "Flight": "MS - Egyptair 787",
        "Dest": "CAI",
        "AirlineCode": "MS"
    },
    {
        "InterviewId": "6673",
        "InterviewEndDate": "2023-08-20 14:39:27",
        "InterviewState": "Complete",
        "Flight": "LH 2231",
        "Dest": "CDG",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6674",
        "InterviewEndDate": "2023-08-20 14:43:18",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa 2231",
        "Dest": "CDG",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6675",
        "InterviewEndDate": "2023-08-20 14:45:10",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa 2231",
        "Dest": "CDG",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6676",
        "InterviewEndDate": "2023-08-20 14:48:15",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa 2231",
        "Dest": "CDG",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6678",
        "InterviewEndDate": "2023-08-20 14:59:55",
        "InterviewState": "Complete",
        "Flight": "EN - AirDolomiti 8309",
        "Dest": "OLB",
        "AirlineCode": "EN"
    },
    {
        "InterviewId": "6679",
        "InterviewEndDate": "2023-08-20 15:02:29",
        "InterviewState": "Complete",
        "Flight": "EN - AirDolomiti 8309",
        "Dest": "OLB",
        "AirlineCode": "EN"
    },
    {
        "InterviewId": "6680",
        "InterviewEndDate": "2023-08-20 15:03:58",
        "InterviewState": "Complete",
        "Flight": "EN 8309",
        "Dest": "OLB",
        "AirlineCode": "EN"
    },
    {
        "InterviewId": "6681",
        "InterviewEndDate": "2023-08-20 15:18:47",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa 459",
        "Dest": "SFO",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6682",
        "InterviewEndDate": "2023-08-20 15:17:31",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa 459",
        "Dest": "SFO",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6683",
        "InterviewEndDate": "2023-08-20 15:26:24",
        "InterviewState": "Complete",
        "Flight": "LH 459",
        "Dest": "SFO",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6684",
        "InterviewEndDate": "2023-08-20 15:34:55",
        "InterviewState": "Complete",
        "Flight": "LH 2263",
        "Dest": "MRS",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6686",
        "InterviewEndDate": "2023-08-20 15:38:01",
        "InterviewState": "Complete",
        "Flight": "LH 2263",
        "Dest": "MRS",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6687",
        "InterviewEndDate": "2023-08-20 15:38:58",
        "InterviewState": "Complete",
        "Flight": "LH 2273",
        "Dest": "MRS",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6688",
        "InterviewEndDate": "2023-08-20 15:45:34",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa 2263",
        "Dest": "MRS",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6689",
        "InterviewEndDate": "2023-08-20 15:50:03",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa 2263",
        "Dest": "MRS",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6690",
        "InterviewEndDate": "2023-08-24 16:12:42",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "BSL",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6691",
        "InterviewEndDate": "2023-08-24 16:12:50",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "BSL",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6692",
        "InterviewEndDate": "2023-08-24 16:19:51",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "PMI",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6693",
        "InterviewEndDate": "2023-08-24 16:29:08",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "ICN",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6694",
        "InterviewEndDate": "2023-08-24 16:47:56",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "DUS",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6695",
        "InterviewEndDate": "2023-08-24 16:47:53",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "DUS",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6696",
        "InterviewEndDate": "2023-08-24 17:02:12",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "BCN",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6697",
        "InterviewEndDate": "2023-08-24 17:02:09",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa AG",
        "Dest": "BCN",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6698",
        "InterviewEndDate": "2023-08-24 17:31:26",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "MXP",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6699",
        "InterviewEndDate": "2023-08-24 17:31:28",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "MXP",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "6700",
        "InterviewEndDate": "2023-08-26 08:47:05",
        "InterviewState": "Complete",
        "Flight": "",
        "Dest": "AYT",
        "AirlineCode": ""
    },
    {
        "InterviewId": "6701",
        "InterviewEndDate": "2023-08-26 08:51:42",
        "InterviewState": "Complete",
        "Flight": "",
        "Dest": "AYT",
        "AirlineCode": ""
    },
    {
        "InterviewId": "6702",
        "InterviewEndDate": "2023-08-26 08:50:20",
        "InterviewState": "Complete",
        "Flight": "",
        "Dest": "AYT",
        "AirlineCode": ""
    },
    {
        "InterviewId": "6703",
        "InterviewEndDate": "2023-08-26 08:48:28",
        "InterviewState": "Complete",
        "Flight": "",
        "Dest": "AYT",
        "AirlineCode": ""
    },
    {
        "InterviewId": "6704",
        "InterviewEndDate": "2023-08-26 08:55:23",
        "InterviewState": "Complete",
        "Flight": "",
        "Dest": "AYT",
        "AirlineCode": ""
    },
    {
        "InterviewId": "6706",
        "InterviewEndDate": "2023-08-26 09:13:35",
        "InterviewState": "Complete",
        "Flight": "AY - Finnair",
        "Dest": "HEL",
        "AirlineCode": "AY"
    },
    {
        "InterviewId": "6707",
        "InterviewEndDate": "2023-08-26 09:12:27",
        "InterviewState": "Complete",
        "Flight": "AY - Finnair",
        "Dest": "HEL",
        "AirlineCode": "AY"
    },
    {
        "InterviewId": "6708",
        "InterviewEndDate": "2023-08-26 09:11:40",
        "InterviewState": "Complete",
        "Flight": "AY - Finnair",
        "Dest": "HEL",
        "AirlineCode": "AY"
    },
    {
        "InterviewId": "6709",
        "InterviewEndDate": "2023-08-26 09:14:23",
        "InterviewState": "Complete",
        "Flight": "AY - Finnair",
        "Dest": "HEL",
        "AirlineCode": "AY"
    },
    {
        "InterviewId": "6710",
        "InterviewEndDate": "2023-08-26 09:22:25",
        "InterviewState": "Complete",
        "Flight": "KL - KLM Royal Dutch Airlines",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "6711",
        "InterviewEndDate": "2023-08-26 09:20:21",
        "InterviewState": "Complete",
        "Flight": "KL - KLM Royal Dutch Airlines",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "6712",
        "InterviewEndDate": "2023-08-26 09:20:04",
        "InterviewState": "Complete",
        "Flight": "KL - KLM Royal Dutch Airlines",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "6713",
        "InterviewEndDate": "2023-08-26 09:21:58",
        "InterviewState": "Complete",
        "Flight": "KL - KLM Royal Dutch Airlines",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "6715",
        "InterviewEndDate": "2023-08-26 09:29:30",
        "InterviewState": "Complete",
        "Flight": "EW - Eurowings",
        "Dest": "PMI",
        "AirlineCode": "EW"
    },
    {
        "InterviewId": "6716",
        "InterviewEndDate": "2023-08-26 09:30:17",
        "InterviewState": "Complete",
        "Flight": "EW - Eurowings",
        "Dest": "PMI",
        "AirlineCode": "EW"
    },
    {
        "InterviewId": "6717",
        "InterviewEndDate": "2023-08-26 09:31:09",
        "InterviewState": "Complete",
        "Flight": "EW - Eurowings",
        "Dest": "PMI",
        "AirlineCode": "EW"
    },
    {
        "InterviewId": "6718",
        "InterviewEndDate": "2023-08-26 09:28:22",
        "InterviewState": "Complete",
        "Flight": "EW - Eurowings",
        "Dest": "PMI",
        "AirlineCode": "EW"
    }
]    

 `;