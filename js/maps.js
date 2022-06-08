const style = [
  {
    elementType: "geometry",
    stylers: [
      {
        color: "#f5f5f5",
      },
    ],
  },
  {
    featureType: "poi",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "road",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#616161",
      },
    ],
  },
  {
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#f5f5f5",
      },
    ],
  },
  {
    featureType: "administrative.country",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#224d00",
      },
      {
        visibility: "on",
      },
      {
        weight: 0.5,
      },
    ],
  },
  {
    featureType: "administrative.country",
    elementType: "labels",
    stylers: [
      {
        color: "#224d00",
      },
      {
        visibility: "on",
      },
    ],
  },
  {
    featureType: "administrative.country",
    elementType: "labels.text.stroke",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "administrative.land_parcel",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#bdbdbd",
      },
      {
        weight: 4,
      },
    ],
  },
  {
    featureType: "administrative.land_parcel",
    elementType: "labels",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "administrative.land_parcel",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#bdbdbd",
      },
    ],
  },
  {
    featureType: "administrative.locality",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#016bad",
      },
      {
        visibility: "on",
      },
      {
        weight: 4,
      },
    ],
  },
  {
    featureType: "administrative.locality",
    elementType: "labels.text",
    stylers: [
      {
        color: "#2e4d00",
      },
    ],
  },
  {
    featureType: "administrative.locality",
    elementType: "labels.text.stroke",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "administrative.neighborhood",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#016bad",
      },
      {
        visibility: "on",
      },
      {
        weight: 4,
      },
    ],
  },
  {
    featureType: "administrative.neighborhood",
    elementType: "labels.text",
    stylers: [
      {
        color: "#2e4d00",
      },
    ],
  },
  {
    featureType: "administrative.neighborhood",
    elementType: "labels.text.stroke",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "administrative.province",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#016bad",
      },
      {
        visibility: "on",
      },
    ],
  },
  {
    featureType: "administrative.province",
    elementType: "labels.text",
    stylers: [
      {
        color: "#224d00",
      },
    ],
  },
  {
    featureType: "administrative.province",
    elementType: "labels.text.stroke",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "landscape.man_made",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#f2f7ee",
      },
      {
        visibility: "on",
      },
    ],
  },
  {
    featureType: "landscape.natural",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#eaffdb",
      },
      {
        visibility: "on",
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "geometry",
    stylers: [
      {
        color: "#eeeeee",
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "labels.text",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#757575",
      },
    ],
  },
  {
    featureType: "road",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [
      {
        color: "#ffffff",
      },
    ],
  },
  {
    featureType: "transit",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [
      {
        color: "#c9c9c9",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#003d66",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#9e9e9e",
      },
    ],
  },
];

const baseMap = {
  zoom: 13,
  styles: style,
  disableDefaultUI: true,
  mapTypeControl: false,
  scaleControl: true,
};

const ojoduMap = {
  center: { lat: 6.632624056786935, lng: 3.3574497499999723 },
  ...baseMap,
};

const ikejaMap = {
  center: { lat: 6.603884048969752, lng: 3.350261441775393 },
  ...baseMap,
};

const ikoyiMap = {
  center: { lat: 6.453674282888409, lng: 3.4340269000000223 },
  ...baseMap,
};

const surulereMap = {
  center: { lat: 6.489568445703163, lng: 3.349408849999973 },
  ...baseMap,
};

const anthonyMap = {
  center: { lat: 6.564104110934636, lng: 3.3757987340626983 },
  ...baseMap,
};

const viMap = {
  center: { lat: 6.429984539390047, lng: 3.4228874842440504 },
  ...baseMap,
};

const lekkiMap = {
  center: { lat: 6.511598737211582, lng: 3.7748941499999855 },
  ...baseMap,
};
