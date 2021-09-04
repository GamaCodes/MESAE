import React from "react";
import classNames from "classnames";
import { SectionTilesProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";

const propTypes = {
  ...SectionTilesProps.types,
};

const defaultProps = {
  ...SectionTilesProps.defaults,
};

const Testimonial = ({
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
    "testimonial section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "testimonial-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const tilesClasses = classNames("tiles-wrap", pushLeft && "push-left");

  const sectionHeader = {
    title2: "Operación del Consejo de Administración y Comités",
    paragraph:
      "Facilitamos la operación permanente del Consejo y Comités a través de implantar una dinámica de alta eficiencia y valor agregado. Apoyamos con consejeros independientes, secretario, programa de trabajo herramientas y metodologías.",
  };

  const sectionHeader2 = {
    title: "Más servicios",
  };

  return (
    <>
      <section {...props} className={outerClasses}>
        <div className="container">
          <div className={innerClasses}>
            <SectionHeader data={sectionHeader} className="center-content" />
            <div className={tilesClasses}>
              <div
                className="tiles-item reveal-from-right"
                data-reveal-delay="200"
              >
                <div className="tiles-item-inner">
                  <div className="testimonial-item-content">
                    <span className="testimonial-item-name text-color-high">
                      Coaching
                    </span>
                    <br />
                    <span className="text-color-primary">Operaciones</span>
                  </div>
                  <div className="testimonial-item-footer text-xs mt-16 mb-0 has-top-divider">
                    <p className="text-sm mb-0 text-just">
                      Asesoría especializada a Presidentes de Consejo,
                      Directores Generales o Consejeros de empresa para
                      implantar y operar modelos de Gobierno Corporativo de alto
                      valor agregado. Sistemas de control interno
                    </p>
                  </div>
                </div>
              </div>

              <div className="tiles-item reveal-from-bottom">
                <div className="tiles-item-inner">
                  <div className="testimonial-item-content">
                    <span className="testimonial-item-name text-color-high">
                      Institucionalización
                    </span>
                    <br />
                    <span className="text-color-primary">Operaciones</span>
                  </div>
                  <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                    <p className="text-sm mb-0 text-just">
                      Documentación de los procesos de negocio para facilitar la
                      alta calidad de servicio y el crecimiento empresarial,
                      vamos contigo en todo el proceso
                    </p>
                    <br />
                    <p className="text-sm mb-0 text-just">
                      ¡Lograr la excelencia implica el dominio y control de las
                      tareas!.
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="tiles-item reveal-from-left"
                data-reveal-delay="200"
              >
                <div className="tiles-item-inner">
                  <div className="testimonial-item-content">
                    <span className="testimonial-item-name text-color-high">
                      Administración de riesgos
                    </span>
                    <br />
                    <span className="text-color-primary">Operaciones</span>
                  </div>
                  <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                    <p className="text-sm mb-0 text-just">
                      Facilitamos la identificación y mitigación de todos los
                      riesgos corporativos, elevando de manera importante el
                      nivel de certidumbre sobre un futuro exitoso en las
                      empresas. ¡Los riesgos que no se anticipan pueden destruir
                      tu patrimonio!.
                    </p>
                  </div>
                </div>
              </div>

              <div className="tiles-item reveal-from-bottom">
                <div className="tiles-item-inner">
                  <div className="testimonial-item-content">
                    <span className="testimonial-item-name text-color-high">
                      Auditoria interna
                    </span>
                    <br />
                    <span className="text-color-primary">Operaciones</span>
                  </div>
                  <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                    <p className="text-sm mb-0 text-just">
                      Análisis detallado de procesos que permite identificar
                      mejoras constantes que se traducen en mayor eficacia,
                      rapidez y productividad. ¡Entender y solucionar a tiempo
                      la causa raíz de los problemas, deriva en alta efectividad
                      y un desempeño exitoso!.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Fin */}
      <section {...props} className={outerClasses}>
        <div className="container">
          <div className={innerClasses}>
            <SectionHeader data={sectionHeader2} className="center-content" />
            <div className={tilesClasses}>
              <div
                className="tiles-item reveal-from-right"
                data-reveal-delay="200"
              >
                <div className="tiles2-item-inner">
                  <div className="testimonial-item-content">
                    <span className="testimonial-item-name text-color-high">
                      Capital Humano
                    </span>
                  </div>
                  <div className="testimonial-item-footer text-xs mt-16 mb-0 has-top-divider">
                    <p className="text-sm mb-0 text-just">
                      Programas de Capital Humano que generan valor a través de
                      su personal, potenciando sus fortalezas y alineándolos con
                      la estrategia y cultura empresarial.
                    </p>
                  </div>
                </div>
              </div>

              <div className="tiles-item reveal-from-bottom">
                <div className="tiles2-item-inner">
                  <div className="testimonial-item-content">
                    <span className="testimonial-item-name text-color-high">
                      Capacitación Especializada
                    </span>
                  </div>
                  <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                    <p className="text-sm mb-0 text-just">
                      Impulsa el desarrollo organizacional de forma efectiva y
                      está asociada a los continuos avances científicos y
                      tecnológicos.
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="tiles-item reveal-from-left"
                data-reveal-delay="200"
              >
                <div className="tiles2-item-inner">
                  <div className="testimonial-item-content">
                    <span className="testimonial-item-name text-color-high">
                      Sistema de Control Interno
                    </span>
                  </div>
                  <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                    <p className="text-sm mb-0 text-just">
                      Revisión de los temas fundamentales de Sistemas de Control
                      Interno tambien revisamos sobre elementos y sistema de
                      control interno.
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="tiles-item reveal-from-right"
                data-reveal-delay="200"
              >
                <div className="tiles2-item-inner">
                  <div className="testimonial-item-content">
                    <span className="testimonial-item-name text-color-high">
                      Actualización
                    </span>
                  </div>
                  <div className="testimonial-item-footer text-xs mt-16 mb-0 has-top-divider">
                    <p className="text-sm mb-0 text-just">
                      Desarrollo de programas de actualización para consejeros
                      en temas de Gobierno Corporativo.
                    </p>
                  </div>
                </div>
              </div>

              <div className="tiles-item reveal-from-bottom">
                <div className="tiles2-item-inner">
                  <div className="testimonial-item-content">
                    <span className="testimonial-item-name text-color-high">
                      Alta Efectividad
                    </span>
                  </div>
                  <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                    <p className="text-sm mb-0 text-just">
                      Revisión de prácticas y procesos de autoevaluación del
                      consejo de administración y antecedentes.
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="tiles-item reveal-from-left"
                data-reveal-delay="200"
              >
                <div className="tiles2-item-inner">
                  <div className="testimonial-item-content">
                    <span className="testimonial-item-name text-color-high">
                      Certificaciónes
                    </span>
                  </div>
                  <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                    <p className="text-sm mb-0 text-just">
                      Capacitar y desarrollar a la gerencia media en su gestión
                      con base en una metodología consistente en talleres cortos
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;
