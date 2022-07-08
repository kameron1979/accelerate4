export const component = {
  _id: "62c5b28521379456feddd950",
  name: "voice-sip-ingress",
  version: "2",
  containers: [
    {
      containerId: 1000,
      containerName: "Voice-Multistack",
      executionLevel: 1,
      executionPoint: 12,
      dynamic: false,
      environmentSpecific: true,
      linkedEnvironments: ["pte", "ppe", "prd"]
    },
    {
      containerId: 1001,
      containerName: "sip-ingress",
      executionLevel: 2,
      executionPoint: 21,
      dynamic: false,
      environmentSpecific: false,
      linkedEnvironments: [],
      fragments: [
        {
          fragmentType: "ApplicationStack",
          name: "Voice SIP Ingress Satellite - HA",
          fragmentId: 123
        },
        {
          fragmentType: "ApplicationStack",
          name: "Voice SIP Ingress Satellite - non-HA",
          fragmentId: 124
        },
        {
          fragmentType: "ExecutionEnvironment",
          name: "eu1sipvicls",
          fragmentId: 125
        },
        {
          fragmentType: "ExecutionEnvironment",
          name: "eu2sipvicls",
          fragmentId: 126
        },
        {
          fragmentType: "ExecutionEnvironment",
          name: "na1sipvicls",
          fragmentId: 127
        },
        {
          fragmentType: "ExecutionEnvironment",
          name: "apac2sipvicls",
          fragmentId: 128
        }
      ],
      executionRules: [
        {
          ruleId: 21,
          rule: "Add-ApplicationGeneralisationInformationalFlow",
          from: "sip-ingress-xx",
          to: "rm-xx",
          direction: "0",
          protocol: "UDP",
          logicalProtocol: "SIP",
          port: "5060",
          portDefinition: "rm-xx_SIP",
          fromNetwork: "Trusted SIP and RTP",
          toNetwork: "Trusted SIP and RTP",
          affinityType: ["localRealm", "parentRealm"]
        }
      ]
    }
  ]
};

export default component;
