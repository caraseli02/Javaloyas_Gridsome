// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  mode: "production",

  siteName: "Los Javaloyas",
  siteDescription:
    "Los Javaloyas es uno de los conjuntos más populares y asociados a la música pop española. El grupo en activo mas veterano de España.",
  siteUrl: "javaloyas.com",
  chainWebpack: (config) => {
    config.resolve.alias.set("@img", "@/assets/img");
  },

  plugins: [
    {
      use: "klaro-gridsome",
      options: {
        privacyPolicy: "/legal/privacy",
        cookieName: "consent",
        lang: "es",
        translations: {
          es: {
            acceptAll: "Aceptar todas",
            acceptSelected: "Aceptar seleccionadas",
            close: "Cerrar",
            consentModal: {
              description:
                "Aquí puede evaluar y personalizar los servicios que nos gustaría utilizar en este sitio web. ¡Usted decide! Habilite o deshabilite los servicios como considere oportuno.",
              privacyPolicy: {
                name: "política de privacidad",
                text: "Para saber más, por favor lea nuestra {privacyPolicy}.",
              },
              title: "Servicios que nos gustaría utilizar",
            },
            consentNotice: {
              changeDescription:
                "Ha habido cambios en las cookies desde su última visita. Debe renovar su consentimiento.",
              description:
                "¡Hola! ¿Podríamos habilitar algunos servicios adicionales para correcto funcionamiento de la página web. Los servicios son Youtube, Spotify {purposes}? Solo es para mejorar la web. Siempre podrá cambiar o retirar su consentimiento más tarde.",
              imprint: {
                name: "Imprimir",
              },
              learnMore: "Quiero elegir",
              privacyPolicy: {
                name: "política de privacidad",
              },
              testing: "¡Modo de prueba!",
            },
            contextualConsent: {
              acceptAlways: "Siempre",
              acceptOnce: "Sí",
              description:
                "¿Quieres cargar el contenido externo suministrado por {title}?",
            },
            decline: "Descartar todas",
            ok: "De acuerdo",
            poweredBy: "¡Realizado con Klaro!",
            privacyPolicy: {
              name: "política de privacidad",
              text: "Para saber más, por favor lea nuestra {privacyPolicy}.",
            },
            purposeItem: {
              service: "servicio",
              services: "servicios",
            },
            default: {
              description:
                "Estas cookies son necesarias para que la Plataforma funcione y no se pueden desactivar en nuestros sistemas.",
            },
            googleAnalytics: {
              description:
                "Google Analytics nos permite ver cómo los visitantes utilizan nuestro sitio web.",
            },
            youtubeAnalytics: {
              description:
                "YouTube Analytics nos permite mostrar videos de youtube",
            },
            spotifyAnalytics: {
              description:
                "Spotify Analytics nos permite mostrar musica de Spotify",
            },
            purposes: {
              analytics: "Analitica",
              marketing: "Marketing",
              advertising: {
                description:
                  "Estos servicios procesan información personal para mostrarle anuncios personalizados o basados en intereses.",
                title: "Publicidad",
              },
              functional: {
                description:
                  "Estos servicios son esenciales para el correcto funcionamiento de este sitio web. No puede desactivarlos ya que la página no funcionaría correctamente.",
                title: "Prestación de servicios",
              },
              // marketing: {
              //   description:
              //     "Estos servicios procesan información personal para mostrarle contenido relevante sobre productos, servicios o temas que puedan interesarle.",
              //   title: "Marketing",
              // },
              performance: {
                description:
                  "Estos servicios procesan información personal para optimizar el servicio que ofrece este sitio.",
                title: "Optimización del rendimiento",
              },
            },
            save: "Guardar",
            service: {
              disableAll: {
                description:
                  "Utilice este interruptor para activar o desactivar todos los servicios.",
                title: "Activar o desactivar todos los servicios",
              },
              optOut: {
                description:
                  "Este servicio está habilitado por defecto (pero puede optar por lo contrario)",
                title: "(desactivar)",
              },
              purpose: "Finalidad",
              purposes: "Finalidades",
              required: {
                description: "Este servicio es necesario siempre",
                title: "(siempre requerido)",
              },
            },
          },
        },
        apps: [
          {
            name: "default",
            default: true,
            title: "Cookies estrictamente necesarias",
            purposes: ["analytics"],
            required: true,
            optOut: true,
            onlyOnce: false,
          },
          {
            name: "googleAnalytics",
            default: true,
            title: "Google Analytics",
            purposes: ["analytics"],
            cookies: ["_ga", "_gcl_au", "_gid", "_gat"],
            required: false,
            optOut: true,
            onlyOnce: false,
          },
          {
            name: "youtubeAnalytics",
            default: true,
            title: "Youtube",
            purposes: ["marketing"],
            required: false,
            optOut: true,
            onlyOnce: false,
          },
          {
            name: "spotifyAnalytics",
            default: true,
            title: "Spotify",
            purposes: ["marketing"],
            required: false,
            optOut: true,
            onlyOnce: false,
          },
        ],
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "Events",
        path: "./content/events/**/*.md",
      },
    },
    {
      use: "gridsome-plugin-modal",
    },
    {
      use: "gridsome-plugin-tailwindcss",
      options: {
        tailwindConfig: "./tailwind.config.js",
        presetEnvConfig: {},
        shouldImport: true,
        shouldTimeTravel: true,
      },
    },
    {
      use: "gridsome-plugin-seo",
    },
  ],

  transformers: {
    //Add markdown support to all file-system sources
    remark: {
      externalLinksTarget: "_blank",
      externalLinksRel: ["nofollow", "noopener", "noreferrer"],
      anchorClassName: "icon icon-link",
      plugins: ["@gridsome/remark-prismjs"],
    },
  },
};
