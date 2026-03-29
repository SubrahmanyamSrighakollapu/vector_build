import Image from "next/image";

export default function WhoWeAre() {
  return (
    <>
      <style>{`
        .whoweare {
          padding: 96px 48px;
          background: #ffffff;
        }
        .whoweare-inner {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }
        .whoweare-label {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 16px;
        }
        .whoweare-label-line {
          width: 36px;
          height: 3px;
          background: #ab8cf5;
          border-radius: 2px;
        }
        .whoweare-label-text {
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #281750;
        }
        .whoweare-heading {
          font-size: clamp(1.5rem, 2.5vw, 2rem);
          font-weight: 800;
          color: #281750;
          margin-bottom: 20px;
          line-height: 1.2;
        }
        .whoweare-text {
          font-size: 0.95rem;
          color: #525252;
          line-height: 1.8;
          margin-bottom: 16px;
        }
        .whoweare-stats {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          margin-top: 36px;
        }
        .stat-card {
          background: #281750;
          border-radius: 12px;
          padding: 24px 20px;
          text-align: center;
        }
        .stat-card-num {
          font-size: 2rem;
          font-weight: 800;
          color: #ffffff;
          line-height: 1;
          margin-bottom: 6px;
        }
        .stat-card-num span { color: #ab8cf5; }
        .stat-card-label {
          font-size: 0.82rem;
          color: #d8cafa;
          font-weight: 500;
        }
        .whoweare-image-wrap {
          position: relative;
          border-radius: 16px;
          overflow: hidden;
          aspect-ratio: 4/3;
          box-shadow: 0 24px 64px rgba(40,23,80,0.15);
        }
        .whoweare-image-wrap::before {
          content: '';
          position: absolute;
          inset: -2px;
          border-radius: 18px;
          background: linear-gradient(135deg, #ab8cf5 0%, #281750 100%);
          z-index: -1;
        }
        .whoweare-image-badge {
          position: absolute;
          bottom: 24px;
          left: 24px;
          background: rgba(40,23,80,0.9);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(171,140,245,0.3);
          border-radius: 10px;
          padding: 12px 18px;
          color: #ffffff;
          font-size: 0.82rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .badge-dot {
          width: 8px;
          height: 8px;
          background: #ab8cf5;
          border-radius: 50%;
        }
        @media (max-width: 900px) {
          .whoweare { padding: 64px 20px; }
          .whoweare-inner { grid-template-columns: 1fr; gap: 48px; }
          .whoweare-image-wrap { aspect-ratio: 16/9; }
        }
      `}</style>
      <section className="whoweare">
        <div className="whoweare-inner">
          <div>
            <div className="whoweare-label">
              <div className="whoweare-label-line" />
              <span className="whoweare-label-text">Who We Are</span>
            </div>
            <h2 className="whoweare-heading">The Vector Standard</h2>
            <p className="whoweare-text">
              At Vector Build, we don&apos;t just construct buildings; we engineer legacy. With over two
              decades of experience in heavy industrial sectors, our team brings a militant attention
              to detail to every beam laid and every foundation poured.
            </p>
            <p className="whoweare-text">
              Our philosophy is rooted in &ldquo;Safety Orange&rdquo; principles — high visibility, high alert,
              and high performance. We leverage cutting-edge prefabrication technologies to reduce
              on-site risks and accelerate project timelines without compromising structural integrity.
            </p>
            <div className="whoweare-stats">
              <div className="stat-card">
                <div className="stat-card-num">350<span>+</span></div>
                <div className="stat-card-label">Projects Completed</div>
              </div>
              <div className="stat-card">
                <div className="stat-card-num">100<span>%</span></div>
                <div className="stat-card-label">Safety Record</div>
              </div>
            </div>
          </div>
          <div className="whoweare-image-wrap">
            <Image
              src="/about-image.png"
              alt="Vector Build engineering team"
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 900px) 100vw, 50vw"
              priority
            />
            <div className="whoweare-image-badge">
              <span className="badge-dot" />
              20+ Years of Engineering Excellence
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
