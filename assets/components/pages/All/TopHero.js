/**
 *
 *  This is the Top Hero
 *
 */

export const TopHero = (props) => {
  const OBJECT = props.object;

  const STYLES = OBJECT.styles;
  const BG = OBJECT.bg;
  const HEADING = OBJECT.heading;
  const TEXT = OBJECT.text;

  return (
    <section id="topHero" className={`${STYLES.top_hero}`}>
      <div className={`${STYLES.bg}`} style={{ background: `url(${BG})` }} />

      <div className={`${STYLES.overlay}`}>
        <div className={`${STYLES.overlay_cnt}`}>
          <h2 className="orientation-change-element half-second">{HEADING}</h2>
          <p className="orientation-change-element half-second">{TEXT}</p>
        </div>
      </div>
    </section>
  );
};
