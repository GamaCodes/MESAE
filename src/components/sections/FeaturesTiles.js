import React from "react";
import classNames from "classnames";
import { SectionTilesProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import Image from "../elements/Image";

const propTypes = {
  ...SectionTilesProps.types,
};

const defaultProps = {
  ...SectionTilesProps.defaults,
};
const FeaturesTiles = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {
  const outerClasses = classNames(
    "features-tiles section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "features-tiles-inner section-inner pt-0",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const tilesClasses = classNames(
    "tiles-wrap center-content",
    pushLeft && "push-left"
  );

  const text = [
    <>
      <p>
        Somos Uno de los primeros en tener un enfoque basado en la unión de una
        consultoría especializada en Gobierno Corporativo.
      </p>
      <p>
        Siempre buscando los modelos de negocios con mayor escalabilidad y alta
        innovación.
      </p>
      <p>
        A través de la experiencia y conocimientos que ofrecemos tanto en el
        equipo de{" "}
        <span className="text-color-primary">
          Manejo Estratégico y Servicios De Asesores Especializados
        </span>
        , se buscará y aportará el máximo valor agregado que podemos para llevar
        nuestras inversiones a otro nivel.
      </p>
    </>,
  ];

  const sectionHeader = {
    title: "Nosotros",
    paragraph: text,
    img: "https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  };

  return (
    <section {...props} className={outerClasses} id="nosotros">
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>
            <div
              className="tiles-item reveal-from-bottom"
              data-reveal-delay="200"
            >
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src="/feature-tile-icon-04.svg"
                      alt="Asesores especialziados"
                      width={64}
                      height={64}
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">Asesores Especializados</h4>
                  <p className="m-0 text-sm text-just">
                    <span className="text-color-primary">N</span>uestros
                    asesores cuentan con años de experiencia en los asesoria
                    coorporativa. Bucamos la satisfacción total de nuestros
                    clientes, por lo que nos esforzamos al máximo logrando
                    desarrollar relaciones de largo plazo con ellos.
                  </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src="/feature-tile-icon-01.svg"
                      alt="Politica de calidad"
                      width={64}
                      height={64}
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">Política de calidad</h4>
                  <p className="m-0 text-sm text-just">
                    <span className="text-color-primary">N</span>os
                    comprometemos con cada cliente a proporcionar un valor
                    agregado por medio de soluciones integrales para su negocio,
                    garantizando su satisfacción a través de un servicio de las
                    alta calidad, nuestros asesores especializadis y la
                    constante mejora de nuestros servicios.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="tiles-item reveal-from-bottom"
              data-reveal-delay="400"
            >
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src="/feature-tile-icon-06.svg"
                      alt="Valores"
                      width={64}
                      height={64}
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">Valores</h4>
                  <p className="m-0 text-sm text-just">
                    <span className="text-color-primary">N</span>uestros valores
                    son el pilar de lo que somos hoy en dia, estos mismos son
                    los que cada asesor debe cumplir:
                    <ul>
                      <li>Integridad</li>
                      <li>Responsabilidad</li>
                      <li>Confidencialidad</li>
                      <li>Integridad</li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;
