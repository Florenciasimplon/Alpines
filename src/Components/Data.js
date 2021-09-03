const DATA = {
  cars: {
    //initialise la valeure par défaut
    //creer les états initiaux de la voiture
    1: {
      name: "A110 Pure",
      price: 54700,
      picture: "images/configurateur/modele/selection/pure.png",
      id: 1,

      jantes: {
        name: "standard",
        picture: "images/configurateur/jantes/selection/jante-standard.jpg",
        price: 0,
      },
      couleurs: {
        name: "blanc glacier",
        price: 0,
        picture: "images/configurateur/couleurs/selection/blanc.jpg",
      },
      scellerie: {
        name: "cuir noir et dynamica",
        picture:
          "images/configurateur/interieurs/selection/cuir-noir_dinamica.jpg",
        price: 0,
      },
      pictures: {
        1: "images/configurateur/modele/pure/modele_pure-couleur_blanche-jante_standard (1).jpg",
        2: "images/configurateur/modele/pure/modele_pure-couleur_blanche-jante_standard (2).jpg",
        3: "images/configurateur/modele/pure/modele_pure-couleur_blanche-jante_standard (3).jpg",
        4: "images/configurateur/modele/pure/modele_pure-couleur_blanche-jante_standard (4).jpg",
      },
      equipements: {
        media_et_naviguation: {
          3: {
            id: 3,
            name: "Système Audio standard",
            picture:
            "images/configurateur/equipements/categories/media et navigation/audio-standard.jpg",
            price: 0,
          },
        },
        confort: {
          5: {
            id: 5, 
            name: "Retroviseur intérieur électrochrome",
            picture:"images/configurateur/equipements/categories/confort/retro-int-electrochrome.jpg",
            price: 0,
          },
        },
        conduite : {
          6: {
            id: 6,
            name: "Régulateur / limiteur de vitesse",
            picture:
              "images/configurateur/equipements/categories/confort/regul-limit-vitesse.jpg",
            price: 0,
          },
        },
        securite: {
          11: {
            id: 11,
            name: "Assistance au freinage d'urgence",
            picture:
              "images/configurateur/equipements/categories/securite/aide-freinage-durgence.jpg",
            price: 0,
          },
          12: {
            id: 12,
            name: "Airbags frontaux conducteur et passager",
            picture:
              "images/configurateur/equipements/categories/securite/airbag.jpg",
            price: 0,
          },
        },
        perso_extérieure:{
          13: {
            id: 13,
            name: "Etriers de frein couleur Gris Anthracite",
            picture:'images/configurateur/equipements/categories/personnalisation exterieure/etrier-gris.jpg',
            price: 0,
          },
        },
        perso_intérieur:{

          15: {
              id: 15,
              name: "Harmonie carbone mat",
              picture:
                "images/configurateur/equipements/categories/personnalisation interieure/pack-carbone.jpg",
              price: 0,
            },
          }
        },
        accessoires: {

          Transport_et_protection: {},
          multimedia:{},
          Intérieur:{},
          Exterieur:{},
          Matériel_de_garage:{},
        },
    },
    //voiture 2 la legende
    2: {
      name: "A110 Legend",
      price: 58500,
      picture: "images/configurateur/modele/selection/legende.png",
      id: 2,
      couleurs: {
        name: "blanc glacier",
        price: 0,
        picture: "images/configurateur/couleurs/selection/blanc.jpg",
      },
      jantes: {
        name: "legend",
        picture: "images/configurateur/jantes/selection/jante-legende.jpg",
        price: 0,
      },
      scellerie: {
        name: "Sièges Confort en cuir noir",
        picture: "images/configurateur/interieurs/selection/cuir-noir.jpg",
        price: 0,
      },
      pictures: {
        1: "images/configurateur/modele/legende/modele_legende-couleur_blanche-jante_legende-1.jpg",
        2: "images/configurateur/modele/legende/modele_legende-couleur_blanche-jante_legende-2.jpg",
        3: "images/configurateur/modele/legende/modele_legende-couleur_blanche-jante_legende-3.jpg",
        4: "images/configurateur/modele/legende/modele_legende-couleur_blanche-jante_legende-4.jpg",
      },
      equipements: {
        design: {

        },
        media_et_naviguation: {
          3: {
            id: 3,
            name: "Système Audio standard",
            picture:
            "images/configurateur/equipements/categories/media et navigation/audio-standard.jpg",
            price: 0,
          },
        },
        confort: {
          5: {
            id: 5,
            name: "Retroviseur intérieur électrochrome",
            picture:
              "images/configurateur/equipements/categories/confort/retro-int-electrochrome.jpg",
            price: 0,
          },
        },
        conduite : {
          6: {
            id: 6,
            name: "Régulateur / limiteur de vitesse",
            picture:
              "images/configurateur/equipements/categories/confort/regul-limit-vitesse.jpg",
            price: 0,
          },
        },
        securite: {
          11: {
            id: 11,
            name: "Assistance au freinage d'urgence",
            picture:
              "images/configurateur/equipements/categories/securite/aide-freinage-durgence.jpg",
            price: 0,
          },
          12: {
            id: 12,
            name: "Airbags frontaux conducteur et passager",
            picture:
              "images/configurateur/equipements/categories/securite/airbag.jpg",
            price: 0,
          },
        },
        perso_extérieure:{
          13: {
            id: 13,
            name: "Etriers de frein couleur Gris Anthracite",
            picture:'images/configurateur/equipements/categories/personnalisation exterieure/etrier-gris.jpg',
            price: 0,
          },
        },
        perso_intérieur:{

          15: {
              id: 15,
              name: "Harmonie carbone mat",
              picture:
              "images/configurateur/equipements/categories/personnalisation interieure/pack-carbone.jpg",
              price: 0,
            },
          }
        },
      accessoires: {
        Transport_et_protection: {},
        multimedia:{},
        Intérieur:{},
        Exterieur:{},
        Matériel_de_garage:{},
      },
    },
  },
  //choix des améliorations voitures
  couleurs: {
    1: {
      name: "blanc glacier",
      price: 0,
      picture: "images/configurateur/couleurs/selection/blanc.jpg",
    },
    2: {
      name: "Teinte métallisée Noir Profond",
      picture: "images/configurateur/couleurs/selection/noir.jpg",
      price: 1800,
    },
    3: {
      name: "Teinte spéciale Bleu Alpine",
      picture: "images/configurateur/couleurs/selection/bleu.jpg",
      price: 840,
    },
  },
  scellerie: {
    1: {
      name: "cuir noir et dynamica",
      picture:
        "images/configurateur/interieurs/selection/cuir-noir_dinamica.jpg",
      price: 0,
      option: "A110 Pure",
    },
    2: {
      name: "Sièges Confort en cuir noir perforé",
      picture:
        "images/configurateur/interieurs/selection/cuir-noir_perfore.jpg",
      price: 800,
      option: "A110 Pure",
    },
    3: {
      name: "Sièges Confort en cuir noir",
      picture: "images/configurateur/interieurs/selection/cuir-noir.jpg",
      price: 0,
      option: "A110 Legend",
    },
    4: {
      name: "Sièges Confort en cuir brun",
      picture: "images/configurateur/interieurs/selection/cuir-brun.jpg",
      price: 800,
      option: "A110 Legend",
    },
  },
  jantes: {
    1: {
      name: "standard",
      picture: "images/configurateur/jantes/selection/jante-standard.jpg",
      price: 0,
      option: "A110 Pure",
    },
    2: {
      name: "serac",
      picture: "images/configurateur/jantes/selection/jante-serac.jpg",
      price: 1000,
      option: "A110 Pure",
    },
    3: {
      name: "legend",
      picture: "images/configurateur/jantes/selection/jante-legende.jpg",
      price: 0,
      option: "A110 Legend",
    },
  },
  equipements: {
    design: {
      1: {
        id: 1,
        name: "Pack héritage",
        picture:
          "images/configurateur/equipements/categories/design/pack-heritage.jpg",
        price: 180,
      },
      2: {
        id: 2,
        name: "Repose-pieds passager aluminium",
        picture:
          "images/configurateur/equipements/categories/design/repose-pied-alu.jpg",
        price: "96",
      },
    },
    media_et_naviguation: {
      1: {
        id: 3,
        name: "Système Audio standard",
        picture:
          "images/configurateur/equipements/categories/media et navigation/audio-standard.jpg",
        price: 0,
      },
      2: {
        id: 4,
        name: "Alpine Télémétrics",
        picture:
          "images/configurateur/equipements/categories/media et navigation/alpine-metrics.jpg",
        price: 204,
      },
      3: {
        id: 3,
        name: "Système Audio Focal",
        picture:
          "images/configurateur/equipements/categories/media et navigation/audio-focal.jpg",
        price: 600,
      },
      4: {
        id: 3,
        name: "Système Audio Focal Premium",
        picture:
          "images/configurateur/equipements/categories/media et navigation/audio-premium.jpg",
        price: 1200,
      },
    },
    confort: {
      1: {
        id: 5,
        name: "Retroviseur int électrochrome",
      
      picture:"images/configurateur/equipements/categories/confort/retro-int-electrochrome.jpg",
        price: 0,
      },
      2: {
        id: 6,
        name: "Régulateur & limiteur de vitesse",
        picture:
          "images/configurateur/equipements/categories/confort/regul-limit-vitesse.jpg",
        price: 0,
      },
      3: {
        id: 7,
        name: "Rétroviseurs ext. chauf.élec",
        picture:
          "images/configurateur/equipements/categories/confort/retro-ext-chaffant.jpg",
        price: 504,
      },
      4: {
        id: 8,
        name: "Alpine Pack de rangement",
        picture:
          "images/configurateur/equipements/categories/confort/pack-rangement.jpg",
        price: 504,
      },
    },
    conduite: {
      1: {
        id: 9,
        name: "Aide au stationnement AR",
        picture:
          "images/configurateur/equipements/categories/conduite/aide-stationnement-ar.jpg",
        price: 420,
      },
      2: {
        id: 9,
        name: "Aide au stationnement AV/AR",
        picture:
          "images/configurateur/equipements/categories/conduite/aide-stationnement-av-ar.jpg",
        price: 750,
      },
      3: {
        id: 9,
        name: "Aide au stationnement AV/AR camérarecul",
        picture:
          "images/configurateur/equipements/categories/conduite/camera-recul.jpg",
        price: 1200,
      },
      4: {
        id: 10,
        name: "Echappement Sport actif",
        picture:
          "images/configurateur/equipements/categories/conduite/echappement-sport.jpg",
        price: 1500,
      },
    },
    securite: {
      1: {
        id: 11,
        name: "Assistance au freinage d'urgence",
        picture:
          "images/configurateur/equipements/categories/securite/aide-freinage-durgence.jpg",
        price: 0,
      },
      2: {
        id: 12,
        name: "Airbags frontaux conducteur/passager",
        picture:
          "images/configurateur/equipements/categories/securite/airbag.jpg",
        price: 0,
      },
      3: {
        id: 11,
        name: "freinage Haute-Perf 320mm",
        picture:
          "images/configurateur/equipements/categories/securite/freinage-haute-perf.jpg",
        price: 1000,
      },
    },
    perso_extérieure: {
      1: {
        id: 13,
        name: "Etriers de frein Gris Anthracite",
        picture:
          "images/configurateur/equipements/categories/personnalisation exterieure/etrier-gris.jpg",
        price: 0,
      },
      2: {
        id: 13,
        name: " Etriers de frein Bleu Alpine",
        picture:
          "images/configurateur/equipements/categories/personnalisation exterieure/etrier-bleu.jpg",
        price: 384,
      },
      3: {
        id: 14,
        name: "Logo Alpine ailes avant",
        picture:
          "images/configurateur/equipements/categories/personnalisation exterieure/logo-alpine.jpg",
        price: 120,
      },
    },
    perso_intérieur: {
      1: {
        id: 15,
        name: "Harmonie carbone mat",
        picture:
          "images/configurateur/equipements/categories/personnalisation interieure/pack-carbone.jpg",
        price: 0,
      },
      2: {
        id: 16,
        name: "Pédalier en aluminium",
        picture:
          "images/configurateur/equipements/categories/personnalisation interieure/pedal-alu.jpg",
        price: 120,
      },
      3: {
        id: 17,
        name: "Logo volant Bleu Alpine",
        picture:
          "images/configurateur/equipements/categories/personnalisation interieure/logo-volant.jpg",
        price: 84,
      },
      4: {
        id: 18,
        name: "Sièges chauffants",
        picture:
          "images/configurateur/equipements/categories/personnalisation interieure/siege-chauffant.jpg",
        price: 400,
      },
    },
  },
  accessoires: {
    Transport_et_protection: { 
      1: {
        id:1,
        name: "Extincteur 1kg",
        picture:
          "images/configurateur/accessoires/transport et protection/extincteur.jpg",
        price: 22,
      },
      2: {
        id:2,
        name: "Chaine Premium Grip",
        picture:
          "images/configurateur/accessoires/transport et protection/chaaine-neige.jpg",
        price: 336,
      },
      3: {
        id:3,
        name: "Alpine Alarme",
        picture:
          "images/configurateur/accessoires/transport et protection/alarme.jpg",
        price: 543,
      },
      4: {
        id:4,
        name: "Protection Prise OBD",
        picture:
          "images/configurateur/accessoires/transport et protection/protection-obd.jpg",
        price: 99,
      },
      5: {
        id:5,
        name: "Kit de sécurité",
        picture:
          "images/configurateur/accessoires/transport et protection/kit-securite.jpg",
        price: 20,
      },
      6: {
        id:6,
        name: "Fixation extincteur",
        picture:
          "images/configurateur/accessoires/transport et protection/fixation-extincteur.jpg",
        price: 72,
      },
    },

    multimedia: {

      1: {
        id:7,
        name: "Support caméra sport",
        picture:
          "images/configurateur/accessoires/multimedia/support-camera.jpg",
        price: 89,
      },
      2: {
        id:8,
        name: "Support smartphone magnétique",
        picture:
          "images/configurateur/accessoires/multimedia/support-smartphone.jpg",
        price: 21,
      },
    },
    Intérieur: {

      1: {
        id:9,
        name: "Tapis de coffre",
        picture: "images/configurateur/accessoires/interieur/tapis-coffre.jpg",
        price: 59,
      },
      2: {
        id:10,
        name: "Filet de rangement - Horizontal",
        picture:
          "images/configurateur/accessoires/interieur/filet-rangement.jpg",
        price: 59,
      },
    },
   
    Matériel_de_garage: {

      1: {
        id:11,
        name: "Chargeur batterie",
        picture:
          "images/configurateur/accessoires/garage/chargeur-batterie.jpg",
        price: 240,
      },
      2: {
        id:12,
        name: "Kit Outils Alpine",
        picture: "images/configurateur/accessoires/garage/kit-outils.jpg",
        price: 398,
      },
    },
    Exterieur: {
    
      1: {
        id:13,
        name: "Cabochons Alpine - Métalisés",
        picture:
          "images/configurateur/accessoires/exterieur/antivol-jantes.jpg",
        price: 24,
      },
      2: {
        id:14,
        name: "Housse de protection Alpine",
        picture: "images/configurateur/accessoires/exterieur/housse.jpg",
        price: 216,
      },
      3: {
        id:15,
        name: "Antivols pour jante - Noirs",
        picture:
          "images/configurateur/accessoires/exterieur/cabochons-metal.jpg",
        price: 51,
      },
    },
  },

  pictures: {
    //pour la pure
    1: {
      name: "A110 Pure",
      color: "blanc glacier",
      jante: "standard",
      picturesList: {
        1: "images/configurateur/modele/pure/modele_pure-couleur_blanche-jante_standard (1).jpg",
        2: "images/configurateur/modele/pure/modele_pure-couleur_blanche-jante_standard (2).jpg",
        3: "images/configurateur/modele/pure/modele_pure-couleur_blanche-jante_standard (3).jpg",
        4: "images/configurateur/modele/pure/modele_pure-couleur_blanche-jante_standard (4).jpg",
      },
    },

    2: {
      name: "A110 Pure",
      color: "Teinte spéciale Bleu Alpine",
      jante: "standard",
      picturesList: {
        1: "images/configurateur/modele/pure/modele_pure-couleur_bleu-jante_standard (1).jpg",
        2: "images/configurateur/modele/pure/modele_pure-couleur_bleu-jante_standard (2).jpg",
        3: "images/configurateur/modele/pure/modele_pure-couleur_bleu-jante_standard (3).jpg",
        4: "images/configurateur/modele/pure/modele_pure-couleur_bleu-jante_standard (4).jpg",
      },
    },

    3: {
      name: "A110 Pure",
      color: "Teinte métallisée Noir Profond",
      jante: "standard",
      picturesList: {
        1: "images/configurateur/modele/pure/modele_pure-couleur_noire-jante_standard (1).jpg",
        2: "images/configurateur/modele/pure/modele_pure-couleur_noire-jante_standard (2).jpg",
        3: "images/configurateur/modele/pure/modele_pure-couleur_noire-jante_standard (3).jpg",
        4: "images/configurateur/modele/pure/modele_pure-couleur_noire-jante_standard (4).jpg",
      },
    },
    4: {
      name: "A110 Pure",
      color: "blanc glacier",
      jante: "serac",
      picturesList: {
        1: "images/configurateur/modele/pure/modele_pure-couleur_blanche-jante_serac (1).jpg",
        2: "images/configurateur/modele/pure/modele_pure-couleur_blanche-jante_serac (2).jpg",
        3: "images/configurateur/modele/pure/modele_pure-couleur_blanche-jante_serac (3).jpg",
        4: "images/configurateur/modele/pure/modele_pure-couleur_blanche-jante_serac (4).jpg",
      },
    },
    5: {
      name: "A110 Pure",
      color: "Teinte spéciale Bleu Alpine",
      jante: "serac",
      picturesList: {
        1: "images/configurateur/modele/pure/modele_pure-couleur_bleu-jante_serac (1).jpg",
        2: "images/configurateur/modele/pure/modele_pure-couleur_bleu-jante_serac (2).jpg",
        3: "images/configurateur/modele/pure/modele_pure-couleur_bleu-jante_serac (3).jpg",
        4: "images/configurateur/modele/pure/modele_pure-couleur_bleu-jante_serac (4).jpg",
      },
    },
    6: {
      name: "A110 Pure",
      color: "Teinte métallisée Noir Profond",
      jante: "serac",
      picturesList: {
        1: "images/configurateur/modele/pure/modele_pure-couleur_noire-jante_serac (1).jpg",
        2: "images/configurateur/modele/pure/modele_pure-couleur_noire-jante_serac (2).jpg",
        3: "images/configurateur/modele/pure/modele_pure-couleur_noire-jante_serac (3).jpg",
        4: "images/configurateur/modele/pure/modele_pure-couleur_noire-jante_serac (4).jpg",
      },
    },
    7: {
      name: "A110 Legend",
      color: "blanc glacier",
      jante: "legend",
      picturesList: {
        1: "images/configurateur/modele/legende/modele_legende-couleur_blanc-jante_legende-1.jpg",
        2: "images/configurateur/modele/legende/modele_legende-couleur_blanc-jante_legende-2.jpg",
        3: "images/configurateur/modele/legende/modele_legende-couleur_blanc-jante_legende-3.jpg",
        4: "images/configurateur/modele/legende/modele_legende-couleur_blanc-jante_legende-4.jpg",
      },
    },
    8: {
      name: "A110 Legend",
      color: "Teinte spéciale Bleu Alpine",
      jante: "legend",
      picturesList: {
        1: "images/configurateur/modele/legende/modele_legende-couleur_bleu-jante_legende-1.jpg",
        2: "images/configurateur/modele/legende/modele_legende-couleur_bleu-jante_legende-2.jpg",
        3: "images/configurateur/modele/legende/modele_legende-couleur_bleu-jante_legende-3.jpg",
        4: "images/configurateur/modele/legende/modele_legende-couleur_bleu-jante_legende-4.jpg",
      },
    },

    9: {
      name: "A110 Legend",
      color: "Teinte métallisée Noir Profond",
      jante: "legend",
      picturesList: {
        1: "images/configurateur/modele/legende/modele_legende-couleur_noir-jante_legende-1.jpg",
        2: "images/configurateur/modele/legende/modele_legende-couleur_noir-jante_legende-2.jpg",
        3: "images/configurateur/modele/legende/modele_legende-couleur_noir-jante_legende-3.jpg",
        4: "images/configurateur/modele/legende/modele_legende-couleur_noir-jante_legende-4.jpg",
      },
    },
  },
};
export default DATA;
