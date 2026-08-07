export const POLICY_VERSION = '1.0';
export const POLICY_DATE = '29 de julio de 2026';

export const POLICY_CONTACT = {
  razonSocial: 'MTM Marca Tu Marca Creativos S.A.S.',
  nit: '901208667-5',
  actividad: 'Agencia de publicidad y comunicación de marca',
  domicilio: 'Carrera 7 #45-76 ofc 401',
  emails: ['mtm.marcatumarca@gmail.com', 'comercial1@mtmmarcatumarca.com'],
  sitioWeb: 'www.mtmmarcatumarca.com',
  telefono: '3123693829',
} as const;

export type PolicyBlock =
  | { type: 'p'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'dl'; items: { term: string; text: string }[] }
  | { type: 'table'; rows: { label: string; value: string }[] };

export interface PolicySection {
  id: string;
  number: string;
  title: string;
  blocks: PolicyBlock[];
}

export const POLICY_SECTIONS: PolicySection[] = [
  {
    id: 'objeto',
    number: '1',
    title: 'Objeto y alcance',
    blocks: [
      {
        type: 'p',
        text:
          'La presente Política de Tratamiento de Datos Personales (en adelante "la Política") tiene por objeto establecer los lineamientos, principios y procedimientos que MTM Marca Tu Marca Creativos S.A.S. (en adelante "MTM" o "la Agencia") aplica para la recolección, almacenamiento, uso, circulación, transmisión, transferencia y supresión de los datos personales de los titulares con quienes se relaciona en el desarrollo de su actividad como agencia de publicidad y comunicación de marca.',
      },
      {
        type: 'p',
        text:
          'Esta Política aplica a los datos personales de clientes, prospectos comerciales, proveedores, aliados estratégicos, colaboradores, candidatos a empleo, y demás personas naturales cuyos datos sean recolectados a través del sitio web, WhatsApp, redes sociales, reuniones comerciales, formularios, contratos o cualquier otro canal utilizado por MTM.',
      },
    ],
  },
  {
    id: 'responsable',
    number: '2',
    title: 'Identificación del Responsable del Tratamiento',
    blocks: [
      {
        type: 'table',
        rows: [
          { label: 'Razón social', value: POLICY_CONTACT.razonSocial },
          { label: 'NIT', value: POLICY_CONTACT.nit },
          { label: 'Actividad económica', value: POLICY_CONTACT.actividad },
          { label: 'Domicilio principal', value: POLICY_CONTACT.domicilio },
          { label: 'Correo para ejercicio de derechos', value: POLICY_CONTACT.emails.join(' – ') },
          { label: 'Sitio web', value: POLICY_CONTACT.sitioWeb },
          { label: 'Teléfono / WhatsApp de contacto', value: POLICY_CONTACT.telefono },
        ],
      },
    ],
  },
  {
    id: 'marco-normativo',
    number: '3',
    title: 'Marco normativo',
    blocks: [
      { type: 'p', text: 'Esta Política se fundamenta en:' },
      {
        type: 'ul',
        items: [
          'Constitución Política de Colombia, artículo 15 (derecho al hábeas data).',
          'Ley Estatutaria 1581 de 2012, "por la cual se dictan disposiciones generales para la protección de datos personales".',
          'Decreto 1074 de 2015, Título 2, Capítulo 25 (compiló el Decreto 1377 de 2013).',
          'Circular Única de la Superintendencia de Industria y Comercio (SIC), Título V.',
          'Las demás normas que las adicionen, modifiquen, reglamenten o sustituyan.',
        ],
      },
    ],
  },
  {
    id: 'definiciones',
    number: '4',
    title: 'Definiciones',
    blocks: [
      {
        type: 'dl',
        items: [
          {
            term: 'Autorización',
            text: 'Consentimiento previo, expreso e informado del titular para llevar a cabo el tratamiento de sus datos personales.',
          },
          { term: 'Base de datos', text: 'Conjunto organizado de datos personales objeto de tratamiento.' },
          {
            term: 'Dato personal',
            text: 'Cualquier información vinculada o que pueda asociarse a una o varias personas naturales determinadas o determinables.',
          },
          {
            term: 'Dato sensible',
            text: 'Aquel que afecta la intimidad del titular o cuyo uso indebido puede generar discriminación (origen racial o étnico, ideología política, convicciones religiosas, salud, vida sexual, datos biométricos, entre otros).',
          },
          {
            term: 'Encargado del tratamiento',
            text: 'Persona natural o jurídica que, por sí misma o en asocio con otros, realiza el tratamiento de datos personales por cuenta del responsable.',
          },
          {
            term: 'Responsable del tratamiento',
            text: 'Persona natural o jurídica que decide sobre la base de datos y/o el tratamiento de los datos; en este caso, MTM Marca Tu Marca Creativos S.A.S.',
          },
          { term: 'Titular', text: 'Persona natural cuyos datos personales son objeto de tratamiento.' },
          {
            term: 'Tratamiento',
            text: 'Cualquier operación sobre datos personales, tal como recolección, almacenamiento, uso, circulación o supresión.',
          },
          {
            term: 'Transferencia',
            text: 'Envío de datos personales por el responsable a un receptor que a su vez es responsable del tratamiento, dentro o fuera de Colombia.',
          },
          {
            term: 'Transmisión',
            text: 'Tratamiento de datos personales por cuenta del responsable, por parte de un encargado dentro o fuera del país.',
          },
        ],
      },
    ],
  },
  {
    id: 'principios',
    number: '5',
    title: 'Principios rectores del tratamiento',
    blocks: [
      {
        type: 'ul',
        items: [
          'Legalidad: el tratamiento se sujeta a la ley y demás normas aplicables.',
          'Finalidad: el tratamiento obedece a una finalidad legítima, informada al titular.',
          'Libertad: el tratamiento solo se ejerce con el consentimiento previo, expreso e informado del titular.',
          'Veracidad o calidad: la información sujeta a tratamiento debe ser veraz, completa, exacta, actualizada y comprobable.',
          'Transparencia: se garantiza al titular el derecho a obtener información sobre la existencia de datos que le conciernen.',
          'Acceso y circulación restringida: el tratamiento solo lo realizan personas autorizadas por el titular o por la ley.',
          'Seguridad: se emplean medidas técnicas, humanas y administrativas para proteger la información.',
          'Confidencialidad: quienes intervienen en el tratamiento están obligados a garantizar la reserva de la información.',
        ],
      },
    ],
  },
  {
    id: 'datos-tratados',
    number: '6',
    title: 'Datos personales objeto de tratamiento',
    blocks: [
      {
        type: 'p',
        text: 'En desarrollo de su actividad, MTM recolecta y trata datos personales de las siguientes categorías de titulares:',
      },
      {
        type: 'ul',
        items: [
          'Clientes y prospectos comerciales: nombre, cargo, empresa, correo electrónico, teléfono, NIT y demás datos de contacto suministrados en reuniones, formularios web o WhatsApp.',
          'Usuarios del sitio web y redes sociales: datos de contacto y datos de navegación (cookies, comportamiento en el sitio), recolectados con fines de analítica y mejora de la experiencia.',
          'Proveedores y aliados estratégicos: datos de contacto necesarios para la relación contractual.',
          'Colaboradores y candidatos a empleo: hoja de vida y datos de contacto suministrados en procesos de selección.',
          'Talento en producciones: personas que participan en piezas audiovisuales, campañas o activaciones de marca producidas por MTM (imagen y voz), bajo autorización específica adicional a esta Política.',
        ],
      },
      {
        type: 'p',
        text:
          'MTM no recolecta datos sensibles (salud, orientación sexual o política, creencias religiosas, datos biométricos) como parte de su operación habitual. Cuando por razón de un proyecto puntual se requiera un dato sensible, se solicitará una autorización expresa, específica y separada, informando al titular que no está obligado a autorizarlo.',
      },
      {
        type: 'p',
        text:
          'MTM no dirige la recolección de datos a menores de edad. En los casos en que un proyecto involucre a un menor (por ejemplo, participación en una pieza audiovisual), el tratamiento se realizará únicamente con la autorización expresa del representante legal del menor y respetando el interés superior de este.',
      },
    ],
  },
  {
    id: 'finalidades',
    number: '7',
    title: 'Finalidades del tratamiento',
    blocks: [
      { type: 'p', text: 'Los datos personales recolectados por MTM serán tratados para las siguientes finalidades:' },
      {
        type: 'ul',
        items: [
          'Gestionar la relación comercial, contractual y administrativa con clientes y proveedores.',
          'Elaborar diagnósticos de negocio, propuestas y cotizaciones.',
          'Ejecutar los servicios contratados de branding, producción audiovisual y marketing digital.',
          'Contactar a los titulares para envío de información comercial, contenido de valor e invitaciones a eventos.',
          'Adelantar procesos de selección y vinculación de personal.',
          'Gestionar el uso de imagen y voz de personas que participan en piezas de comunicación producidas por MTM, dentro del alcance autorizado por cada titular.',
          'Realizar encuestas de satisfacción y seguimiento a los servicios prestados.',
          'Cumplir obligaciones legales, contables, tributarias y contractuales.',
          'Analizar el comportamiento de navegación en el sitio web con fines de analítica y mejora de la experiencia (cookies).',
          'Compartir información con proveedores tecnológicos, plataformas de pauta digital o aliados necesarios para la ejecución de las campañas, bajo acuerdos que garanticen la confidencialidad de la información.',
        ],
      },
    ],
  },
  {
    id: 'derechos',
    number: '8',
    title: 'Derechos de los titulares',
    blocks: [
      { type: 'p', text: 'De acuerdo con el artículo 8 de la Ley 1581 de 2012, todo titular tiene derecho a:' },
      {
        type: 'ul',
        items: [
          'Conocer, actualizar y rectificar sus datos personales frente a MTM.',
          'Solicitar prueba de la autorización otorgada, salvo que la ley exceptúe este requisito.',
          'Ser informado sobre el uso que se le ha dado a sus datos personales.',
          'Presentar quejas ante la Superintendencia de Industria y Comercio (SIC) por infracciones a la normatividad vigente.',
          'Revocar la autorización y/o solicitar la supresión del dato, cuando no exista un deber legal o contractual que lo impida.',
          'Acceder de forma gratuita a sus datos personales que hayan sido objeto de tratamiento.',
        ],
      },
    ],
  },
  {
    id: 'deberes',
    number: '9',
    title: 'Deberes de MTM como responsable del tratamiento',
    blocks: [
      {
        type: 'ul',
        items: [
          'Garantizar al titular, en todo tiempo, el pleno y efectivo ejercicio de sus derechos.',
          'Solicitar y conservar copia de la autorización otorgada por el titular.',
          'Informar debida y oportunamente al titular acerca de la finalidad de la recolección y los derechos que le asisten.',
          'Conservar la información bajo las condiciones de seguridad necesarias para impedir su adulteración, pérdida, consulta, uso o acceso no autorizado.',
          'Tramitar las consultas y reclamos formulados en los términos señalados en esta Política.',
          'Actualizar la información cuando el titular comunique un cambio en sus datos.',
          'Rectificar la información cuando sea incorrecta y comunicar dicha rectificación al encargado del tratamiento, cuando aplique.',
          'Abstenerse de circular información que esté siendo controvertida por el titular y cuyo bloqueo haya sido ordenado por la SIC.',
        ],
      },
    ],
  },
  {
    id: 'consultas-reclamos',
    number: '10',
    title: 'Procedimiento para consultas y reclamos',
    blocks: [
      { type: 'h3', text: '10.1 Consultas' },
      {
        type: 'p',
        text:
          'El titular, sus causahabientes o su representante podrán consultar la información personal que repose en las bases de datos de MTM. La consulta será atendida en un término máximo de diez (10) días hábiles contados a partir de la fecha de recibo. Cuando no sea posible atenderla dentro de dicho término, se informará al interesado antes del vencimiento, expresando los motivos de la demora y señalando la fecha en que se atenderá su consulta, la cual en ningún caso podrá superar los cinco (5) días hábiles siguientes al vencimiento del primer término.',
      },
      { type: 'h3', text: '10.2 Reclamos' },
      {
        type: 'p',
        text:
          'El titular que considere que su información debe ser corregida, actualizada o suprimida, o que advierta un presunto incumplimiento de la ley, podrá presentar un reclamo ante MTM. El reclamo se tramitará en un término máximo de quince (15) días hábiles contados a partir del día siguiente a la fecha de su recibo. Cuando no sea posible atenderlo dentro de dicho término, se informará al interesado los motivos de la demora y la fecha en que se atenderá, la cual en ningún caso podrá superar los ocho (8) días hábiles siguientes al vencimiento del primer término.',
      },
      { type: 'h3', text: '10.3 Canal de atención' },
      {
        type: 'p',
        text:
          'Las consultas y reclamos deberán dirigirse al correo electrónico de contacto indicado en el numeral 2 de esta Política, incluyendo: nombre completo del titular, número de documento de identidad, descripción clara de los hechos que dan lugar al reclamo o consulta, y datos de contacto para dar respuesta.',
      },
    ],
  },
  {
    id: 'area-responsable',
    number: '11',
    title: 'Área responsable de la protección de datos',
    blocks: [
      { type: 'p', text: 'Puedes ejercer tus derechos si eres titular o representante legal. Debes aportar:' },
      {
        type: 'ul',
        items: [
          'Nombres y apellidos completos',
          'Tipo y número de identificación',
          'Datos de contacto (dirección, correo, teléfono)',
          'Descripción del derecho que deseas ejercer',
          'Fotocopia del documento de identidad u otro documento que acredite tu representación',
        ],
      },
      {
        type: 'p',
        text:
          'Responsable interno: Key Account Manager de MTM Marca Tu Marca, quien también podrá requerir otras áreas para verificar el cumplimiento de la normativa.',
      },
    ],
  },
  {
    id: 'transferencia',
    number: '12',
    title: 'Transferencia y transmisión de datos a terceros',
    blocks: [
      { type: 'p', text: 'En el desarrollo de sus servicios, MTM podrá transferir o transmitir datos personales a:' },
      {
        type: 'ul',
        items: [
          'Proveedores tecnológicos que soportan herramientas de CRM, email marketing y analítica web.',
          'Plataformas de pauta y publicidad digital (por ejemplo, Meta, Google, TikTok, LinkedIn) para la ejecución de campañas.',
          'Aliados estratégicos de producción audiovisual y freelancers vinculados a proyectos específicos.',
          'Autoridades administrativas o judiciales competentes, cuando exista un requerimiento legal.',
        ],
      },
      {
        type: 'p',
        text:
          'Toda transmisión de datos a un encargado del tratamiento se realizará bajo un contrato o acuerdo que garantice el cumplimiento de la Ley 1581 de 2012 y la confidencialidad de la información tratada.',
      },
    ],
  },
  {
    id: 'imagen-voz',
    number: '13',
    title: 'Uso de imagen y voz en piezas de comunicación',
    blocks: [
      {
        type: 'p',
        text:
          'Dado que MTM produce contenido de marca, publicitario y audiovisual, cuando se requiera capturar imagen, voz o testimonios de clientes, colaboradores o terceros para su uso en portafolio, redes sociales o campañas, se solicitará una autorización de uso de imagen específica y adicional a la presente Política, en la que se precisará el alcance, los medios y el tiempo de uso autorizado.',
      },
    ],
  },
  {
    id: 'seguridad',
    number: '14',
    title: 'Seguridad de la información',
    blocks: [
      {
        type: 'p',
        text:
          'MTM implementa medidas técnicas, humanas y administrativas razonables y proporcionales para proteger los datos personales contra pérdida, uso o acceso no autorizado, alteración o destrucción, incluyendo, entre otras:',
      },
      {
        type: 'ul',
        items: [
          'Restricción de acceso a la información a personal autorizado.',
          'Acuerdos de confidencialidad con colaboradores y proveedores que tratan datos por cuenta de MTM.',
          'Copias de respaldo y protocolos de seguridad en los sistemas de información utilizados.',
          'Capacitación interna sobre buenas prácticas en el manejo de datos personales.',
        ],
      },
    ],
  },
  {
    id: 'vigencia-bases',
    number: '15',
    title: 'Vigencia de las bases de datos',
    blocks: [
      {
        type: 'p',
        text:
          'Las bases de datos de MTM se conservarán durante el tiempo en que exista una relación comercial, contractual o legal con el titular, y durante el término adicional que exijan las normas contables, tributarias, comerciales o la finalidad que dio origen al tratamiento. Cumplido dicho término, los datos serán suprimidos, salvo que exista un deber legal de conservarlos.',
      },
    ],
  },
  {
    id: 'modificaciones',
    number: '16',
    title: 'Modificaciones a la Política',
    blocks: [
      {
        type: 'p',
        text:
          'MTM podrá modificar esta Política en cualquier momento. Cualquier cambio sustancial será comunicado a los titulares a través del sitio web y/o los canales oficiales de atención, indicando la fecha de la última actualización.',
      },
    ],
  },
  {
    id: 'vigencia-documento',
    number: '17',
    title: 'Vigencia del documento',
    blocks: [
      {
        type: 'p',
        text:
          'La presente Política rige a partir de la fecha de su publicación y sustituye cualquier política de tratamiento de datos personales anterior adoptada por MTM.',
      },
    ],
  },
];
