import React from "react";

import {
  Child,
  Convocation,
  Family,
  Handicap,
  Health,
  Mission,
  Shop,
  Sport,
  Work,
} from "./Icons";

export default function Reason({ onClick, stateValid }) {
  return (
    <div className="w-full mb-8">
      <button disabled={!stateValid} id="sport_animaux" onClick={onClick}>
        <Sport className="icon" />
        Je me déplace à 1 km de chez moi
      </button>
      <button disabled={!stateValid} id="travail" onClick={onClick}>
        <Work className="icon" />
        Je vais travailler
      </button>
      <button disabled={!stateValid} id="achats" onClick={onClick}>
        <Shop className="icon" />
        Je vais faire des achats de première nécessité
      </button>
      <button disabled={!stateValid} id="enfants" onClick={onClick}>
        <Child className="icon" />
        Je vais chercher les enfants à l'école
      </button>
      <button disabled={!stateValid} id="sante" onClick={onClick}>
        <Health className="icon" />
        Je me soigne ou vais à la pharmacie
      </button>
      <button disabled={!stateValid} id="famille" onClick={onClick}>
        <Family className="icon" />
        Je m'occupe de mes proches
      </button>
      <button disabled={!stateValid} id="handicap" onClick={onClick}>
        <Handicap className="icon" />
        J'aide quelqu'un en situation de handicap
      </button>
      <button disabled={!stateValid} id="convocation" onClick={onClick}>
        <Convocation className="icon" />
        J'ai une convocation administrative
      </button>
      <button disabled={!stateValid} id="missions" onClick={onClick}>
        <Mission className="icon" />
        J'ai une mission d'intérêt général
      </button>
    </div>
  );
}
