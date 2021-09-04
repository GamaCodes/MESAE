import React from "react";
import classNames from "classnames";
import { SectionSplitProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import Image from "../elements/Image";

const propTypes = {
  ...SectionSplitProps.types,
};

const defaultProps = {
  ...SectionSplitProps.defaults,
};

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {
  const outerClasses = classNames(
    "features-split section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "features-split-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const splitClasses = classNames(
    "split-wrap",
    invertMobile && "invert-mobile",
    invertDesktop && "invert-desktop",
    alignTop && "align-top"
  );

  const sectionHeader = {
    title: "Servicios",
    title2: "Soluciones de Inversión y Financiamiento",
    contain:
      "Contamos con una amplia variedad de servicios para cubir cualquier tipo de necesidad que tengas, nuestra misión es tu satisfacción",
    img: "https://images.pexels.com/photos/2312369/pexels-photo-2312369.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    paragraph:
      "Invertimos en personas con capacidad de mejorar el mundo a través de grandes proyectos. Contamos con la experiencia y el conocimiento para llevar tus ideas a nuevos niveles.",
  };

  return (
    <section {...props} className={outerClasses}>
      <div className="container" id="servicios">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>
            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-right"
                data-reveal-container=".split-item"
              >
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Inversiones Financieras
                </div>
                <h3 className="mt-0 mb-12">
                  Inversión directa a través de nuestro fondo de capital
                </h3>
                <p className="m-0">
                  A raíz de ser un despacho productor de grandes proyectos,
                  nuestros accionistas crearon un fondo de inversión que opera
                  como empresa hermana de Asesores Toth e invierte directamente
                  capital en proyectos de negocio con capacidad de expansión que
                  llevan un buen control y alto nivel de institucionalización y
                  son ejemplares en la industria.
                </p>
              </div>
              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom",
                  imageFill && "split-item-image-fill"
                )}
                data-reveal-container=".split-item"
              >
                <Image
                  src="https://images.pexels.com/photos/187041/pexels-photo-187041.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  alt="Inversiones financieras"
                  width={528}
                  height={396}
                />
              </div>
            </div>

            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-left"
                data-reveal-container=".split-item"
              >
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Inversiones Financieras
                </div>
                <h3 className="mt-0 mb-12">
                  Fondeo de banca de desarrollo y bancos
                </h3>
                <p className="m-0">
                  Dentro de la gestión de crecimiento y estrategia en la cual
                  apoya nuestro despacho a sus clientes, se encuentra la
                  obtención de fondeo a través de fondeo bancario. Acompañamos a
                  nuestro cliente desde escoger el correcto fondeador y armado
                  de su expediente corporativo hasta obtener la recepción del
                  capital.
                </p>
              </div>
              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom",
                  imageFill && "split-item-image-fill"
                )}
                data-reveal-container=".split-item"
              >
                <Image
                  src="https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  alt="Bancos y analisis"
                  width={528}
                  height={396}
                />
              </div>
            </div>

            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-right"
                data-reveal-container=".split-item"
              >
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Inversiones Financieras
                </div>
                <h3 className="mt-0 mb-12">Bolsa Mexicana de Valores</h3>
                <p className="m-0">
                  Como consecuencia de un buen proceso de crecimiento e
                  institucionalización, el mercado de valores siempre es una
                  opción para resolver las necesidades de fondeo de nuestros
                  clientes, tanto por la vía de deuda como de capital. Manejo
                  Estratégico y Servicios de Asesores Especializados tiene
                  amplia experiencia con un importante número de casos de éxito
                  en el mercado de valores.
                </p>
              </div>
              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom",
                  imageFill && "split-item-image-fill"
                )}
                data-reveal-container=".split-item"
              >
                <Image
                  src="https://images.pexels.com/photos/534216/pexels-photo-534216.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  alt="Bolsa de valores"
                  width={528}
                  height={396}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;
