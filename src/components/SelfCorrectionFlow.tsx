import React from 'react';

const SelfCorrectionFlow = () => {
  return (
    <div
      className="edgeble-flow edgeble-flow--animated"
      aria-label="Two lanes on one time axis: inference corrected every frame; self-correction fixing the cause"
    >
      <div className="edgeble-flow__inner">
        <div className="edgeble-flow__head">
          <span>Two lanes · one time axis</span>
          <span>top: every frame, ms · bottom: when overrides repeat, s to min</span>
        </div>

        <div className="edgeble-flow__log" style={{ gridColumn: '1 / 9', animationDelay: '0.9s' }}>
          <div className="edgeble-flow__log-heading">
            <span>Lighting shift · part was fine</span>
            <b className="edgeble-flow__green">Corrected on the spot</b>
          </div>
          <div><span className="edgeble-flow__muted">[12:04:31.207]</span> claim terminal=<span className="edgeble-flow__red">NEGATIVE</span> conf 0.93</div>
          <div><span className="edgeble-flow__muted">[12:04:31.220]</span> judge <span className="edgeble-flow__green">OVERRIDE → POSITIVE</span> 13 ms</div>
          <div><span className="edgeble-flow__muted">[12:04:31.221]</span> decision <span className="edgeble-flow__green">GO</span></div>
        </div>

        <div className="edgeble-flow__log" style={{ gridColumn: '9 / 17', animationDelay: '2.4s' }}>
          <div className="edgeble-flow__log-heading">
            <span>Throttling · frames late</span>
            <b className="edgeble-flow__amber">Held at the seam</b>
          </div>
          <div><span className="edgeble-flow__muted">[14:02:10.118]</span> claim frame <span className="edgeble-flow__amber">31 ms late</span> conf 0.95</div>
          <div><span className="edgeble-flow__muted">[14:02:10.119]</span> judge <span className="edgeble-flow__amber">ABSTAIN → hold last verdict</span></div>
          <div><span className="edgeble-flow__muted">[14:02:10.120]</span> decision <span className="edgeble-flow__amber">HOLD</span></div>
        </div>

        <div className="edgeble-flow__log" style={{ gridColumn: '17 / 25', animationDelay: '3.9s' }}>
          <div className="edgeble-flow__log-heading">
            <span>Robot · wrist-camera glare</span>
            <b className="edgeble-flow__green">Corrected on the spot</b>
          </div>
          <div><span className="edgeble-flow__muted">[09:15:02.004]</span> claim grasp point conf 0.88</div>
          <div><span className="edgeble-flow__muted">[09:15:02.017]</span> judge <span className="edgeble-flow__green">OVERRIDE → no contact</span> 13 ms</div>
          <div><span className="edgeble-flow__muted">[09:15:02.018]</span> decision <span className="edgeble-flow__green">RE-GRASP</span></div>
        </div>

        <div className="edgeble-flow__lane-name">Inference · Stage 1 · every frame · milliseconds</div>
        <div className="edgeble-flow__segment" style={{ gridColumn: '1 / 4', animationDelay: '0.1s' }}>inference claim</div>
        <div className="edgeble-flow__segment edgeble-flow__segment--green" style={{ gridColumn: '4 / 7', animationDelay: '0.5s' }}>stage 1 override</div>
        <div className="edgeble-flow__segment" style={{ gridColumn: '7 / 9', animationDelay: '1.3s' }}>inference claim</div>
        <div className="edgeble-flow__segment" style={{ gridColumn: '9 / 12', animationDelay: '1.7s' }}>inference claim</div>
        <div className="edgeble-flow__segment edgeble-flow__segment--amber" style={{ gridColumn: '12 / 14', animationDelay: '2s' }}>stage 1 abstain · hold</div>
        <div className="edgeble-flow__segment" style={{ gridColumn: '14 / 17', animationDelay: '2.8s' }}>inference claim</div>
        <div className="edgeble-flow__segment" style={{ gridColumn: '17 / 19', animationDelay: '3.2s' }}>inference claim</div>
        <div className="edgeble-flow__segment edgeble-flow__segment--green" style={{ gridColumn: '19 / 22', animationDelay: '3.5s' }}>stage 1 override</div>
        <div className="edgeble-flow__segment" style={{ gridColumn: '22 / 25', animationDelay: '4.4s' }}>inference claim · confirmed</div>

        <div className="edgeble-flow__log" style={{ gridColumn: '1 / 9', animationDelay: '1.6s' }}>
          <div className="edgeble-flow__log-heading">
            <span>Model drift · overrides repeat</span>
            <b className="edgeble-flow__green">Fixed for good</b>
          </div>
          <div><span className="edgeble-flow__muted">[t+00:00]</span> stage2 cause=<span className="edgeble-flow__purple">MODEL</span> 53 labels captured</div>
          <div><span className="edgeble-flow__muted">[t+00:12]</span> retrain head only · forgetting 3–9 %</div>
          <div><span className="edgeble-flow__muted">[t+00:40]</span> swap canary <span className="edgeble-flow__green">ACTIVE</span> · rollback &lt; 5 s</div>
        </div>

        <div className="edgeble-flow__log" style={{ gridColumn: '9 / 17', animationDelay: '2.9s' }}>
          <div className="edgeble-flow__log-heading">
            <span>Chip · deadline misses</span>
            <b className="edgeble-flow__green">Fixed at the layer</b>
          </div>
          <div><span className="edgeble-flow__muted">[t+00:00]</span> stage2 cause=<span className="edgeble-flow__blue">CHIP</span> deadline misses</div>
          <div><span className="edgeble-flow__muted">[t+00:01]</span> fix frame budget re-fit · model untouched</div>
          <div><span className="edgeble-flow__muted">[t+00:01]</span> verdicts <span className="edgeble-flow__green">resume</span> · nothing stopped</div>
        </div>

        <div className="edgeble-flow__log" style={{ gridColumn: '17 / 25', animationDelay: '4.3s' }}>
          <div className="edgeble-flow__log-heading">
            <span>Physical · exposure drifted</span>
            <b className="edgeble-flow__green">Fixed at the layer</b>
          </div>
          <div><span className="edgeble-flow__muted">[t+00:00]</span> stage2 cause=<span className="edgeble-flow__amber">PHYSICAL</span> glare</div>
          <div><span className="edgeble-flow__muted">[t+00:01]</span> fix camera re-set via ISP · 0.7 s</div>
          <div><span className="edgeble-flow__muted">[t+00:01]</span> grasps <span className="edgeble-flow__green">resume · held</span> · no retrain</div>
        </div>

        <div className="edgeble-flow__lane-name">Self-correction · Stage 2 · when overrides repeat · seconds to minutes</div>
        <div className="edgeble-flow__segment edgeble-flow__segment--gap" style={{ gridColumn: '1 / 4' }} />
        <div className="edgeble-flow__segment edgeble-flow__segment--blue" style={{ gridColumn: '4 / 7', animationDelay: '1.2s' }}>stage 2 diagnosis</div>
        <div className="edgeble-flow__segment edgeble-flow__segment--purple" style={{ gridColumn: '7 / 10', animationDelay: '1.4s' }}>stage 2 retrain · on device</div>
        <div className="edgeble-flow__segment edgeble-flow__segment--green" style={{ gridColumn: '10 / 12', animationDelay: '1.6s' }}>stage 2 swap</div>
        <div className="edgeble-flow__segment edgeble-flow__segment--blue" style={{ gridColumn: '12 / 14', animationDelay: '2.6s' }}>stage 2 diagnosis</div>
        <div className="edgeble-flow__segment edgeble-flow__segment--purple" style={{ gridColumn: '14 / 16', animationDelay: '2.8s' }}>stage 2 fix · frame budget</div>
        <div className="edgeble-flow__segment edgeble-flow__segment--green" style={{ gridColumn: '16 / 17', animationDelay: '3s' }}>resume</div>
        <div className="edgeble-flow__segment edgeble-flow__segment--gap" style={{ gridColumn: '17 / 19' }} />
        <div className="edgeble-flow__segment edgeble-flow__segment--blue" style={{ gridColumn: '19 / 21', animationDelay: '4s' }}>stage 2 diagnosis</div>
        <div className="edgeble-flow__segment edgeble-flow__segment--purple" style={{ gridColumn: '21 / 23', animationDelay: '4.2s' }}>stage 2 fix · camera</div>
        <div className="edgeble-flow__segment edgeble-flow__segment--green" style={{ gridColumn: '23 / 24', animationDelay: '4.4s' }}>resume</div>
        <div className="edgeble-flow__segment edgeble-flow__segment--gap" style={{ gridColumn: '24 / 25' }} />

        <div className="edgeble-flow__axis">
          <span>t = 0</span>
          <span>one model · one chip · one physical cause — three fixes, no stop</span>
          <span>t + 40 min</span>
        </div>
      </div>
      <p className="edgeble-flow__caption">
        Illustration of the two lanes. The lighting-shift and model-drift episodes are from a real run (October 2026); the chip and robot episodes show the same loop on those causes.
      </p>
    </div>
  );
};

export default SelfCorrectionFlow;
