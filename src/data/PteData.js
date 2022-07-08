export const ptedata = [
  {
    _id: {
      $oid: "624df73c3b29036234432db1"
    },
    name: "Voice Multistack EU1 -DH2 - PTE",
    ApplicationStack: "Voice SIP Ingress Satellite - Non HA",
    NamingConventions: [
      {
        "-xx$": "-eu1-dh2-{0:D2}",
        _XX_VIP: "_EU1_DH2_{0:D2}_VIP",
        "^vipsipvi$": "icsp.eu1vipsipvi.dh2.pte"
      }
    ],
    AppToHostGMappings: [
      {
        SIP_HA_INGRESS_XX_VIP_DOWN: "voiceixx",
        SIP_HA_INGRESS_XX_VIP_UP: "voiceixx",
        "sip-ingress-xx": "voiceixx",
        vipsipvi: "vipsipvi"
      }
    ]
  }
];
