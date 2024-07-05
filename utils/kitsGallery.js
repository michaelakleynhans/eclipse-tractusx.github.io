import Business_Kit from "@site/static/img/bpkit.png";
import DataChain_Kit from "@site/static/img/datachainkit.png";
import Connector_Kit from "@site/static/img/connectorkit-min.png";
import Traceability_Kit from "@site/static/img/traceabilitykit.png";
import BehaviourTwin_Kit from "@site/static/img/behaviourtwinkit.png";
import DigitalTwin from "@site/static/img/DigitalTwin.png";
import EcoPass from "@site/static/img/EcoPass.png";
import ESS_Kit from "@site/static/img/ESSKit.png";
import OnlineSimulation from "@site/static/img/OnlineSimulation.png";
import Quality from "@site/static/img/Quality.png";
import PCF_Kit from "@site/static/img/PCF_Kit.png";
import ModularProduction_Kit from "@site/static/img/ModularProduction_Kit.png";
import DemandandCapacityManagement_Kit from "@site/static/img/DemandandCapacityManagement_Kit.png";
import Circularity_Kit from "@site/static/img/Circularity_Kit.png";
import Agents_Kit from "@site/static/img/Agents_Kit.png";
import Maas_Kit from "@site/static/img/MaaSKIT.png";
import PURIS_Kit from '@site/static/img/PURISKIT.png';
import Industry_Kit from "@site/static/img/Industry_Kit.png";
import MDP_Kit from "@site/static/img/mdp_image.png";

// import MoreToCome from "@site/static/img/gallery-more_coming-minified.png";

//************************** IMPORTANT **************************** */

// WHEN DEFINING A "DOMAIN" IN THE kitsGallery ARRAY, MAKE SURE TO SELECT/TYPE EXACTLY AS BELOW:
// * Network & Core Services
// * PLM / Quality
// * Sustainability
// * Resiliency
// * Maturity Levels

//**************************************************************** */

export const kitsGallery = [
  {
    id: 1,
    name: 'Business Partner Kit',
    domain: 'Network & Core Services',
    maturityLevel: 'Graduated',
    img: Business_Kit,
    pageRoute: "/docs-kits/kits/Business Partner Kit/Adoption View"
  },
  {
    id: 2,
    name: 'Data Chain Kit',
    domain: 'Network & Core Services',
    maturityLevel: 'Graduated',
    img: DataChain_Kit,
    pageRoute: "/docs-kits/kits/Data%20Chain%20Kit/Adoption%20View%20Data%20Chain%20Kit"
  },
  {
    id: 3,
    name: 'Connector Kit',
    domain: 'Network & Core Services',
    maturityLevel: 'Graduated',
    img: Connector_Kit,
    pageRoute: "/docs-kits/kits/Connector%20Kit/Adoption%20View/connector_kit_adoption_view"
  },
  {
    id: 4,
    name: 'Traceability Kit',
    domain: 'PLM / Quality',
    maturityLevel: 'Graduated',
    img: Traceability_Kit,
    pageRoute: "/docs-kits/kits/Traceability Kit/Business View Traceability Kit"
  },
  {
    id: 5,
    name: 'Behaviour Twin Kit',
    domain: 'PLM / Quality',
    maturityLevel: 'Graduated',
    img: BehaviourTwin_Kit,
    pageRoute: "/docs-kits/kits/behaviour-twin-kit/overview"
  },
  {
    id: 6,
    name: 'Digital Twin Kit',
    domain: 'Network & Core Services',
    maturityLevel: 'Graduated',
    img: DigitalTwin,
    pageRoute: "/docs-kits/kits/Digital%20Twin%20Kit/Adoption%20View%20Digital%20Twin%20Kit"
  },
  {
    id: 7,
    name: 'Eco Pass Kit',
    domain: 'Sustainability',
    maturityLevel: 'Graduated',
    img: EcoPass,
    pageRoute: "/docs-kits/kits/Eco_Pass_KIT/page-adoption-view"
  },
  {
    id: 8,
    name: 'Online Simulation Kit',
    domain: 'Resiliency',
    maturityLevel: 'Incubating',
    img: OnlineSimulation,
    pageRoute: "/docs-kits/kits/OSim%20Kit/Adoption%20View%20OSim%20Kit"
  },
  {
    id: 9,
    name: 'Quality Kit',
    domain: 'PLM / Quality',
    maturityLevel: 'Incubating',
    img: Quality,
    pageRoute: "/docs-kits/kits/Quality-Kit/Adoption%20View%20Quality%20Kit"
  },
  {
    id: 10,
    name: 'Agents Kit',
    domain: 'Network & Core Services',
    maturityLevel: 'Graduated',
    img: Agents_Kit,
    pageRoute: "/docs-kits/kits/knowledge-agents/adoption-view/intro"
  },
  {
    id: 11,
    name: 'Circularity Kit',
    domain: 'Sustainability',
    maturityLevel: 'Incubating',
    img: Circularity_Kit,
    pageRoute: "/docs-kits/kits/Circularity_KIT/page-adoption-view"
  },
  {
    id: 12,
    name: 'DCM Kit',
    domain: 'Resiliency',
    maturityLevel: 'Incubating',
    img: DemandandCapacityManagement_Kit,
    pageRoute: "/docs-kits/kits/DCM-Kit/adoption-view"
  },
  {
    id: 13,
    name: 'Modular Production Kit',
    domain: 'Resiliency',
    maturityLevel: 'Incubating',
    img: ModularProduction_Kit,
    pageRoute: "/docs-kits/kits/Modular%20Production%20Kit/Adoption%20View%20Modular%20Production%20Kit"
  },
  {
    id: 14,
    name: 'PCF Kit',
    domain: 'Sustainability',
    maturityLevel: 'Incubating',
    img: PCF_Kit,
    pageRoute: "/docs-kits/kits/PCF%20Exchange%20Kit/Adoption%20View"
  },
  {
    id: 15,
    name: 'Manufacturing as a Service Kit',
    domain: 'Resiliency',
    maturityLevel: 'Incubating',
    img: Maas_Kit,
    pageRoute: "/docs-kits/kits/Manufacturing%20as%20a%20Service%20Kit/Adoption%20View%20MaaS%20Kit"
  },
  {
    id: 16,
    name: 'ESS Kit',
    domain: 'Sustainability',
    maturityLevel: 'Sandbox',
    img: ESS_Kit,
    pageRoute: "/docs-kits/kits/ESS-Kit/ESS%20Kit%20Adoption%20View"
  },
  {
    id: 17,
    name: "Industry Core Kit",
    domain: 'Network & Core Services',
    maturityLevel: 'Graduated',
    img: Industry_Kit,
    pageRoute: "/docs-kits/kits/Industry%20Core%20Kit/Business%20View%20Industry%20Core%20Kit"
  },
  {
    id: 18,
    name: 'PURIS Kit',
    domain: 'Resiliency',
    maturityLevel: 'Incubating',
    pageRoute: '/docs-kits/kits/PURIS%20Kit/Adoption%20View%20PURIS%20Kit',
    img: PURIS_Kit,
  },
  {
    id: 19,
    name: 'MDP Kit',
    domain: 'Resiliency',
    maturityLevel: 'Incubating',
    pageRoute: '/docs-kits/kits/Behaviour%20Twin%20MDP%20Kit/page_adoption-view',
    img: MDP_Kit,
  },
]
