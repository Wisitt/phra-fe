import FlowerFillIcon from '@/components/icons/FlowerFillIcon'
import { cn } from '@/lib/utils'

interface Props {
  outline?: boolean
  children?: React.ReactNode
  className?: string
}

export default function PriceBox({ outline = false, children, className }: Props) {
  return (
    <div className={cn('flex h-[55px] text-2xl font-bold', className)}>
      <div className="overflow-hidden">
        <svg
          className={cn('mr-[calc((95px-16px)*-1)] fill-primary-200', outline && 'fill-transparent')}
          width="95"
          height="55"
          viewBox="0 0 95 55"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M8.75928 44.813V44.2939L8.33474 43.9952C4.04835 40.9791 1 34.7846 1 27.5C1 20.2064 4.04797 14.0205 8.33588 10.9943L8.75928 10.6955V10.1773V5.07479H14.3169H15.3169V4.07479V1H15.3422H15.4131H15.4848H15.5573H15.6306H15.7047H15.7795H15.8552H15.9315H16.0087H16.0866H16.1652H16.2447H16.3248H16.4057H16.4874H16.5698H16.6529H16.7368H16.8214H16.9067H16.9928H17.0796H17.1671H17.2553H17.3442H17.4339H17.5242H17.6152H17.707H17.7994H17.8925H17.9863H18.0808H18.176H18.2719H18.3684H18.4656H18.5635H18.662H18.7612H18.8611H18.9616H19.0628H19.1646H19.2671H19.3702H19.4739H19.5783H19.6833H19.789H19.8953H20.0022H20.1097H20.2178H20.3265H20.4359H20.5459H20.6564H20.7676H20.8793H20.9917H21.1046H21.2182H21.3323H21.447H21.5622H21.6781H21.7945H21.9115H22.029H22.1471H22.2658H22.385H22.5048H22.6251H22.7459H22.8673H22.9893H23.1117H23.2347H23.3583H23.4823H23.6069H23.732H23.8576H23.9837H24.1103H24.2374H24.3651H24.4932H24.6218H24.7509H24.8805H25.0106H25.1412H25.2722H25.4037H25.5357H25.6682H25.8011H25.9345H26.0683H26.2026H26.3374H26.4726H26.6082H26.7443H26.8808H27.0178H27.1552H27.293H27.4312H27.5699H27.709H27.8485H27.9884H28.1287H28.2695H28.4106H28.5521H28.6941H28.8364H28.9791H29.1222H29.2657H29.4095H29.5537H29.6984H29.8433H29.9887H30.1344H30.2804H30.4269H30.5736H30.7208H30.8682H31.016H31.1642H31.3127H31.4615H31.6107H31.7601H31.9099H32.0601H32.2105H32.3613H32.5123H32.6637H32.8154H32.9674H33.1196H33.2722H33.4251H33.5782H33.7316H33.8853H34.0393H34.1936H34.3481H34.5029H34.658H34.8133H34.9689H35.1247H35.2808H35.4372H35.5938H35.7506H35.9076H36.0649H36.2225H36.3802H36.5382H36.6964H36.8548H37.0134H37.1723H37.3313H37.4906H37.6501H37.8097H37.9696H38.1296H38.2899H38.4503H38.6109H38.7717H38.9326H39.0938H39.2551H39.4165H39.5782H39.7399H39.9019H40.064H40.2262H40.3886H40.5511H40.7138H40.8766H41.0396H41.2026H41.3658H41.5291H41.6926H41.8561H42.0198H42.1836H42.3475H42.5115H42.6755H42.8397H43.004H43.1684H43.3328H43.4974H43.662H43.8267H43.9914H44.1563H44.3212H44.4861H44.6512H44.8163H44.9814H45.1466H45.3118H45.4771H45.6424H45.8078H45.9732H46.1386H46.3041H46.4695H46.635H46.8005H46.9661H47.1316H47.2971H47.4627H47.6283H47.7938H47.9593H48.1249H48.2904H48.4559H48.6214H48.7869H48.9523H49.1177H49.2831H49.4485H49.6138H49.779H49.9443H50.1094H50.2746H50.4396H50.6046H50.7696H50.9345H51.0993H51.264H51.4287H51.5933H51.7578H51.9223H52.0866H52.2508H52.415H52.5791H52.743H52.9069H53.0706H53.2343H53.3978H53.5612H53.7245H53.8876H54.0507H54.2136H54.3763H54.539H54.7015H54.8638H55.026H55.188H55.3499H55.5117H55.6733H55.8347H55.9959H56.157H56.3179H56.4787H56.6392H56.7996H56.9598H57.1198H57.2796H57.4392H57.5986H57.7578H57.9168H58.0755H58.2341H58.3925H58.5506H58.7085H58.8662H59.0237H59.1809H59.3379H59.4947H59.6512H59.8074H59.9635H60.1192H60.2747H60.43H60.585H60.7397H60.8941H61.0483H61.2022H61.3559H61.5092H61.6623H61.8151H61.9675H62.1197H62.2716H62.4232H62.5745H62.7255H62.8761H63.0265H63.1765H63.3262H63.4756H63.6247H63.7734H63.9218H64.0699H64.2176H64.3649H64.512H64.6586H64.805H64.9509H65.0965H65.2418H65.3866H65.5311H65.6753H65.819H65.9624H66.1054H66.2479H66.3902H66.532H66.6734H66.8144H66.955H67.0952H67.235H67.3744H67.5134H67.6519H67.79H67.9277H68.065H68.2018H68.3382H68.4742H68.6097H68.7448H68.8794H69.0136H69.1473H69.2805H69.4133H69.5457H69.6775H69.8089H69.9398H70.0702H70.2002H70.3296H70.4586H70.5871H70.7151H70.8425H70.9695H71.096H71.222H71.3474H71.4724H71.5968H71.7207H71.8441H71.9669H72.0892H72.211H72.3322H72.4529H72.5731H72.6927H72.8118H72.9303H73.0482H73.1656H73.2824H73.3987H73.5143H73.6294H73.744H73.8579H73.9713H74.0841H74.1962H74.3078H74.4188H74.5292H74.639H74.7482H74.8567H74.9647H75.072H75.1787H75.2848H75.3903H75.4951H75.5993H75.7029H75.8058H75.9081H76.0098H76.1107H76.2111H76.3107H76.4098H76.5081H76.6058H76.7028H76.7991H76.8948H76.9898H77.0841H77.1777H77.2706H77.3629H77.4544H77.5452H77.6354H77.7248H77.8135H77.9015H77.9888H78.0754H78.1613H78.2464H78.3308H78.4144H78.4974H78.5796H78.661H78.7417H78.8217H78.9009H78.9793H79.057H79.1339H79.2101H79.2855H79.3601H79.4339H79.507H79.5793H79.6508H79.6853V4.07479V5.07479H80.6853H86.243V10.187V10.7055L86.6667 11.0043C90.9445 14.0203 93.9929 20.2153 93.9929 27.5C93.9929 34.7843 90.9447 40.9802 86.6656 44.0062L86.243 44.3051V44.8227V49.9252H80.6853H79.6853V50.9252V54H79.6499H79.5784H79.506H79.4329H79.359H79.2844H79.2089H79.1327H79.0557H78.978H78.8995H78.8203H78.7403H78.6595H78.578H78.4958H78.4128H78.3291H78.2446H78.1595H78.0736H77.987H77.8996H77.8116H77.7228H77.6333H77.5431H77.4523H77.3607H77.2684H77.1754H77.0818H76.9874H76.8924H76.7967H76.7003H76.6032H76.5055H76.4071H76.3081H76.2083H76.108H76.0069H75.9053H75.8029H75.7H75.5964H75.4921H75.3872H75.2817H75.1756H75.0688H74.9615H74.8535H74.7449H74.6357H74.5258H74.4154H74.3044H74.1927H74.0805H73.9677H73.8543H73.7403H73.6258H73.5106H73.3949H73.2786H73.1618H73.0443H72.9264H72.8078H72.6887H72.5691H72.4489H72.3282H72.2069H72.0851H71.9627H71.8398H71.7164H71.5925H71.468H71.3431H71.2176H71.0916H70.9651H70.8381H70.7105H70.5825H70.454H70.325H70.1955H70.0655H69.9351H69.8041H69.6727H69.5408H69.4085H69.2757H69.1424H69.0086H68.8745H68.7398H68.6047H68.4692H68.3332H68.1967H68.0599H67.9226H67.7849H67.6467H67.5081H67.3691H67.2297H67.0899H66.9497H66.809H66.668H66.5265H66.3847H66.2425H66.0999H65.9568H65.8134H65.6697H65.5255H65.381H65.2361H65.0909H64.9452H64.7992H64.6529H64.5062H64.3592H64.2118H64.064H63.9159H63.7675H63.6188H63.4697H63.3203H63.1706H63.0205H62.8701H62.7194H62.5684H62.4171H62.2655H62.1136H61.9614H61.8089H61.6561H61.503H61.3497H61.196H61.0421H60.8879H60.7334H60.5787H60.4237H60.2684H60.1129H59.9571H59.8011H59.6448H59.4883H59.3315H59.1745H59.0172H58.8598H58.702H58.5441H58.386H58.2276H58.069H57.9102H57.7512H57.592H57.4326H57.2729H57.1131H56.9531H56.7929H56.6326H56.472H56.3112H56.1503H55.9892H55.828H55.6665H55.505H55.3432H55.1813H55.0192H54.857H54.6947H54.5322H54.3695H54.2067H54.0438H53.8808H53.7176H53.5543H53.3909H53.2274H53.0638H52.9H52.7361H52.5722H52.4081H52.2439H52.0797H51.9153H51.7509H51.5864H51.4218H51.2571H51.0924H50.9275H50.7627H50.5977H50.4327H50.2676H50.1025H49.9373H49.7721H49.6068H49.4415H49.2761H49.1108H48.9453H48.7799H48.6144H48.4489H48.2834H48.1179H47.9524H47.7868H47.6213H47.4557H47.2902H47.1246H46.9591H46.7936H46.628H46.4625H46.2971H46.1316H45.9662H45.8008H45.6354H45.4701H45.3049H45.1396H44.9744H44.8093H44.6442H44.4792H44.3142H44.1493H43.9845H43.8197H43.655H43.4904H43.3259H43.1615H42.9971H42.8328H42.6686H42.5046H42.3406H42.1767H42.0129H41.8493H41.6857H41.5223H41.359H41.1958H41.0327H40.8698H40.707H40.5443H40.3818H40.2194H40.0572H39.8951H39.7332H39.5714H39.4098H39.2483H39.0871H38.9259H38.765H38.6042H38.4436H38.2832H38.123H37.963H37.8031H37.6435H37.484H37.3248H37.1657H37.0069H36.8483H36.6899H36.5317H36.3737H36.216H36.0585H35.9012H35.7441H35.5873H35.4308H35.2744H35.1184H34.9626H34.807H34.6517H34.4966H34.3418H34.1873H34.0331H33.8791H33.7254H33.572H33.4189H33.266H33.1135H32.9612H32.8093H32.6576H32.5063H32.3552H32.2045H32.0541H31.904H31.7542H31.6047H31.4556H31.3068H31.1583H31.0102H30.8624H30.7149H30.5678H30.4211H30.2747H30.1287H29.983H29.8377H29.6927H29.5481H29.4039H29.2601H29.1166H28.9736H28.8309H28.6886H28.5467H28.4052H28.2641H28.1234H27.9831H27.8432H27.7037H27.5646H27.426H27.2878H27.15H27.0126H26.8757H26.7392H26.6031H26.4675H26.3324H26.1976H26.0634H25.9296H25.7962H25.6633H25.5309H25.3989H25.2674H25.1364H25.0059H24.8758H24.7463H24.6172H24.4886H24.3605H24.2329H24.1058H23.9792H23.8531H23.7276H23.6025H23.478H23.354H23.2305H23.1075H22.9851H22.8632H22.7418H22.621H22.5007H22.381H22.2618H22.1432H22.0251H21.9076H21.7907H21.6743H21.5585H21.4432H21.3286H21.2145H21.101H20.9881H20.8758H20.7641H20.653H20.5424H20.4325H20.3232H20.2145H20.1064H19.9989H19.8921H19.7858H19.6802H19.5753H19.4709H19.3672H19.2642H19.1617H19.0599H18.9588H18.8583H18.7585H18.6594H18.5609H18.463H18.3659H18.2694H18.1736H18.0784H17.984H17.8902H17.7971H17.7047H17.613H17.522H17.4317H17.3422H17.2533H17.1651H17.0777H16.9909H16.9049H16.8196H16.7351H16.6513H16.5682H16.4858H16.4042H16.3233H16.2432H16.1638H16.0852H16.0074H15.9303H15.854H15.7784H15.7036H15.6296H15.5563H15.4839H15.4122H15.3413H15.3169V50.9252V49.9267L14.3184 49.9252L8.75928 49.917V44.813Z" stroke="#D9C4AE" strokeWidth="2" />
        </svg>
      </div>
      <div className={cn('flex h-full grow items-center bg-primary-200 justify-between border-y-2 border-primary-200', outline && 'bg-transparent px-[18px]')}>
        <FlowerFillIcon className="text-primary-600" />
        <p className={cn('flex items-center gap-4 px-[29.5px]', outline && 'px-0')}>{children}</p>
        <FlowerFillIcon className="text-primary-600" />
      </div>
      <div className="overflow-hidden">
        <svg
          className={cn('ml-[calc((95px-16px)*-1)] fill-primary-200', outline && 'fill-transparent')}
          width="95"
          height="55"
          viewBox="0 0 95 55"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M8.75928 44.813V44.2939L8.33474 43.9952C4.04835 40.9791 1 34.7846 1 27.5C1 20.2064 4.04797 14.0205 8.33588 10.9943L8.75928 10.6955V10.1773V5.07479H14.3169H15.3169V4.07479V1H15.3422H15.4131H15.4848H15.5573H15.6306H15.7047H15.7795H15.8552H15.9315H16.0087H16.0866H16.1652H16.2447H16.3248H16.4057H16.4874H16.5698H16.6529H16.7368H16.8214H16.9067H16.9928H17.0796H17.1671H17.2553H17.3442H17.4339H17.5242H17.6152H17.707H17.7994H17.8925H17.9863H18.0808H18.176H18.2719H18.3684H18.4656H18.5635H18.662H18.7612H18.8611H18.9616H19.0628H19.1646H19.2671H19.3702H19.4739H19.5783H19.6833H19.789H19.8953H20.0022H20.1097H20.2178H20.3265H20.4359H20.5459H20.6564H20.7676H20.8793H20.9917H21.1046H21.2182H21.3323H21.447H21.5622H21.6781H21.7945H21.9115H22.029H22.1471H22.2658H22.385H22.5048H22.6251H22.7459H22.8673H22.9893H23.1117H23.2347H23.3583H23.4823H23.6069H23.732H23.8576H23.9837H24.1103H24.2374H24.3651H24.4932H24.6218H24.7509H24.8805H25.0106H25.1412H25.2722H25.4037H25.5357H25.6682H25.8011H25.9345H26.0683H26.2026H26.3374H26.4726H26.6082H26.7443H26.8808H27.0178H27.1552H27.293H27.4312H27.5699H27.709H27.8485H27.9884H28.1287H28.2695H28.4106H28.5521H28.6941H28.8364H28.9791H29.1222H29.2657H29.4095H29.5537H29.6984H29.8433H29.9887H30.1344H30.2804H30.4269H30.5736H30.7208H30.8682H31.016H31.1642H31.3127H31.4615H31.6107H31.7601H31.9099H32.0601H32.2105H32.3613H32.5123H32.6637H32.8154H32.9674H33.1196H33.2722H33.4251H33.5782H33.7316H33.8853H34.0393H34.1936H34.3481H34.5029H34.658H34.8133H34.9689H35.1247H35.2808H35.4372H35.5938H35.7506H35.9076H36.0649H36.2225H36.3802H36.5382H36.6964H36.8548H37.0134H37.1723H37.3313H37.4906H37.6501H37.8097H37.9696H38.1296H38.2899H38.4503H38.6109H38.7717H38.9326H39.0938H39.2551H39.4165H39.5782H39.7399H39.9019H40.064H40.2262H40.3886H40.5511H40.7138H40.8766H41.0396H41.2026H41.3658H41.5291H41.6926H41.8561H42.0198H42.1836H42.3475H42.5115H42.6755H42.8397H43.004H43.1684H43.3328H43.4974H43.662H43.8267H43.9914H44.1563H44.3212H44.4861H44.6512H44.8163H44.9814H45.1466H45.3118H45.4771H45.6424H45.8078H45.9732H46.1386H46.3041H46.4695H46.635H46.8005H46.9661H47.1316H47.2971H47.4627H47.6283H47.7938H47.9593H48.1249H48.2904H48.4559H48.6214H48.7869H48.9523H49.1177H49.2831H49.4485H49.6138H49.779H49.9443H50.1094H50.2746H50.4396H50.6046H50.7696H50.9345H51.0993H51.264H51.4287H51.5933H51.7578H51.9223H52.0866H52.2508H52.415H52.5791H52.743H52.9069H53.0706H53.2343H53.3978H53.5612H53.7245H53.8876H54.0507H54.2136H54.3763H54.539H54.7015H54.8638H55.026H55.188H55.3499H55.5117H55.6733H55.8347H55.9959H56.157H56.3179H56.4787H56.6392H56.7996H56.9598H57.1198H57.2796H57.4392H57.5986H57.7578H57.9168H58.0755H58.2341H58.3925H58.5506H58.7085H58.8662H59.0237H59.1809H59.3379H59.4947H59.6512H59.8074H59.9635H60.1192H60.2747H60.43H60.585H60.7397H60.8941H61.0483H61.2022H61.3559H61.5092H61.6623H61.8151H61.9675H62.1197H62.2716H62.4232H62.5745H62.7255H62.8761H63.0265H63.1765H63.3262H63.4756H63.6247H63.7734H63.9218H64.0699H64.2176H64.3649H64.512H64.6586H64.805H64.9509H65.0965H65.2418H65.3866H65.5311H65.6753H65.819H65.9624H66.1054H66.2479H66.3902H66.532H66.6734H66.8144H66.955H67.0952H67.235H67.3744H67.5134H67.6519H67.79H67.9277H68.065H68.2018H68.3382H68.4742H68.6097H68.7448H68.8794H69.0136H69.1473H69.2805H69.4133H69.5457H69.6775H69.8089H69.9398H70.0702H70.2002H70.3296H70.4586H70.5871H70.7151H70.8425H70.9695H71.096H71.222H71.3474H71.4724H71.5968H71.7207H71.8441H71.9669H72.0892H72.211H72.3322H72.4529H72.5731H72.6927H72.8118H72.9303H73.0482H73.1656H73.2824H73.3987H73.5143H73.6294H73.744H73.8579H73.9713H74.0841H74.1962H74.3078H74.4188H74.5292H74.639H74.7482H74.8567H74.9647H75.072H75.1787H75.2848H75.3903H75.4951H75.5993H75.7029H75.8058H75.9081H76.0098H76.1107H76.2111H76.3107H76.4098H76.5081H76.6058H76.7028H76.7991H76.8948H76.9898H77.0841H77.1777H77.2706H77.3629H77.4544H77.5452H77.6354H77.7248H77.8135H77.9015H77.9888H78.0754H78.1613H78.2464H78.3308H78.4144H78.4974H78.5796H78.661H78.7417H78.8217H78.9009H78.9793H79.057H79.1339H79.2101H79.2855H79.3601H79.4339H79.507H79.5793H79.6508H79.6853V4.07479V5.07479H80.6853H86.243V10.187V10.7055L86.6667 11.0043C90.9445 14.0203 93.9929 20.2153 93.9929 27.5C93.9929 34.7843 90.9447 40.9802 86.6656 44.0062L86.243 44.3051V44.8227V49.9252H80.6853H79.6853V50.9252V54H79.6499H79.5784H79.506H79.4329H79.359H79.2844H79.2089H79.1327H79.0557H78.978H78.8995H78.8203H78.7403H78.6595H78.578H78.4958H78.4128H78.3291H78.2446H78.1595H78.0736H77.987H77.8996H77.8116H77.7228H77.6333H77.5431H77.4523H77.3607H77.2684H77.1754H77.0818H76.9874H76.8924H76.7967H76.7003H76.6032H76.5055H76.4071H76.3081H76.2083H76.108H76.0069H75.9053H75.8029H75.7H75.5964H75.4921H75.3872H75.2817H75.1756H75.0688H74.9615H74.8535H74.7449H74.6357H74.5258H74.4154H74.3044H74.1927H74.0805H73.9677H73.8543H73.7403H73.6258H73.5106H73.3949H73.2786H73.1618H73.0443H72.9264H72.8078H72.6887H72.5691H72.4489H72.3282H72.2069H72.0851H71.9627H71.8398H71.7164H71.5925H71.468H71.3431H71.2176H71.0916H70.9651H70.8381H70.7105H70.5825H70.454H70.325H70.1955H70.0655H69.9351H69.8041H69.6727H69.5408H69.4085H69.2757H69.1424H69.0086H68.8745H68.7398H68.6047H68.4692H68.3332H68.1967H68.0599H67.9226H67.7849H67.6467H67.5081H67.3691H67.2297H67.0899H66.9497H66.809H66.668H66.5265H66.3847H66.2425H66.0999H65.9568H65.8134H65.6697H65.5255H65.381H65.2361H65.0909H64.9452H64.7992H64.6529H64.5062H64.3592H64.2118H64.064H63.9159H63.7675H63.6188H63.4697H63.3203H63.1706H63.0205H62.8701H62.7194H62.5684H62.4171H62.2655H62.1136H61.9614H61.8089H61.6561H61.503H61.3497H61.196H61.0421H60.8879H60.7334H60.5787H60.4237H60.2684H60.1129H59.9571H59.8011H59.6448H59.4883H59.3315H59.1745H59.0172H58.8598H58.702H58.5441H58.386H58.2276H58.069H57.9102H57.7512H57.592H57.4326H57.2729H57.1131H56.9531H56.7929H56.6326H56.472H56.3112H56.1503H55.9892H55.828H55.6665H55.505H55.3432H55.1813H55.0192H54.857H54.6947H54.5322H54.3695H54.2067H54.0438H53.8808H53.7176H53.5543H53.3909H53.2274H53.0638H52.9H52.7361H52.5722H52.4081H52.2439H52.0797H51.9153H51.7509H51.5864H51.4218H51.2571H51.0924H50.9275H50.7627H50.5977H50.4327H50.2676H50.1025H49.9373H49.7721H49.6068H49.4415H49.2761H49.1108H48.9453H48.7799H48.6144H48.4489H48.2834H48.1179H47.9524H47.7868H47.6213H47.4557H47.2902H47.1246H46.9591H46.7936H46.628H46.4625H46.2971H46.1316H45.9662H45.8008H45.6354H45.4701H45.3049H45.1396H44.9744H44.8093H44.6442H44.4792H44.3142H44.1493H43.9845H43.8197H43.655H43.4904H43.3259H43.1615H42.9971H42.8328H42.6686H42.5046H42.3406H42.1767H42.0129H41.8493H41.6857H41.5223H41.359H41.1958H41.0327H40.8698H40.707H40.5443H40.3818H40.2194H40.0572H39.8951H39.7332H39.5714H39.4098H39.2483H39.0871H38.9259H38.765H38.6042H38.4436H38.2832H38.123H37.963H37.8031H37.6435H37.484H37.3248H37.1657H37.0069H36.8483H36.6899H36.5317H36.3737H36.216H36.0585H35.9012H35.7441H35.5873H35.4308H35.2744H35.1184H34.9626H34.807H34.6517H34.4966H34.3418H34.1873H34.0331H33.8791H33.7254H33.572H33.4189H33.266H33.1135H32.9612H32.8093H32.6576H32.5063H32.3552H32.2045H32.0541H31.904H31.7542H31.6047H31.4556H31.3068H31.1583H31.0102H30.8624H30.7149H30.5678H30.4211H30.2747H30.1287H29.983H29.8377H29.6927H29.5481H29.4039H29.2601H29.1166H28.9736H28.8309H28.6886H28.5467H28.4052H28.2641H28.1234H27.9831H27.8432H27.7037H27.5646H27.426H27.2878H27.15H27.0126H26.8757H26.7392H26.6031H26.4675H26.3324H26.1976H26.0634H25.9296H25.7962H25.6633H25.5309H25.3989H25.2674H25.1364H25.0059H24.8758H24.7463H24.6172H24.4886H24.3605H24.2329H24.1058H23.9792H23.8531H23.7276H23.6025H23.478H23.354H23.2305H23.1075H22.9851H22.8632H22.7418H22.621H22.5007H22.381H22.2618H22.1432H22.0251H21.9076H21.7907H21.6743H21.5585H21.4432H21.3286H21.2145H21.101H20.9881H20.8758H20.7641H20.653H20.5424H20.4325H20.3232H20.2145H20.1064H19.9989H19.8921H19.7858H19.6802H19.5753H19.4709H19.3672H19.2642H19.1617H19.0599H18.9588H18.8583H18.7585H18.6594H18.5609H18.463H18.3659H18.2694H18.1736H18.0784H17.984H17.8902H17.7971H17.7047H17.613H17.522H17.4317H17.3422H17.2533H17.1651H17.0777H16.9909H16.9049H16.8196H16.7351H16.6513H16.5682H16.4858H16.4042H16.3233H16.2432H16.1638H16.0852H16.0074H15.9303H15.854H15.7784H15.7036H15.6296H15.5563H15.4839H15.4122H15.3413H15.3169V50.9252V49.9267L14.3184 49.9252L8.75928 49.917V44.813Z" stroke="#D9C4AE" strokeWidth="2" />
        </svg>
      </div>
    </div>

  )
}
