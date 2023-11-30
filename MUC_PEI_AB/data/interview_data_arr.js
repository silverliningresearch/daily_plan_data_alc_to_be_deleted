let interview_data_arr_raw = `[
    {
        "InterviewId": "7106",
        "InterviewEndDate": "2023-10-05 16:33:45",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "BCN",
        "AirlineCode": "LH",
        "download_time": "30-11-2023 02:50:41"
    },
    {
        "InterviewId": "7107",
        "InterviewEndDate": "2023-10-05 16:17:26",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "SFO",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7108",
        "InterviewEndDate": "2023-10-05 16:25:08",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "BER",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7109",
        "InterviewEndDate": "2023-10-05 16:29:52",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "BRE",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7110",
        "InterviewEndDate": "2023-10-05 17:21:10",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "ZRH",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7111",
        "InterviewEndDate": "2023-10-05 18:05:41",
        "InterviewState": "Complete",
        "Flight": "A3 - Aegean Airlines",
        "Dest": "ATH",
        "AirlineCode": "A3"
    },
    {
        "InterviewId": "7112",
        "InterviewEndDate": "2023-10-05 17:11:35",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "SPU",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7113",
        "InterviewEndDate": "2023-10-05 17:39:46",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "HAM",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7114",
        "InterviewEndDate": "2023-10-05 17:41:11",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "STR",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7115",
        "InterviewEndDate": "2023-10-05 17:51:01",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "BEG",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7116",
        "InterviewEndDate": "2023-10-05 18:10:10",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "LHR",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7117",
        "InterviewEndDate": "2023-10-05 18:24:40",
        "InterviewState": "Complete",
        "Flight": "EN - AirDolomiti",
        "Dest": "FLR",
        "AirlineCode": "EN"
    },
    {
        "InterviewId": "7118",
        "InterviewEndDate": "2023-10-05 18:45:16",
        "InterviewState": "Complete",
        "Flight": "TP - TAP Air Portugal",
        "Dest": "LIS",
        "AirlineCode": "TP"
    },
    {
        "InterviewId": "7119",
        "InterviewEndDate": "2023-10-05 19:04:27",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7120",
        "InterviewEndDate": "2023-10-05 19:16:05",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "ORY",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7121",
        "InterviewEndDate": "2023-10-05 20:16:29",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "PMI",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7122",
        "InterviewEndDate": "2023-10-05 19:43:40",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "BIO",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7123",
        "InterviewEndDate": "2023-10-05 20:00:29",
        "InterviewState": "Complete",
        "Flight": "OU - Croatia Airlines",
        "Dest": "SPU",
        "AirlineCode": "OU"
    },
    {
        "InterviewId": "7124",
        "InterviewEndDate": "2023-10-05 20:08:58",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "BHX",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7125",
        "InterviewEndDate": "2023-10-05 20:22:22",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "DUS",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7126",
        "InterviewEndDate": "2023-10-06 14:27:31",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "BCN",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7127",
        "InterviewEndDate": "2023-10-06 14:28:16",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "BCN",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7128",
        "InterviewEndDate": "2023-10-06 14:29:02",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "BCN",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7129",
        "InterviewEndDate": "2023-10-06 14:45:27",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "DBV",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7130",
        "InterviewEndDate": "2023-10-06 14:37:01",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "DBV",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7131",
        "InterviewEndDate": "2023-10-06 15:02:21",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "LHR",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7132",
        "InterviewEndDate": "2023-10-06 14:53:15",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "DBV",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7133",
        "InterviewEndDate": "2023-10-06 15:08:51",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "LHR",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7135",
        "InterviewEndDate": "2023-10-06 15:20:32",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "HND",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7136",
        "InterviewEndDate": "2023-10-06 15:22:17",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "HND",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7137",
        "InterviewEndDate": "2023-10-06 15:34:05",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "AMS",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7138",
        "InterviewEndDate": "2023-10-06 15:48:52",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "BIO",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7140",
        "InterviewEndDate": "2023-10-06 16:06:19",
        "InterviewState": "Complete",
        "Flight": "SK - SAS-Scandinavian Airlines System",
        "Dest": "CPH",
        "AirlineCode": "SK"
    },
    {
        "InterviewId": "7141",
        "InterviewEndDate": "2023-10-06 16:27:19",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "ICN",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7142",
        "InterviewEndDate": "2023-10-06 16:30:23",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "ICN",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7143",
        "InterviewEndDate": "2023-10-06 16:50:04",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7144",
        "InterviewEndDate": "2023-10-06 16:57:34",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "STR",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7145",
        "InterviewEndDate": "2023-10-06 17:11:22",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "BUD",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7146",
        "InterviewEndDate": "2023-10-06 17:22:49",
        "InterviewState": "Complete",
        "Flight": "BT - Air Baltic",
        "Dest": "RIX",
        "AirlineCode": "BT"
    },
    {
        "InterviewId": "7147",
        "InterviewEndDate": "2023-10-06 17:21:50",
        "InterviewState": "Complete",
        "Flight": "BT - Air Baltic",
        "Dest": "RIX",
        "AirlineCode": "BT"
    },
    {
        "InterviewId": "7148",
        "InterviewEndDate": "2023-10-06 17:33:29",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "WAW",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7149",
        "InterviewEndDate": "2023-10-06 17:37:40",
        "InterviewState": "Complete",
        "Flight": "TP - TAP Air Portugal",
        "Dest": "LIS",
        "AirlineCode": "TP"
    },
    {
        "InterviewId": "7150",
        "InterviewEndDate": "2023-10-06 17:53:23",
        "InterviewState": "Complete",
        "Flight": "A3 - Aegean Airlines",
        "Dest": "SKG",
        "AirlineCode": "A3"
    },
    {
        "InterviewId": "7151",
        "InterviewEndDate": "2023-10-06 18:04:20",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7152",
        "InterviewEndDate": "2023-10-06 18:10:11",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7153",
        "InterviewEndDate": "2023-10-06 18:09:25",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7155",
        "InterviewEndDate": "2023-10-06 18:20:45",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "NAP",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7158",
        "InterviewEndDate": "2023-10-07 10:36:35",
        "InterviewState": "Complete",
        "Flight": "PC - Pegasus Airlines",
        "Dest": "SAW",
        "AirlineCode": "PC"
    },
    {
        "InterviewId": "7159",
        "InterviewEndDate": "2023-10-07 10:27:39",
        "InterviewState": "Complete",
        "Flight": "PC - Pegasus Airlines",
        "Dest": "SAW",
        "AirlineCode": "PC"
    },
    {
        "InterviewId": "7160",
        "InterviewEndDate": "2023-10-07 10:24:45",
        "InterviewState": "Complete",
        "Flight": "PC - Pegasus Airlines",
        "Dest": "SAW",
        "AirlineCode": "PC"
    },
    {
        "InterviewId": "7161",
        "InterviewEndDate": "2023-10-07 10:31:47",
        "InterviewState": "Complete",
        "Flight": "PC - Pegasus Airlines",
        "Dest": "SAW",
        "AirlineCode": "PC"
    },
    {
        "InterviewId": "7162",
        "InterviewEndDate": "2023-10-07 10:32:53",
        "InterviewState": "Complete",
        "Flight": "PC - Pegasus Airlines",
        "Dest": "SAW",
        "AirlineCode": "PC"
    },
    {
        "InterviewId": "7163",
        "InterviewEndDate": "2023-10-07 10:39:46",
        "InterviewState": "Complete",
        "Flight": "PC - Pegasus Airlines",
        "Dest": "SAW",
        "AirlineCode": "PC"
    },
    {
        "InterviewId": "7164",
        "InterviewEndDate": "2023-10-07 10:41:01",
        "InterviewState": "Complete",
        "Flight": "PC - Pegasus Airlines",
        "Dest": "SAW",
        "AirlineCode": "PC"
    },
    {
        "InterviewId": "7165",
        "InterviewEndDate": "2023-10-07 10:45:44",
        "InterviewState": "Complete",
        "Flight": "PC - Pegasus Airlines",
        "Dest": "SAW",
        "AirlineCode": "PC"
    },
    {
        "InterviewId": "7166",
        "InterviewEndDate": "2023-10-07 10:47:55",
        "InterviewState": "Complete",
        "Flight": "PC - Pegasus Airlines",
        "Dest": "SAW",
        "AirlineCode": "PC"
    },
    {
        "InterviewId": "7167",
        "InterviewEndDate": "2023-10-07 10:50:49",
        "InterviewState": "Complete",
        "Flight": "PC - Pegasus Airlines",
        "Dest": "SAW",
        "AirlineCode": "PC"
    },
    {
        "InterviewId": "7168",
        "InterviewEndDate": "2023-10-07 10:55:49",
        "InterviewState": "Complete",
        "Flight": "TK - Turkish Airlines",
        "Dest": "IST",
        "AirlineCode": "TK"
    },
    {
        "InterviewId": "7170",
        "InterviewEndDate": "2023-10-07 10:57:56",
        "InterviewState": "Complete",
        "Flight": "PC - Pegasus Airlines",
        "Dest": "SAW",
        "AirlineCode": "PC"
    },
    {
        "InterviewId": "7171",
        "InterviewEndDate": "2023-10-07 11:08:50",
        "InterviewState": "Complete",
        "Flight": "XQ - Sun Express",
        "Dest": "AYT",
        "AirlineCode": "XQ"
    },
    {
        "InterviewId": "7174",
        "InterviewEndDate": "2023-10-07 11:37:26",
        "InterviewState": "Complete",
        "Flight": "XQ - Sun Express",
        "Dest": "AYT",
        "AirlineCode": "XQ"
    },
    {
        "InterviewId": "7176",
        "InterviewEndDate": "2023-10-08 06:17:27",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "EMPTY",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7177",
        "InterviewEndDate": "2023-10-08 06:19:35",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "TBS",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7178",
        "InterviewEndDate": "2023-10-08 06:19:40",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "TBS",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7179",
        "InterviewEndDate": "2023-10-08 06:27:26",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "JFK",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7180",
        "InterviewEndDate": "2023-10-08 06:27:04",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "JFK",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7181",
        "InterviewEndDate": "2023-10-08 06:28:34",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "JFK",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7182",
        "InterviewEndDate": "2023-10-08 06:35:48",
        "InterviewState": "Complete",
        "Flight": "UA - United Airlines",
        "Dest": "EWR",
        "AirlineCode": "UA"
    },
    {
        "InterviewId": "7183",
        "InterviewEndDate": "2023-10-08 06:39:29",
        "InterviewState": "Complete",
        "Flight": "UA - United Airlines",
        "Dest": "EWR",
        "AirlineCode": "UA"
    },
    {
        "InterviewId": "7185",
        "InterviewEndDate": "2023-10-08 06:41:14",
        "InterviewState": "Complete",
        "Flight": "UA - United Airlines",
        "Dest": "EWR",
        "AirlineCode": "UA"
    },
    {
        "InterviewId": "7186",
        "InterviewEndDate": "2023-10-08 06:44:31",
        "InterviewState": "Complete",
        "Flight": "UA - United Airlines",
        "Dest": "EWR",
        "AirlineCode": "UA"
    },
    {
        "InterviewId": "7188",
        "InterviewEndDate": "2023-10-08 11:59:06",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "SAN",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7189",
        "InterviewEndDate": "2023-10-08 12:05:19",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "SAN",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7190",
        "InterviewEndDate": "2023-10-08 12:00:51",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "MBJ",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7191",
        "InterviewEndDate": "2023-10-08 12:02:59",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "SAN",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7192",
        "InterviewEndDate": "2023-10-08 12:08:10",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "SAN",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7194",
        "InterviewEndDate": "2023-10-08 12:33:44",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "SOF",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7195",
        "InterviewEndDate": "2023-10-08 12:50:06",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "CGN",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7196",
        "InterviewEndDate": "2023-10-08 12:30:55",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "SOF",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7197",
        "InterviewEndDate": "2023-10-08 12:51:14",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "CGN",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7198",
        "InterviewEndDate": "2023-10-08 12:52:06",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "CGN",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7199",
        "InterviewEndDate": "2023-10-08 13:15:35",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "ZRH",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7200",
        "InterviewEndDate": "2023-10-08 13:16:53",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "ZRH",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7201",
        "InterviewEndDate": "2023-10-08 13:17:45",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "ZRH",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7202",
        "InterviewEndDate": "2023-10-08 13:37:29",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "SBZ",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7203",
        "InterviewEndDate": "2023-10-08 13:39:10",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "SBZ",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7204",
        "InterviewEndDate": "2023-10-08 13:38:58",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "SBZ",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7205",
        "InterviewEndDate": "2023-10-09 10:28:24",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "HAM",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7206",
        "InterviewEndDate": "2023-10-09 10:35:11",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "HAM",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7207",
        "InterviewEndDate": "2023-10-09 10:28:39",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "HAM",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7208",
        "InterviewEndDate": "2023-10-09 10:39:36",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "HAM",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7209",
        "InterviewEndDate": "2023-10-09 10:44:46",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "LHR",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7210",
        "InterviewEndDate": "2023-10-09 10:48:18",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "LHR",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7211",
        "InterviewEndDate": "2023-10-09 10:46:51",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "LHR",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7212",
        "InterviewEndDate": "2023-10-09 11:16:50",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "IAD",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7213",
        "InterviewEndDate": "2023-10-09 11:20:25",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "IAD",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7214",
        "InterviewEndDate": "2023-10-09 11:18:47",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "IAD",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7215",
        "InterviewEndDate": "2023-10-09 11:33:12",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "YVR",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7216",
        "InterviewEndDate": "2023-10-09 11:33:22",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "YVR",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7217",
        "InterviewEndDate": "2023-10-09 11:33:51",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "YVR",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7218",
        "InterviewEndDate": "2023-10-09 12:05:00",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "LAX",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7219",
        "InterviewEndDate": "2023-10-09 12:04:18",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "LAX",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7220",
        "InterviewEndDate": "2023-10-09 12:06:29",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "LAX",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7221",
        "InterviewEndDate": "2023-10-09 12:29:43",
        "InterviewState": "Complete",
        "Flight": "UA - United Airlines",
        "Dest": "DEN",
        "AirlineCode": "UA"
    },
    {
        "InterviewId": "7222",
        "InterviewEndDate": "2023-10-09 12:29:28",
        "InterviewState": "Complete",
        "Flight": "UA - United Airlines",
        "Dest": "DEN",
        "AirlineCode": "UA"
    },
    {
        "InterviewId": "7223",
        "InterviewEndDate": "2023-10-09 12:31:42",
        "InterviewState": "Complete",
        "Flight": "UA - United Airlines",
        "Dest": "DEN",
        "AirlineCode": "UA"
    },
    {
        "InterviewId": "7224",
        "InterviewEndDate": "2023-10-09 12:34:33",
        "InterviewState": "Complete",
        "Flight": "UA - United Airlines",
        "Dest": "DEN",
        "AirlineCode": "UA"
    },
    {
        "InterviewId": "7225",
        "InterviewEndDate": "2023-10-09 12:35:15",
        "InterviewState": "Complete",
        "Flight": "UA - United Airlines",
        "Dest": "DEN",
        "AirlineCode": "UA"
    },
    {
        "InterviewId": "7226",
        "InterviewEndDate": "2023-10-09 12:42:50",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "SOF",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7228",
        "InterviewEndDate": "2023-10-09 12:42:25",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "SOF",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7230",
        "InterviewEndDate": "2023-10-10 06:45:25",
        "InterviewState": "Complete",
        "Flight": "UA - United Airlines",
        "Dest": "IAD",
        "AirlineCode": "UA"
    },
    {
        "InterviewId": "7231",
        "InterviewEndDate": "2023-10-10 06:45:27",
        "InterviewState": "Complete",
        "Flight": "UA - United Airlines",
        "Dest": "IAD",
        "AirlineCode": "UA"
    },
    {
        "InterviewId": "7232",
        "InterviewEndDate": "2023-10-10 06:47:48",
        "InterviewState": "Complete",
        "Flight": "UA - United Airlines",
        "Dest": "IAD",
        "AirlineCode": "UA"
    },
    {
        "InterviewId": "7233",
        "InterviewEndDate": "2023-10-10 06:54:44",
        "InterviewState": "Complete",
        "Flight": "UNITED AIRLINES",
        "Dest": "IAD",
        "AirlineCode": "UNITED"
    },
    {
        "InterviewId": "7234",
        "InterviewEndDate": "2023-10-10 06:54:11",
        "InterviewState": "Complete",
        "Flight": "UA - United Airlines",
        "Dest": "IAD",
        "AirlineCode": "UA"
    },
    {
        "InterviewId": "7235",
        "InterviewEndDate": "2023-10-10 06:53:04",
        "InterviewState": "Complete",
        "Flight": "UA - United Airlines",
        "Dest": "IAD",
        "AirlineCode": "UA"
    },
    {
        "InterviewId": "7238",
        "InterviewEndDate": "2023-10-10 07:07:32",
        "InterviewState": "Complete",
        "Flight": "AC - Air Canada",
        "Dest": "YYZ",
        "AirlineCode": "AC"
    },
    {
        "InterviewId": "7239",
        "InterviewEndDate": "2023-10-10 07:02:47",
        "InterviewState": "Complete",
        "Flight": "Swiss airkines",
        "Dest": "ZRH",
        "AirlineCode": "Swiss"
    },
    {
        "InterviewId": "7240",
        "InterviewEndDate": "2023-10-10 07:16:51",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "CAI",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7241",
        "InterviewEndDate": "2023-10-10 07:27:11",
        "InterviewState": "Complete",
        "Flight": "BR - Eva Airways",
        "Dest": "TPE",
        "AirlineCode": "BR"
    },
    {
        "InterviewId": "7243",
        "InterviewEndDate": "2023-10-10 16:22:10",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "BRE",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7244",
        "InterviewEndDate": "2023-10-10 16:15:58",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "ATH",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7245",
        "InterviewEndDate": "2023-10-10 18:09:54",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "SFO",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7246",
        "InterviewEndDate": "2023-10-10 16:53:50",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FCO",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7247",
        "InterviewEndDate": "2023-10-10 16:29:28",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "MAD",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7249",
        "InterviewEndDate": "2023-10-10 17:02:48",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "LCA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7250",
        "InterviewEndDate": "2023-10-10 17:00:09",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "AGP",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7251",
        "InterviewEndDate": "2023-10-10 17:58:45",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "SPU",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7252",
        "InterviewEndDate": "2023-10-10 17:09:03",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "LCA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7253",
        "InterviewEndDate": "2023-10-10 17:29:47",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "WAW",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7254",
        "InterviewEndDate": "2023-10-10 17:44:27",
        "InterviewState": "Complete",
        "Flight": "EN - AirDolomiti",
        "Dest": "LIN",
        "AirlineCode": "EN"
    },
    {
        "InterviewId": "7255",
        "InterviewEndDate": "2023-10-10 19:07:29",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "BCN",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7257",
        "InterviewEndDate": "2023-10-10 18:37:32",
        "InterviewState": "Complete",
        "Flight": "BT - Air Baltic",
        "Dest": "VNO",
        "AirlineCode": "BT"
    },
    {
        "InterviewId": "7258",
        "InterviewEndDate": "2023-10-10 18:56:36",
        "InterviewState": "Complete",
        "Flight": "A3 - Aegean Airlines",
        "Dest": "SKG",
        "AirlineCode": "A3"
    },
    {
        "InterviewId": "7259",
        "InterviewEndDate": "2023-10-10 19:42:16",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "ARN",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7260",
        "InterviewEndDate": "2023-10-10 19:39:11",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "IBZ",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7261",
        "InterviewEndDate": "2023-10-10 20:10:36",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "DUS",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7262",
        "InterviewEndDate": "2023-10-10 19:59:26",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "DUS",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7263",
        "InterviewEndDate": "2023-10-10 20:03:01",
        "InterviewState": "Complete",
        "Flight": "LO - LOT Polish Airlines",
        "Dest": "WAW",
        "AirlineCode": "LO"
    },
    {
        "InterviewId": "7264",
        "InterviewEndDate": "2023-10-10 20:16:25",
        "InterviewState": "Complete",
        "Flight": "LO - LOT Polish Airlines",
        "Dest": "WAW",
        "AirlineCode": "LO"
    },
    {
        "InterviewId": "7266",
        "InterviewEndDate": "2023-10-12 09:16:29",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "DUS",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7268",
        "InterviewEndDate": "2023-10-12 09:15:22",
        "InterviewState": "Complete",
        "Flight": "Luftansia",
        "Dest": "CDG",
        "AirlineCode": "Luftansia"
    },
    {
        "InterviewId": "7269",
        "InterviewEndDate": "2023-10-12 09:21:04",
        "InterviewState": "Complete",
        "Flight": "SN - Brussels Airlines",
        "Dest": "EMPTY",
        "AirlineCode": "SN"
    },
    {
        "InterviewId": "7270",
        "InterviewEndDate": "2023-10-12 09:25:18",
        "InterviewState": "Complete",
        "Flight": "Agegean airlines",
        "Dest": "HER",
        "AirlineCode": "Agegean"
    },
    {
        "InterviewId": "7271",
        "InterviewEndDate": "2023-10-12 09:31:29",
        "InterviewState": "Complete",
        "Flight": "A3 - Aegean Airlines",
        "Dest": "HER",
        "AirlineCode": "A3"
    },
    {
        "InterviewId": "7273",
        "InterviewEndDate": "2023-10-12 09:34:55",
        "InterviewState": "Complete",
        "Flight": "A3 - Aegean Airlines",
        "Dest": "HER",
        "AirlineCode": "A3"
    },
    {
        "InterviewId": "7274",
        "InterviewEndDate": "2023-10-12 09:33:13",
        "InterviewState": "Complete",
        "Flight": "A3 - Aegean Airlines",
        "Dest": "HER",
        "AirlineCode": "A3"
    },
    {
        "InterviewId": "7275",
        "InterviewEndDate": "2023-10-12 09:43:37",
        "InterviewState": "Complete",
        "Flight": "KM - Air Malta",
        "Dest": "MLA",
        "AirlineCode": "KM"
    },
    {
        "InterviewId": "7276",
        "InterviewEndDate": "2023-10-12 09:40:36",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "LIN",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7277",
        "InterviewEndDate": "2023-10-12 09:43:25",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "LUX",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7278",
        "InterviewEndDate": "2023-10-12 09:51:42",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FLR",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7279",
        "InterviewEndDate": "2023-10-12 10:08:06",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "ORY",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7280",
        "InterviewEndDate": "2023-10-12 09:58:30",
        "InterviewState": "Complete",
        "Flight": "EN - AirDolomiti",
        "Dest": "ORY",
        "AirlineCode": "EN"
    },
    {
        "InterviewId": "7281",
        "InterviewEndDate": "2023-10-12 09:56:08",
        "InterviewState": "Complete",
        "Flight": "Air Dolomiti",
        "Dest": "ORY",
        "AirlineCode": "Air"
    },
    {
        "InterviewId": "7282",
        "InterviewEndDate": "2023-10-12 14:33:38",
        "InterviewState": "Complete",
        "Flight": "DE - Condor Flugdienst",
        "Dest": "FNC",
        "AirlineCode": "DE"
    },
    {
        "InterviewId": "7283",
        "InterviewEndDate": "2023-10-12 14:33:19",
        "InterviewState": "Complete",
        "Flight": "DE - Condor Flugdienst",
        "Dest": "FNC",
        "AirlineCode": "DE"
    },
    {
        "InterviewId": "7284",
        "InterviewEndDate": "2023-10-12 14:37:38",
        "InterviewState": "Complete",
        "Flight": "DE - Condor Flugdienst",
        "Dest": "FNC",
        "AirlineCode": "DE"
    },
    {
        "InterviewId": "7285",
        "InterviewEndDate": "2023-10-12 15:00:50",
        "InterviewState": "Complete",
        "Flight": "EW - Eurowings",
        "Dest": "HAM",
        "AirlineCode": "EW"
    },
    {
        "InterviewId": "7286",
        "InterviewEndDate": "2023-10-12 15:00:41",
        "InterviewState": "Complete",
        "Flight": "EW - Eurowings",
        "Dest": "HAM",
        "AirlineCode": "EW"
    },
    {
        "InterviewId": "7287",
        "InterviewEndDate": "2023-10-12 15:13:57",
        "InterviewState": "Complete",
        "Flight": "EW - Eurowings",
        "Dest": "CGN",
        "AirlineCode": "EW"
    },
    {
        "InterviewId": "7288",
        "InterviewEndDate": "2023-10-12 15:19:12",
        "InterviewState": "Complete",
        "Flight": "EW - Eurowings",
        "Dest": "HAM",
        "AirlineCode": "EW"
    },
    {
        "InterviewId": "7289",
        "InterviewEndDate": "2023-10-12 15:47:10",
        "InterviewState": "Complete",
        "Flight": "AF - Air France",
        "Dest": "CDG",
        "AirlineCode": "AF"
    },
    {
        "InterviewId": "7290",
        "InterviewEndDate": "2023-10-12 16:06:49",
        "InterviewState": "Complete",
        "Flight": "UX - Air Europa",
        "Dest": "MAD",
        "AirlineCode": "UX"
    },
    {
        "InterviewId": "7291",
        "InterviewEndDate": "2023-10-12 16:06:46",
        "InterviewState": "Complete",
        "Flight": "UX - Air Europa",
        "Dest": "MAD",
        "AirlineCode": "UX"
    },
    {
        "InterviewId": "7292",
        "InterviewEndDate": "2023-10-12 16:30:24",
        "InterviewState": "Complete",
        "Flight": "AY - Finnair",
        "Dest": "HEL",
        "AirlineCode": "AY"
    },
    {
        "InterviewId": "7293",
        "InterviewEndDate": "2023-10-12 16:38:30",
        "InterviewState": "Complete",
        "Flight": "AY - Finnair",
        "Dest": "HEL",
        "AirlineCode": "AY"
    },
    {
        "InterviewId": "7294",
        "InterviewEndDate": "2023-10-12 16:51:52",
        "InterviewState": "Complete",
        "Flight": "TK - Turkish Airlines",
        "Dest": "AYT",
        "AirlineCode": "TK"
    },
    {
        "InterviewId": "7295",
        "InterviewEndDate": "2023-10-12 16:57:28",
        "InterviewState": "Complete",
        "Flight": "TK - Turkish Airlines",
        "Dest": "AYT",
        "AirlineCode": "TK"
    },
    {
        "InterviewId": "7296",
        "InterviewEndDate": "2023-10-12 17:27:41",
        "InterviewState": "Complete",
        "Flight": "IB - Iberia",
        "Dest": "MAD",
        "AirlineCode": "IB"
    },
    {
        "InterviewId": "7297",
        "InterviewEndDate": "2023-10-12 17:27:44",
        "InterviewState": "Complete",
        "Flight": "IB - Iberia",
        "Dest": "MAD",
        "AirlineCode": "IB"
    },
    {
        "InterviewId": "7298",
        "InterviewEndDate": "2023-10-12 17:31:42",
        "InterviewState": "Complete",
        "Flight": "IB - Iberia",
        "Dest": "MAD",
        "AirlineCode": "IB"
    },
    {
        "InterviewId": "7299",
        "InterviewEndDate": "2023-10-12 18:23:47",
        "InterviewState": "Complete",
        "Flight": "EW - Eurowings",
        "Dest": "DUS",
        "AirlineCode": "EW"
    },
    {
        "InterviewId": "7300",
        "InterviewEndDate": "2023-10-12 18:23:41",
        "InterviewState": "Complete",
        "Flight": "EW - Eurowings",
        "Dest": "DUS",
        "AirlineCode": "EW"
    },
    {
        "InterviewId": "7301",
        "InterviewEndDate": "2023-10-12 18:34:38",
        "InterviewState": "Complete",
        "Flight": "VY - Vueling",
        "Dest": "BCN",
        "AirlineCode": "VY"
    },
    {
        "InterviewId": "7302",
        "InterviewEndDate": "2023-10-12 18:34:44",
        "InterviewState": "Complete",
        "Flight": "VY - Vueling",
        "Dest": "BCN",
        "AirlineCode": "VY"
    },
    {
        "InterviewId": "7303",
        "InterviewEndDate": "2023-10-13 08:43:24",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "BER",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7304",
        "InterviewEndDate": "2023-10-13 08:45:12",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "BER",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7305",
        "InterviewEndDate": "2023-10-13 08:54:59",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "BOS",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7306",
        "InterviewEndDate": "2023-10-13 08:59:37",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "BIO",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7307",
        "InterviewEndDate": "2023-10-13 09:01:25",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "BIO",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7308",
        "InterviewEndDate": "2023-10-13 09:14:42",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "BRU",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7309",
        "InterviewEndDate": "2023-10-13 09:08:06",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "BRU",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7310",
        "InterviewEndDate": "2023-10-13 09:20:24",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "YYZ",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7312",
        "InterviewEndDate": "2023-10-13 09:37:50",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "YUL",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7313",
        "InterviewEndDate": "2023-10-13 11:11:59",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "IAD",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7314",
        "InterviewEndDate": "2023-10-13 09:40:10",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "YUL",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7315",
        "InterviewEndDate": "2023-10-13 09:45:56",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "BRE",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7316",
        "InterviewEndDate": "2023-10-13 09:47:48",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "BRE",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7317",
        "InterviewEndDate": "2023-10-13 10:51:59",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "HAM",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7318",
        "InterviewEndDate": "2023-10-13 10:57:01",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FCO",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7319",
        "InterviewEndDate": "2023-10-13 11:06:05",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FCO",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7320",
        "InterviewEndDate": "2023-10-13 11:10:34",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "AMS",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7321",
        "InterviewEndDate": "2023-10-14 06:15:07",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "TBS",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7322",
        "InterviewEndDate": "2023-10-14 06:18:22",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "TBS",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7323",
        "InterviewEndDate": "2023-10-14 06:16:22",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "TBS",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7324",
        "InterviewEndDate": "2023-10-14 06:36:50",
        "InterviewState": "Complete",
        "Flight": "UA - United Airlines",
        "Dest": "EWR",
        "AirlineCode": "UA"
    },
    {
        "InterviewId": "7325",
        "InterviewEndDate": "2023-10-14 06:39:40",
        "InterviewState": "Complete",
        "Flight": "UA - United Airlines",
        "Dest": "EWR",
        "AirlineCode": "UA"
    },
    {
        "InterviewId": "7326",
        "InterviewEndDate": "2023-10-14 06:38:03",
        "InterviewState": "Complete",
        "Flight": "UA - United Airlines",
        "Dest": "EWR",
        "AirlineCode": "UA"
    },
    {
        "InterviewId": "7327",
        "InterviewEndDate": "2023-10-14 06:46:02",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "ARN",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7328",
        "InterviewEndDate": "2023-10-14 06:47:21",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "ARN",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7329",
        "InterviewEndDate": "2023-10-14 06:46:45",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "ARN",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7330",
        "InterviewEndDate": "2023-10-14 07:25:33",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "CDG",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7331",
        "InterviewEndDate": "2023-10-14 07:27:01",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "CDG",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7332",
        "InterviewEndDate": "2023-10-14 07:31:43",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "CDG",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7333",
        "InterviewEndDate": "2023-10-14 07:32:18",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "CDG",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7336",
        "InterviewEndDate": "2023-10-14 07:51:11",
        "InterviewState": "Complete",
        "Flight": "A3 - Aegean Airlines",
        "Dest": "HER",
        "AirlineCode": "A3"
    },
    {
        "InterviewId": "7337",
        "InterviewEndDate": "2023-10-14 07:54:44",
        "InterviewState": "Complete",
        "Flight": "A3 - Aegean Airlines",
        "Dest": "HER",
        "AirlineCode": "A3"
    },
    {
        "InterviewId": "7338",
        "InterviewEndDate": "2023-10-14 07:51:17",
        "InterviewState": "Complete",
        "Flight": "A3 - Aegean Airlines",
        "Dest": "HER",
        "AirlineCode": "A3"
    },
    {
        "InterviewId": "7339",
        "InterviewEndDate": "2023-10-14 07:58:53",
        "InterviewState": "Complete",
        "Flight": "A3 - Aegean Airlines",
        "Dest": "HER",
        "AirlineCode": "A3"
    },
    {
        "InterviewId": "7340",
        "InterviewEndDate": "2023-10-14 08:25:06",
        "InterviewState": "Complete",
        "Flight": "UA - United Airlines",
        "Dest": "IAH",
        "AirlineCode": "UA"
    },
    {
        "InterviewId": "7341",
        "InterviewEndDate": "2023-10-14 08:21:19",
        "InterviewState": "Complete",
        "Flight": "UA - United Airlines",
        "Dest": "IAH",
        "AirlineCode": "UA"
    },
    {
        "InterviewId": "7342",
        "InterviewEndDate": "2023-10-14 08:23:27",
        "InterviewState": "Complete",
        "Flight": "UA - United Airlines",
        "Dest": "IAH",
        "AirlineCode": "UA"
    },
    {
        "InterviewId": "7343",
        "InterviewEndDate": "2023-10-14 08:29:51",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "BOS",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7344",
        "InterviewEndDate": "2023-10-14 08:30:13",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "BOS",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7345",
        "InterviewEndDate": "2023-10-14 08:30:32",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "BOS",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7346",
        "InterviewEndDate": "2023-10-15 07:36:40",
        "InterviewState": "Complete",
        "Flight": "TK - Turkish Airlines",
        "Dest": "IST",
        "AirlineCode": "TK"
    },
    {
        "InterviewId": "7347",
        "InterviewEndDate": "2023-10-15 07:21:17",
        "InterviewState": "Complete",
        "Flight": "EY - ETIHAD Airways",
        "Dest": "AUH",
        "AirlineCode": "EY"
    },
    {
        "InterviewId": "7348",
        "InterviewEndDate": "2023-10-15 07:35:39",
        "InterviewState": "Complete",
        "Flight": "Turkish Airline",
        "Dest": "IST",
        "AirlineCode": "Turkish"
    },
    {
        "InterviewId": "7349",
        "InterviewEndDate": "2023-10-15 07:33:21",
        "InterviewState": "Complete",
        "Flight": "TK - Turkish Airlines",
        "Dest": "SAW",
        "AirlineCode": "TK"
    },
    {
        "InterviewId": "7350",
        "InterviewEndDate": "2023-10-15 07:31:16",
        "InterviewState": "Complete",
        "Flight": "TK - Turkish Airlines",
        "Dest": "IST",
        "AirlineCode": "TK"
    },
    {
        "InterviewId": "7354",
        "InterviewEndDate": "2023-10-15 07:45:48",
        "InterviewState": "Complete",
        "Flight": "TK - Turkish Airlines",
        "Dest": "IST",
        "AirlineCode": "TK"
    },
    {
        "InterviewId": "7355",
        "InterviewEndDate": "2023-10-15 07:39:34",
        "InterviewState": "Complete",
        "Flight": "TK - Turkish Airlines",
        "Dest": "IST",
        "AirlineCode": "TK"
    },
    {
        "InterviewId": "7356",
        "InterviewEndDate": "2023-10-15 07:45:07",
        "InterviewState": "Complete",
        "Flight": "TK - Turkish Airlines",
        "Dest": "IST",
        "AirlineCode": "TK"
    },
    {
        "InterviewId": "7357",
        "InterviewEndDate": "2023-10-15 07:53:20",
        "InterviewState": "Complete",
        "Flight": "TK - Turkish Airlines",
        "Dest": "IST",
        "AirlineCode": "TK"
    },
    {
        "InterviewId": "7358",
        "InterviewEndDate": "2023-10-15 07:51:59",
        "InterviewState": "Complete",
        "Flight": "TK - Turkish Airlines",
        "Dest": "IST",
        "AirlineCode": "TK"
    },
    {
        "InterviewId": "7359",
        "InterviewEndDate": "2023-10-15 07:52:18",
        "InterviewState": "Complete",
        "Flight": "TK - Turkish Airlines",
        "Dest": "SAW",
        "AirlineCode": "TK"
    },
    {
        "InterviewId": "7360",
        "InterviewEndDate": "2023-10-15 08:35:51",
        "InterviewState": "Complete",
        "Flight": "TK - Turkish Airlines",
        "Dest": "IST",
        "AirlineCode": "TK"
    },
    {
        "InterviewId": "7361",
        "InterviewEndDate": "2023-10-15 08:00:19",
        "InterviewState": "Complete",
        "Flight": "TK - Turkish Airlines",
        "Dest": "IST",
        "AirlineCode": "TK"
    },
    {
        "InterviewId": "7363",
        "InterviewEndDate": "2023-10-16 19:04:46",
        "InterviewState": "Complete",
        "Flight": "Lufthansa",
        "Dest": "IBZ",
        "AirlineCode": "Lufthansa"
    },
    {
        "InterviewId": "7365",
        "InterviewEndDate": "2023-10-16 19:19:08",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "CTA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7367",
        "InterviewEndDate": "2023-10-16 19:05:51",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "IBZ",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7368",
        "InterviewEndDate": "2023-10-16 19:19:09",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "CTA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7369",
        "InterviewEndDate": "2023-10-16 19:14:32",
        "InterviewState": "Complete",
        "Flight": "SN - Brussels Airlines",
        "Dest": "OPO",
        "AirlineCode": "SN"
    },
    {
        "InterviewId": "7370",
        "InterviewEndDate": "2023-10-16 19:16:16",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "HAM",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7371",
        "InterviewEndDate": "2023-10-16 19:27:43",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "DUB",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7372",
        "InterviewEndDate": "2023-10-16 19:26:25",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "CAG",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7373",
        "InterviewEndDate": "2023-10-16 19:32:22",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "CAG",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7374",
        "InterviewEndDate": "2023-10-16 19:58:09",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "HAM",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7375",
        "InterviewEndDate": "2023-10-16 19:57:43",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "HAM",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7376",
        "InterviewEndDate": "2023-10-16 19:42:27",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "MAD",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7377",
        "InterviewEndDate": "2023-10-16 19:59:02",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "HAM",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7378",
        "InterviewEndDate": "2023-10-16 20:07:19",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "LTN",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7379",
        "InterviewEndDate": "2023-10-16 20:06:24",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "LHR",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7380",
        "InterviewEndDate": "2023-10-16 20:10:12",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "MAN",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7382",
        "InterviewEndDate": "2023-10-17 17:02:21",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "SPU",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7383",
        "InterviewEndDate": "2023-10-17 17:02:27",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "SPU",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7384",
        "InterviewEndDate": "2023-10-17 17:18:16",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "WAW",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7385",
        "InterviewEndDate": "2023-10-17 17:18:22",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "WAW",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7387",
        "InterviewEndDate": "2023-10-17 17:41:26",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "AMS",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7388",
        "InterviewEndDate": "2023-10-17 17:46:05",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "AMS",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7389",
        "InterviewEndDate": "2023-10-17 17:54:07",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "LHR",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7390",
        "InterviewEndDate": "2023-10-17 18:06:52",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "TLS",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7391",
        "InterviewEndDate": "2023-10-17 18:06:54",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "TLS",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7392",
        "InterviewEndDate": "2023-10-17 18:31:59",
        "InterviewState": "Complete",
        "Flight": "EN - AirDolomiti",
        "Dest": "LIN",
        "AirlineCode": "EN"
    },
    {
        "InterviewId": "7393",
        "InterviewEndDate": "2023-10-17 18:32:04",
        "InterviewState": "Complete",
        "Flight": "EN - AirDolomiti",
        "Dest": "LIN",
        "AirlineCode": "EN"
    },
    {
        "InterviewId": "7394",
        "InterviewEndDate": "2023-10-18 16:33:54",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "ARN",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7395",
        "InterviewEndDate": "2023-10-18 16:24:25",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7396",
        "InterviewEndDate": "2023-10-18 16:17:50",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "PUY",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7398",
        "InterviewEndDate": "2023-10-18 16:45:18",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "RZE",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7399",
        "InterviewEndDate": "2023-10-18 16:52:12",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "MAD",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7400",
        "InterviewEndDate": "2023-10-18 17:14:58",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "CGN",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7401",
        "InterviewEndDate": "2023-10-18 17:26:02",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "BRU",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7402",
        "InterviewEndDate": "2023-10-18 17:42:32",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "AGP",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7403",
        "InterviewEndDate": "2023-10-18 18:03:48",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7404",
        "InterviewEndDate": "2023-10-18 18:20:56",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "LIS",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7405",
        "InterviewEndDate": "2023-10-18 18:46:08",
        "InterviewState": "Complete",
        "Flight": "BT - Air Baltic",
        "Dest": "RIX",
        "AirlineCode": "BT"
    },
    {
        "InterviewId": "7406",
        "InterviewEndDate": "2023-10-18 18:36:30",
        "InterviewState": "Complete",
        "Flight": "E4 - Enter Air",
        "Dest": "KRK",
        "AirlineCode": "E4"
    },
    {
        "InterviewId": "7407",
        "InterviewEndDate": "2023-10-18 18:38:58",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "HAM",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7409",
        "InterviewEndDate": "2023-10-21 03:53:38",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "BKK",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7410",
        "InterviewEndDate": "2023-10-21 03:55:03",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "BKK",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7411",
        "InterviewEndDate": "2023-10-21 03:56:41",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "BKK",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7412",
        "InterviewEndDate": "2023-10-21 04:50:45",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "DEL",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7413",
        "InterviewEndDate": "2023-10-21 04:30:05",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "DEL",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7414",
        "InterviewEndDate": "2023-10-21 04:26:53",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "DEL",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7415",
        "InterviewEndDate": "2023-10-21 04:36:35",
        "InterviewState": "Complete",
        "Flight": "CA - Air China",
        "Dest": "PEK",
        "AirlineCode": "CA"
    },
    {
        "InterviewId": "7417",
        "InterviewEndDate": "2023-10-21 04:58:19",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "SIN",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7419",
        "InterviewEndDate": "2023-10-21 05:04:00",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "BOM",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7420",
        "InterviewEndDate": "2023-10-21 05:10:11",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "PVG",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7421",
        "InterviewEndDate": "2023-10-21 05:12:48",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "PVG",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7423",
        "InterviewEndDate": "2023-10-21 10:08:25",
        "InterviewState": "Complete",
        "Flight": "DE - Condor Flugdienst",
        "Dest": "PMI",
        "AirlineCode": "DE"
    },
    {
        "InterviewId": "7424",
        "InterviewEndDate": "2023-10-21 10:12:19",
        "InterviewState": "Complete",
        "Flight": "DE - Condor Flugdienst",
        "Dest": "PMI",
        "AirlineCode": "DE"
    },
    {
        "InterviewId": "7425",
        "InterviewEndDate": "2023-10-21 10:11:21",
        "InterviewState": "Complete",
        "Flight": "DE - Condor Flugdienst",
        "Dest": "PMI",
        "AirlineCode": "DE"
    },
    {
        "InterviewId": "7426",
        "InterviewEndDate": "2023-10-21 10:38:41",
        "InterviewState": "Complete",
        "Flight": "XQ - Sun Express",
        "Dest": "BJV",
        "AirlineCode": "XQ"
    },
    {
        "InterviewId": "7427",
        "InterviewEndDate": "2023-10-21 10:30:42",
        "InterviewState": "Complete",
        "Flight": "XQ - Sunexpress",
        "Dest": "BJV",
        "AirlineCode": "XQ"
    },
    {
        "InterviewId": "7428",
        "InterviewEndDate": "2023-10-21 10:32:57",
        "InterviewState": "Complete",
        "Flight": "XQ - Sun Express",
        "Dest": "BJV",
        "AirlineCode": "XQ"
    },
    {
        "InterviewId": "7429",
        "InterviewEndDate": "2023-10-21 10:39:21",
        "InterviewState": "Complete",
        "Flight": "XQ - Sunexpress",
        "Dest": "BJV",
        "AirlineCode": "XQ"
    },
    {
        "InterviewId": "7430",
        "InterviewEndDate": "2023-10-21 10:39:31",
        "InterviewState": "Complete",
        "Flight": "XQ - Sun Express",
        "Dest": "BJV",
        "AirlineCode": "XQ"
    },
    {
        "InterviewId": "7431",
        "InterviewEndDate": "2023-10-21 11:04:45",
        "InterviewState": "Complete",
        "Flight": "TK - Turkish Airlines",
        "Dest": "SAW",
        "AirlineCode": "TK"
    },
    {
        "InterviewId": "7432",
        "InterviewEndDate": "2023-10-21 11:05:45",
        "InterviewState": "Complete",
        "Flight": "TK - Turkish Airlines",
        "Dest": "SAW",
        "AirlineCode": "TK"
    },
    {
        "InterviewId": "7433",
        "InterviewEndDate": "2023-10-21 11:32:31",
        "InterviewState": "Complete",
        "Flight": "XQ - Sunexpress",
        "Dest": "AYT",
        "AirlineCode": "XQ"
    },
    {
        "InterviewId": "7434",
        "InterviewEndDate": "2023-10-21 11:36:21",
        "InterviewState": "Complete",
        "Flight": "XQ - Sunexpress",
        "Dest": "AYT",
        "AirlineCode": "XQ"
    },
    {
        "InterviewId": "7435",
        "InterviewEndDate": "2023-10-21 11:45:07",
        "InterviewState": "Complete",
        "Flight": "XQ - Sunexpress",
        "Dest": "AYT",
        "AirlineCode": "XQ"
    },
    {
        "InterviewId": "7436",
        "InterviewEndDate": "2023-10-21 11:45:53",
        "InterviewState": "Complete",
        "Flight": "XQ - Sunexpress",
        "Dest": "AYT",
        "AirlineCode": "XQ"
    },
    {
        "InterviewId": "7437",
        "InterviewEndDate": "2023-10-21 11:48:45",
        "InterviewState": "Complete",
        "Flight": "XQ - Sunexpress",
        "Dest": "AYT",
        "AirlineCode": "XQ"
    },
    {
        "InterviewId": "7438",
        "InterviewEndDate": "2023-10-21 12:48:30",
        "InterviewState": "Complete",
        "Flight": "XQ - Sunexpress",
        "Dest": "AYT",
        "AirlineCode": "XQ"
    },
    {
        "InterviewId": "7439",
        "InterviewEndDate": "2023-10-21 12:59:10",
        "InterviewState": "Complete",
        "Flight": "EK - Emirates",
        "Dest": "DXB",
        "AirlineCode": "EK"
    },
    {
        "InterviewId": "7440",
        "InterviewEndDate": "2023-10-21 12:55:46",
        "InterviewState": "Complete",
        "Flight": "EK - Emirates",
        "Dest": "DXB",
        "AirlineCode": "EK"
    },
    {
        "InterviewId": "7441",
        "InterviewEndDate": "2023-10-21 12:54:32",
        "InterviewState": "Complete",
        "Flight": "TK - Turkish Airlines",
        "Dest": "IST",
        "AirlineCode": "TK"
    },
    {
        "InterviewId": "7443",
        "InterviewEndDate": "2023-10-21 12:59:25",
        "InterviewState": "Complete",
        "Flight": "EK - Emirates",
        "Dest": "DXB",
        "AirlineCode": "EK"
    },
    {
        "InterviewId": "7444",
        "InterviewEndDate": "2023-10-21 13:01:59",
        "InterviewState": "Complete",
        "Flight": "TK - Turkish Airlines",
        "Dest": "IST",
        "AirlineCode": "TK"
    },
    {
        "InterviewId": "7445",
        "InterviewEndDate": "2023-10-21 13:07:10",
        "InterviewState": "Complete",
        "Flight": "TK - Turkish Airlines",
        "Dest": "IST",
        "AirlineCode": "TK"
    },
    {
        "InterviewId": "7446",
        "InterviewEndDate": "2023-10-21 13:09:26",
        "InterviewState": "Complete",
        "Flight": "TK - Turkish Airlines",
        "Dest": "IST",
        "AirlineCode": "TK"
    },
    {
        "InterviewId": "7447",
        "InterviewEndDate": "2023-10-21 13:21:06",
        "InterviewState": "Complete",
        "Flight": "TK - Turkish Airlines",
        "Dest": "IST",
        "AirlineCode": "TK"
    },
    {
        "InterviewId": "7448",
        "InterviewEndDate": "2023-10-21 13:23:04",
        "InterviewState": "Complete",
        "Flight": "TK - Turkish Airlines",
        "Dest": "IST",
        "AirlineCode": "TK"
    },
    {
        "InterviewId": "7449",
        "InterviewEndDate": "2023-10-21 13:30:23",
        "InterviewState": "Complete",
        "Flight": "TK - Turkish Airlines",
        "Dest": "IST",
        "AirlineCode": "TK"
    },
    {
        "InterviewId": "7450",
        "InterviewEndDate": "2023-10-21 13:42:33",
        "InterviewState": "Complete",
        "Flight": "TK - Turkish Airlines",
        "Dest": "IST",
        "AirlineCode": "TK"
    },
    {
        "InterviewId": "7451",
        "InterviewEndDate": "2023-10-25 16:29:19",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "AMS",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7452",
        "InterviewEndDate": "2023-10-25 16:22:58",
        "InterviewState": "Complete",
        "Flight": "A3 - Aegean Airlines",
        "Dest": "ATH",
        "AirlineCode": "A3"
    },
    {
        "InterviewId": "7453",
        "InterviewEndDate": "2023-10-25 16:15:44",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7454",
        "InterviewEndDate": "2023-10-25 16:53:32",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "TSR",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7455",
        "InterviewEndDate": "2023-10-25 16:46:38",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "LEJ",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7456",
        "InterviewEndDate": "2023-10-25 17:00:29",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "ARN",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7457",
        "InterviewEndDate": "2023-10-25 17:40:19",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "WAW",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7458",
        "InterviewEndDate": "2023-10-25 17:21:04",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FAO",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7459",
        "InterviewEndDate": "2023-10-25 17:47:33",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "PRG",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7460",
        "InterviewEndDate": "2023-10-25 17:30:17",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FMO",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7461",
        "InterviewEndDate": "2023-10-25 17:44:05",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "HAM",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7462",
        "InterviewEndDate": "2023-10-27 05:33:04",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "PVG",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7463",
        "InterviewEndDate": "2023-10-27 05:36:09",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "PVG",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7464",
        "InterviewEndDate": "2023-10-27 05:44:06",
        "InterviewState": "Complete",
        "Flight": "UA - United Airlines",
        "Dest": "EWR",
        "AirlineCode": "UA"
    },
    {
        "InterviewId": "7465",
        "InterviewEndDate": "2023-10-27 05:42:33",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "ORD",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7467",
        "InterviewEndDate": "2023-10-27 05:53:02",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "TRN",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7468",
        "InterviewEndDate": "2023-10-27 05:52:32",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "WRO",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7469",
        "InterviewEndDate": "2023-10-27 06:02:37",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "JFK",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7470",
        "InterviewEndDate": "2023-10-27 06:04:01",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "JFK",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7471",
        "InterviewEndDate": "2023-10-27 06:21:03",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "GDN",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7472",
        "InterviewEndDate": "2023-10-27 06:32:40",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FLR",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7473",
        "InterviewEndDate": "2023-10-27 06:53:47",
        "InterviewState": "Complete",
        "Flight": "EN - AirDolomiti",
        "Dest": "FLR",
        "AirlineCode": "EN"
    },
    {
        "InterviewId": "7474",
        "InterviewEndDate": "2023-10-27 06:50:04",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7477",
        "InterviewEndDate": "2023-10-27 07:40:33",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "CLT",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7480",
        "InterviewEndDate": "2023-10-27 07:53:47",
        "InterviewState": "Complete",
        "Flight": "UA - United Airlines",
        "Dest": "SFO",
        "AirlineCode": "UA"
    },
    {
        "InterviewId": "7481",
        "InterviewEndDate": "2023-10-27 08:18:13",
        "InterviewState": "Complete",
        "Flight": "UA - United Airlines",
        "Dest": "SFO",
        "AirlineCode": "UA"
    },
    {
        "InterviewId": "7482",
        "InterviewEndDate": "2023-10-27 14:52:45",
        "InterviewState": "Complete",
        "Flight": "EW - Eurowings",
        "Dest": "PMI",
        "AirlineCode": "EW"
    },
    {
        "InterviewId": "7485",
        "InterviewEndDate": "2023-10-27 15:02:38",
        "InterviewState": "Complete",
        "Flight": "DE - Condor Flugdienst",
        "Dest": "TFS",
        "AirlineCode": "DE"
    },
    {
        "InterviewId": "7486",
        "InterviewEndDate": "2023-10-27 15:06:59",
        "InterviewState": "Complete",
        "Flight": "DE - Condor Flugdienst",
        "Dest": "TFS",
        "AirlineCode": "DE"
    },
    {
        "InterviewId": "7487",
        "InterviewEndDate": "2023-10-27 15:14:38",
        "InterviewState": "Complete",
        "Flight": "EW - Eurowings",
        "Dest": "PMI",
        "AirlineCode": "EW"
    },
    {
        "InterviewId": "7489",
        "InterviewEndDate": "2023-10-27 15:26:32",
        "InterviewState": "Complete",
        "Flight": "EW - Eurowings",
        "Dest": "PMI",
        "AirlineCode": "EW"
    },
    {
        "InterviewId": "7490",
        "InterviewEndDate": "2023-10-27 15:23:45",
        "InterviewState": "Complete",
        "Flight": "EW - Eurowings",
        "Dest": "PMI",
        "AirlineCode": "EW"
    },
    {
        "InterviewId": "7491",
        "InterviewEndDate": "2023-10-27 15:35:25",
        "InterviewState": "Complete",
        "Flight": "UX - Air Europa",
        "Dest": "MAD",
        "AirlineCode": "UX"
    },
    {
        "InterviewId": "7494",
        "InterviewEndDate": "2023-10-27 15:47:48",
        "InterviewState": "Complete",
        "Flight": "AF - Air France",
        "Dest": "CDG",
        "AirlineCode": "AF"
    },
    {
        "InterviewId": "7495",
        "InterviewEndDate": "2023-10-27 15:47:22",
        "InterviewState": "Complete",
        "Flight": "AF - Air France",
        "Dest": "CDG",
        "AirlineCode": "AF"
    },
    {
        "InterviewId": "7498",
        "InterviewEndDate": "2023-10-27 16:16:12",
        "InterviewState": "Complete",
        "Flight": "EW - Eurowings",
        "Dest": "PMI",
        "AirlineCode": "EW"
    },
    {
        "InterviewId": "7500",
        "InterviewEndDate": "2023-10-27 16:09:22",
        "InterviewState": "Complete",
        "Flight": "EW - Eurowings",
        "Dest": "PMI",
        "AirlineCode": "EW"
    },
    {
        "InterviewId": "7501",
        "InterviewEndDate": "2023-10-27 16:24:41",
        "InterviewState": "Complete",
        "Flight": "AY - Finnair",
        "Dest": "HEL",
        "AirlineCode": "AY"
    },
    {
        "InterviewId": "7505",
        "InterviewEndDate": "2023-10-27 16:53:19",
        "InterviewState": "Complete",
        "Flight": "",
        "Dest": "LBC",
        "AirlineCode": ""
    },
    {
        "InterviewId": "7506",
        "InterviewEndDate": "2023-10-27 17:15:05",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "DUS",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7507",
        "InterviewEndDate": "2023-10-27 17:35:15",
        "InterviewState": "Complete",
        "Flight": "IB - Iberia",
        "Dest": "MAD",
        "AirlineCode": "IB"
    },
    {
        "InterviewId": "7509",
        "InterviewEndDate": "2023-10-30 11:22:59",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "IAD",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7510",
        "InterviewEndDate": "2023-10-30 11:22:37",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "IAD",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7511",
        "InterviewEndDate": "2023-10-30 11:23:22",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "IAD",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7513",
        "InterviewEndDate": "2023-10-30 11:39:58",
        "InterviewState": "Complete",
        "Flight": "TP - TAP Air Portugal",
        "Dest": "LIS",
        "AirlineCode": "TP"
    },
    {
        "InterviewId": "7514",
        "InterviewEndDate": "2023-10-30 11:41:22",
        "InterviewState": "Complete",
        "Flight": "TP - TAP Air Portugal",
        "Dest": "LIS",
        "AirlineCode": "TP"
    },
    {
        "InterviewId": "7515",
        "InterviewEndDate": "2023-10-30 11:41:03",
        "InterviewState": "Complete",
        "Flight": "TP - TAP Air Portugal",
        "Dest": "LIS",
        "AirlineCode": "TP"
    },
    {
        "InterviewId": "7517",
        "InterviewEndDate": "2023-10-30 12:00:57",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "LHR",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7518",
        "InterviewEndDate": "2023-10-30 12:02:17",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "LHR",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7519",
        "InterviewEndDate": "2023-10-30 12:13:39",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "SAN",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7520",
        "InterviewEndDate": "2023-10-30 12:06:25",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "SAN",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7521",
        "InterviewEndDate": "2023-10-30 12:07:09",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "SAN",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7522",
        "InterviewEndDate": "2023-10-30 12:36:17",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "LAX",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7523",
        "InterviewEndDate": "2023-10-30 12:34:35",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "LAX",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7524",
        "InterviewEndDate": "2023-10-30 12:35:26",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "LAX",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7525",
        "InterviewEndDate": "2023-10-30 13:12:22",
        "InterviewState": "Complete",
        "Flight": "UA - United Airlines",
        "Dest": "DEN",
        "AirlineCode": "UA"
    },
    {
        "InterviewId": "7526",
        "InterviewEndDate": "2023-10-30 12:42:21",
        "InterviewState": "Complete",
        "Flight": "UA - United Airlines",
        "Dest": "DEN",
        "AirlineCode": "UA"
    },
    {
        "InterviewId": "7527",
        "InterviewEndDate": "2023-10-30 12:42:46",
        "InterviewState": "Complete",
        "Flight": "UA - United Airlines",
        "Dest": "DEN",
        "AirlineCode": "UA"
    },
    {
        "InterviewId": "7528",
        "InterviewEndDate": "2023-10-30 12:58:22",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "MAN",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7529",
        "InterviewEndDate": "2023-10-30 12:58:19",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "MAN",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7530",
        "InterviewEndDate": "2023-10-30 13:18:35",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "LHR",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7531",
        "InterviewEndDate": "2023-10-30 13:21:37",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "DUB",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7534",
        "InterviewEndDate": "2023-10-30 13:21:29",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "LHR",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7536",
        "InterviewEndDate": "2023-10-30 13:23:01",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "LHR",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7537",
        "InterviewEndDate": "2023-10-30 13:38:06",
        "InterviewState": "Complete",
        "Flight": "SK - SAS-Scandinavian Airlines System",
        "Dest": "CPH",
        "AirlineCode": "SK"
    },
    {
        "InterviewId": "7538",
        "InterviewEndDate": "2023-10-30 13:40:32",
        "InterviewState": "Complete",
        "Flight": "SK - SAS-Scandinavian Airlines System",
        "Dest": "CPH",
        "AirlineCode": "SK"
    },
    {
        "InterviewId": "7539",
        "InterviewEndDate": "2023-10-30 13:39:00",
        "InterviewState": "Complete",
        "Flight": "SK - SAS-Scandinavian Airlines System",
        "Dest": "CPH",
        "AirlineCode": "SK"
    },
    {
        "InterviewId": "7540",
        "InterviewEndDate": "2023-10-30 13:44:40",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "DUS",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7541",
        "InterviewEndDate": "2023-10-30 13:50:33",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "DUS",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7542",
        "InterviewEndDate": "2023-10-31 17:46:32",
        "InterviewState": "Complete",
        "Flight": "XQ - Sun Express",
        "Dest": "AYT",
        "AirlineCode": "XQ"
    },
    {
        "InterviewId": "7543",
        "InterviewEndDate": "2023-10-31 17:50:35",
        "InterviewState": "Complete",
        "Flight": "XQ - Sun Express",
        "Dest": "AYT",
        "AirlineCode": "XQ"
    },
    {
        "InterviewId": "7544",
        "InterviewEndDate": "2023-10-31 18:08:01",
        "InterviewState": "Complete",
        "Flight": "X3 - TUIFly",
        "Dest": "HRG",
        "AirlineCode": "X3"
    },
    {
        "InterviewId": "7545",
        "InterviewEndDate": "2023-10-31 18:19:13",
        "InterviewState": "Complete",
        "Flight": "X3 - TUIFly",
        "Dest": "HRG",
        "AirlineCode": "X3"
    },
    {
        "InterviewId": "7546",
        "InterviewEndDate": "2023-10-31 18:19:17",
        "InterviewState": "Complete",
        "Flight": "X3 - TUIFly",
        "Dest": "HRG",
        "AirlineCode": "X3"
    },
    {
        "InterviewId": "7547",
        "InterviewEndDate": "2023-10-31 18:31:57",
        "InterviewState": "Complete",
        "Flight": "X3 - TUIFly",
        "Dest": "HRG",
        "AirlineCode": "X3"
    },
    {
        "InterviewId": "7548",
        "InterviewEndDate": "2023-10-31 19:03:06",
        "InterviewState": "Complete",
        "Flight": "Ek",
        "Dest": "DXB",
        "AirlineCode": "Ek"
    },
    {
        "InterviewId": "7549",
        "InterviewEndDate": "2023-10-31 19:02:48",
        "InterviewState": "Complete",
        "Flight": "EK - Emirates",
        "Dest": "DXB",
        "AirlineCode": "EK"
    },
    {
        "InterviewId": "7550",
        "InterviewEndDate": "2023-10-31 19:34:33",
        "InterviewState": "Complete",
        "Flight": "BA - British Airways",
        "Dest": "LHR",
        "AirlineCode": "BA"
    },
    {
        "InterviewId": "7551",
        "InterviewEndDate": "2023-10-31 19:34:17",
        "InterviewState": "Complete",
        "Flight": "BA - British Airways",
        "Dest": "LHR",
        "AirlineCode": "BA"
    },
    {
        "InterviewId": "7552",
        "InterviewEndDate": "2023-11-02 12:30:41",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "MEX",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7553",
        "InterviewEndDate": "2023-11-02 12:34:22",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "MEX",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7554",
        "InterviewEndDate": "2023-11-02 12:43:16",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "HAM",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7555",
        "InterviewEndDate": "2023-11-02 12:45:49",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "HAM",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7556",
        "InterviewEndDate": "2023-11-02 12:51:20",
        "InterviewState": "Complete",
        "Flight": "MS - Egyptair",
        "Dest": "CAI",
        "AirlineCode": "MS"
    },
    {
        "InterviewId": "7558",
        "InterviewEndDate": "2023-11-02 13:05:16",
        "InterviewState": "Complete",
        "Flight": "UA - United Airlines",
        "Dest": "DEN",
        "AirlineCode": "UA"
    },
    {
        "InterviewId": "7559",
        "InterviewEndDate": "2023-11-02 13:05:18",
        "InterviewState": "Complete",
        "Flight": "UA - United Airlines",
        "Dest": "DEN",
        "AirlineCode": "UA"
    },
    {
        "InterviewId": "7563",
        "InterviewEndDate": "2023-11-02 13:40:42",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "DUB",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7564",
        "InterviewEndDate": "2023-11-02 13:46:41",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "LHR",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7565",
        "InterviewEndDate": "2023-11-02 13:49:50",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "LHR",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7568",
        "InterviewEndDate": "2023-11-02 14:21:07",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "GOT",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7569",
        "InterviewEndDate": "2023-11-02 14:23:14",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "GOT",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7570",
        "InterviewEndDate": "2023-11-02 14:29:59",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "EMPTY",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7571",
        "InterviewEndDate": "2023-11-02 14:44:55",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "AMS",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7572",
        "InterviewEndDate": "2023-11-03 10:01:31",
        "InterviewState": "Complete",
        "Flight": "",
        "Dest": "KIV",
        "AirlineCode": ""
    },
    {
        "InterviewId": "7573",
        "InterviewEndDate": "2023-11-03 10:09:57",
        "InterviewState": "Complete",
        "Flight": "",
        "Dest": "KIV",
        "AirlineCode": ""
    },
    {
        "InterviewId": "7574",
        "InterviewEndDate": "2023-11-03 10:16:13",
        "InterviewState": "Complete",
        "Flight": "PC - Pegasus Airlines",
        "Dest": "SAW",
        "AirlineCode": "PC"
    },
    {
        "InterviewId": "7576",
        "InterviewEndDate": "2023-11-03 10:09:07",
        "InterviewState": "Complete",
        "Flight": "PC - Pegasus Airlines",
        "Dest": "SAW",
        "AirlineCode": "PC"
    },
    {
        "InterviewId": "7578",
        "InterviewEndDate": "2023-11-03 10:21:36",
        "InterviewState": "Complete",
        "Flight": "PC - Pegasus Airlines",
        "Dest": "SAW",
        "AirlineCode": "PC"
    },
    {
        "InterviewId": "7579",
        "InterviewEndDate": "2023-11-03 10:32:16",
        "InterviewState": "Complete",
        "Flight": "DE - Condor Flugdienst",
        "Dest": "PMI",
        "AirlineCode": "DE"
    },
    {
        "InterviewId": "7580",
        "InterviewEndDate": "2023-11-03 10:25:46",
        "InterviewState": "Complete",
        "Flight": "DE - Condor Flugdienst",
        "Dest": "PMI",
        "AirlineCode": "DE"
    },
    {
        "InterviewId": "7581",
        "InterviewEndDate": "2023-11-03 10:29:06",
        "InterviewState": "Complete",
        "Flight": "DE - Condor Flugdienst",
        "Dest": "PMI",
        "AirlineCode": "DE"
    },
    {
        "InterviewId": "7584",
        "InterviewEndDate": "2023-11-03 10:38:47",
        "InterviewState": "Complete",
        "Flight": "EW - Eurowings",
        "Dest": "PMI",
        "AirlineCode": "EW"
    },
    {
        "InterviewId": "7585",
        "InterviewEndDate": "2023-11-03 10:54:29",
        "InterviewState": "Complete",
        "Flight": "EW - Eurowings",
        "Dest": "PMI",
        "AirlineCode": "EW"
    },
    {
        "InterviewId": "7586",
        "InterviewEndDate": "2023-11-03 11:04:28",
        "InterviewState": "Complete",
        "Flight": "BA - British Airways",
        "Dest": "LHR",
        "AirlineCode": "BA"
    },
    {
        "InterviewId": "7587",
        "InterviewEndDate": "2023-11-03 11:04:19",
        "InterviewState": "Complete",
        "Flight": "BA - British Airways",
        "Dest": "LHR",
        "AirlineCode": "BA"
    },
    {
        "InterviewId": "7588",
        "InterviewEndDate": "2023-11-03 11:04:50",
        "InterviewState": "Complete",
        "Flight": "BA - British Airways",
        "Dest": "LHR",
        "AirlineCode": "BA"
    },
    {
        "InterviewId": "7589",
        "InterviewEndDate": "2023-11-03 11:20:52",
        "InterviewState": "Complete",
        "Flight": "BA - British Airways",
        "Dest": "LHR",
        "AirlineCode": "BA"
    },
    {
        "InterviewId": "7590",
        "InterviewEndDate": "2023-11-03 11:39:38",
        "InterviewState": "Complete",
        "Flight": "EK - Emirates",
        "Dest": "DXB",
        "AirlineCode": "EK"
    },
    {
        "InterviewId": "7591",
        "InterviewEndDate": "2023-11-03 11:50:29",
        "InterviewState": "Complete",
        "Flight": "EK - Emirates",
        "Dest": "DXB",
        "AirlineCode": "EK"
    },
    {
        "InterviewId": "7592",
        "InterviewEndDate": "2023-11-03 11:35:21",
        "InterviewState": "Complete",
        "Flight": "EK - Emirates",
        "Dest": "DXB",
        "AirlineCode": "EK"
    },
    {
        "InterviewId": "7593",
        "InterviewEndDate": "2023-11-04 07:14:43",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "CPH",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7594",
        "InterviewEndDate": "2023-11-04 07:31:40",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7595",
        "InterviewEndDate": "2023-11-04 07:29:34",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7596",
        "InterviewEndDate": "2023-11-04 07:35:02",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7597",
        "InterviewEndDate": "2023-11-04 07:44:43",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "BER",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7598",
        "InterviewEndDate": "2023-11-04 07:39:04",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7599",
        "InterviewEndDate": "2023-11-04 08:07:37",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "PRG",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7600",
        "InterviewEndDate": "2023-11-04 08:16:13",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "PRG",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7601",
        "InterviewEndDate": "2023-11-04 08:07:28",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "PRG",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7602",
        "InterviewEndDate": "2023-11-04 08:13:53",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "PRG",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7603",
        "InterviewEndDate": "2023-11-04 08:16:57",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "PRG",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7604",
        "InterviewEndDate": "2023-11-04 08:25:43",
        "InterviewState": "Complete",
        "Flight": "UA - United Airlines",
        "Dest": "ORD",
        "AirlineCode": "UA"
    },
    {
        "InterviewId": "7605",
        "InterviewEndDate": "2023-11-04 08:24:53",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "ORD",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7607",
        "InterviewEndDate": "2023-11-04 08:34:29",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7608",
        "InterviewEndDate": "2023-11-04 08:35:23",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7609",
        "InterviewEndDate": "2023-11-04 08:34:12",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7611",
        "InterviewEndDate": "2023-11-04 12:08:22",
        "InterviewState": "Complete",
        "Flight": "EK - Emirates",
        "Dest": "DXB",
        "AirlineCode": "EK"
    },
    {
        "InterviewId": "7612",
        "InterviewEndDate": "2023-11-04 12:09:46",
        "InterviewState": "Complete",
        "Flight": "EK - Emirates",
        "Dest": "DXB",
        "AirlineCode": "EK"
    },
    {
        "InterviewId": "7613",
        "InterviewEndDate": "2023-11-04 12:11:00",
        "InterviewState": "Complete",
        "Flight": "EK - Emirates",
        "Dest": "DXB",
        "AirlineCode": "EK"
    },
    {
        "InterviewId": "7614",
        "InterviewEndDate": "2023-11-04 12:42:51",
        "InterviewState": "Complete",
        "Flight": "SV - Saudi Arabian Airlines",
        "Dest": "JED",
        "AirlineCode": "SV"
    },
    {
        "InterviewId": "7615",
        "InterviewEndDate": "2023-11-04 12:37:22",
        "InterviewState": "Complete",
        "Flight": "SV - Saudi Arabian Airlines",
        "Dest": "JED",
        "AirlineCode": "SV"
    },
    {
        "InterviewId": "7616",
        "InterviewEndDate": "2023-11-04 12:28:08",
        "InterviewState": "Complete",
        "Flight": "SV - Saudi Arabian Airlines",
        "Dest": "JED",
        "AirlineCode": "SV"
    },
    {
        "InterviewId": "7617",
        "InterviewEndDate": "2023-11-04 13:03:32",
        "InterviewState": "Complete",
        "Flight": "SV - Saudi Arabian Airlines",
        "Dest": "JED",
        "AirlineCode": "SV"
    },
    {
        "InterviewId": "7618",
        "InterviewEndDate": "2023-11-04 13:13:57",
        "InterviewState": "Complete",
        "Flight": "TK - Turkish Airlines",
        "Dest": "IST",
        "AirlineCode": "TK"
    },
    {
        "InterviewId": "7619",
        "InterviewEndDate": "2023-11-04 13:20:34",
        "InterviewState": "Complete",
        "Flight": "TK - Turkish Airlines",
        "Dest": "IST",
        "AirlineCode": "TK"
    },
    {
        "InterviewId": "7620",
        "InterviewEndDate": "2023-11-04 13:25:26",
        "InterviewState": "Complete",
        "Flight": "TK - Turkish Airlines",
        "Dest": "IST",
        "AirlineCode": "TK"
    },
    {
        "InterviewId": "7621",
        "InterviewEndDate": "2023-11-04 13:39:26",
        "InterviewState": "Complete",
        "Flight": "TK - Turkish Airlines",
        "Dest": "IST",
        "AirlineCode": "TK"
    },
    {
        "InterviewId": "7622",
        "InterviewEndDate": "2023-11-04 14:16:24",
        "InterviewState": "Complete",
        "Flight": "PC - Pegasus Airlines",
        "Dest": "SAW",
        "AirlineCode": "PC"
    },
    {
        "InterviewId": "7623",
        "InterviewEndDate": "2023-11-04 14:18:02",
        "InterviewState": "Complete",
        "Flight": "BA - British Airways",
        "Dest": "LHR",
        "AirlineCode": "BA"
    },
    {
        "InterviewId": "7624",
        "InterviewEndDate": "2023-11-04 14:19:44",
        "InterviewState": "Complete",
        "Flight": "BA - British Airways",
        "Dest": "LHR",
        "AirlineCode": "BA"
    },
    {
        "InterviewId": "7625",
        "InterviewEndDate": "2023-11-04 14:21:32",
        "InterviewState": "Complete",
        "Flight": "BA - British Airways",
        "Dest": "LHR",
        "AirlineCode": "BA"
    },
    {
        "InterviewId": "7626",
        "InterviewEndDate": "2023-11-04 14:22:30",
        "InterviewState": "Complete",
        "Flight": "BA - British Airways",
        "Dest": "LHR",
        "AirlineCode": "BA"
    },
    {
        "InterviewId": "7627",
        "InterviewEndDate": "2023-11-04 14:25:21",
        "InterviewState": "Complete",
        "Flight": "BA - British Airways",
        "Dest": "LHR",
        "AirlineCode": "BA"
    },
    {
        "InterviewId": "7628",
        "InterviewEndDate": "2023-11-04 14:27:24",
        "InterviewState": "Complete",
        "Flight": "BA - British Airways",
        "Dest": "LHR",
        "AirlineCode": "BA"
    },
    {
        "InterviewId": "7629",
        "InterviewEndDate": "2023-11-04 14:28:07",
        "InterviewState": "Complete",
        "Flight": "BA - British Airways",
        "Dest": "LHR",
        "AirlineCode": "BA"
    },
    {
        "InterviewId": "7630",
        "InterviewEndDate": "2023-11-04 14:46:38",
        "InterviewState": "Complete",
        "Flight": "BA - British Airways",
        "Dest": "LHR",
        "AirlineCode": "BA"
    },
    {
        "InterviewId": "7631",
        "InterviewEndDate": "2023-11-08 16:15:14",
        "InterviewState": "Complete",
        "Flight": "TP - TAP Air Portugal",
        "Dest": "LIS",
        "AirlineCode": "TP"
    },
    {
        "InterviewId": "7632",
        "InterviewEndDate": "2023-11-08 16:20:48",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "BER",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7633",
        "InterviewEndDate": "2023-11-08 16:27:54",
        "InterviewState": "Complete",
        "Flight": "TP - TAP Air Portugal",
        "Dest": "LIS",
        "AirlineCode": "TP"
    },
    {
        "InterviewId": "7634",
        "InterviewEndDate": "2023-11-08 16:28:36",
        "InterviewState": "Complete",
        "Flight": "TP - TAP Air Portugal",
        "Dest": "LIS",
        "AirlineCode": "TP"
    },
    {
        "InterviewId": "7635",
        "InterviewEndDate": "2023-11-08 16:38:22",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "ARN",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7636",
        "InterviewEndDate": "2023-11-08 16:59:16",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7637",
        "InterviewEndDate": "2023-11-08 16:44:47",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7638",
        "InterviewEndDate": "2023-11-08 17:04:21",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "HND",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7639",
        "InterviewEndDate": "2023-11-08 17:13:09",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "HND",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7640",
        "InterviewEndDate": "2023-11-08 17:08:28",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "HND",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7641",
        "InterviewEndDate": "2023-11-08 17:23:43",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "BCN",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7642",
        "InterviewEndDate": "2023-11-08 19:49:00",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "ORY",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7643",
        "InterviewEndDate": "2023-11-08 20:18:29",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "TFS",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7644",
        "InterviewEndDate": "2023-11-08 20:12:57",
        "InterviewState": "Complete",
        "Flight": "EN - AirDolomiti",
        "Dest": "BRI",
        "AirlineCode": "EN"
    },
    {
        "InterviewId": "7645",
        "InterviewEndDate": "2023-11-08 20:32:37",
        "InterviewState": "Complete",
        "Flight": "A3 - Aegean Airlines",
        "Dest": "SKG",
        "AirlineCode": "A3"
    },
    {
        "InterviewId": "7646",
        "InterviewEndDate": "2023-11-08 20:22:49",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "TFS",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7647",
        "InterviewEndDate": "2023-11-08 20:49:21",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "HAM",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7648",
        "InterviewEndDate": "2023-11-08 20:54:58",
        "InterviewState": "Complete",
        "Flight": "OS - Austrian Airlines",
        "Dest": "VIE",
        "AirlineCode": "OS"
    },
    {
        "InterviewId": "7649",
        "InterviewEndDate": "2023-11-08 21:15:42",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "ARN",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7650",
        "InterviewEndDate": "2023-11-08 21:06:57",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "MAD",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7651",
        "InterviewEndDate": "2023-11-09 10:59:42",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "CDG",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7653",
        "InterviewEndDate": "2023-11-09 11:00:41",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "ORY",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7654",
        "InterviewEndDate": "2023-11-09 11:17:19",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "LHR",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7655",
        "InterviewEndDate": "2023-11-09 11:38:57",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "LHR",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7658",
        "InterviewEndDate": "2023-11-09 11:52:38",
        "InterviewState": "Complete",
        "Flight": "UA - United Airlines",
        "Dest": "IAH",
        "AirlineCode": "UA"
    },
    {
        "InterviewId": "7659",
        "InterviewEndDate": "2023-11-09 11:54:33",
        "InterviewState": "Complete",
        "Flight": "UA - United Airlines",
        "Dest": "IAH",
        "AirlineCode": "UA"
    },
    {
        "InterviewId": "7660",
        "InterviewEndDate": "2023-11-09 11:55:07",
        "InterviewState": "Complete",
        "Flight": "UA - United Airlines",
        "Dest": "IAH",
        "AirlineCode": "UA"
    },
    {
        "InterviewId": "7661",
        "InterviewEndDate": "2023-11-09 12:13:02",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "DXB",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7662",
        "InterviewEndDate": "2023-11-09 12:12:44",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "DXB",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7663",
        "InterviewEndDate": "2023-11-09 12:35:06",
        "InterviewState": "Complete",
        "Flight": "MS - Egyptair",
        "Dest": "CAI",
        "AirlineCode": "MS"
    },
    {
        "InterviewId": "7665",
        "InterviewEndDate": "2023-11-09 12:51:11",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "LAX",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7666",
        "InterviewEndDate": "2023-11-10 17:44:21",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7667",
        "InterviewEndDate": "2023-11-10 17:44:33",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "BCN",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7668",
        "InterviewEndDate": "2023-11-10 17:50:16",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansabru",
        "Dest": "BRU",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7669",
        "InterviewEndDate": "2023-11-10 17:57:20",
        "InterviewState": "Complete",
        "Flight": "OS - Austrian Airlines",
        "Dest": "VIE",
        "AirlineCode": "OS"
    },
    {
        "InterviewId": "7670",
        "InterviewEndDate": "2023-11-10 18:31:46",
        "InterviewState": "Complete",
        "Flight": "KM - Air Malta",
        "Dest": "MLA",
        "AirlineCode": "KM"
    },
    {
        "InterviewId": "7671",
        "InterviewEndDate": "2023-11-10 18:21:18",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "ICN",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7673",
        "InterviewEndDate": "2023-11-10 18:33:34",
        "InterviewState": "Complete",
        "Flight": "A3 - Aegean Airlines",
        "Dest": "SKG",
        "AirlineCode": "A3"
    },
    {
        "InterviewId": "7674",
        "InterviewEndDate": "2023-11-10 18:56:29",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "AMS",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7676",
        "InterviewEndDate": "2023-11-10 19:14:33",
        "InterviewState": "Complete",
        "Flight": "EN - AirDolomiti",
        "Dest": "LIN",
        "AirlineCode": "EN"
    },
    {
        "InterviewId": "7678",
        "InterviewEndDate": "2023-11-10 19:18:00",
        "InterviewState": "Complete",
        "Flight": "SK - SAS-Scandinavian Airlines System",
        "Dest": "CPH",
        "AirlineCode": "SK"
    },
    {
        "InterviewId": "7679",
        "InterviewEndDate": "2023-11-11 04:51:41",
        "InterviewState": "Complete",
        "Flight": "CA - Air China",
        "Dest": "PEK",
        "AirlineCode": "CA"
    },
    {
        "InterviewId": "7680",
        "InterviewEndDate": "2023-11-11 04:54:53",
        "InterviewState": "Complete",
        "Flight": "CA - Air China",
        "Dest": "PEK",
        "AirlineCode": "CA"
    },
    {
        "InterviewId": "7681",
        "InterviewEndDate": "2023-11-11 04:57:57",
        "InterviewState": "Complete",
        "Flight": "CA - Air China",
        "Dest": "PEK",
        "AirlineCode": "CA"
    },
    {
        "InterviewId": "7682",
        "InterviewEndDate": "2023-11-11 04:59:49",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "BKK",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7683",
        "InterviewEndDate": "2023-11-11 05:01:41",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "BKK",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7684",
        "InterviewEndDate": "2023-11-11 05:07:02",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "BKK",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7687",
        "InterviewEndDate": "2023-11-11 05:31:13",
        "InterviewState": "Complete",
        "Flight": "SQ - Singapore Airlines",
        "Dest": "SIN",
        "AirlineCode": "SQ"
    }
]    

 `;