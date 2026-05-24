import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
export default function Features() {
  return (
    

    <div className="page">

      <h1>Features</h1>

      <div className="features-grid">

        <div className="feature-card">
          <h3>⚡ Real-time Sync</h3>

          <p>
            Watch videos together with
            perfectly synced playback.
          </p>
        </div>

        <div className="feature-card">
          <h3>💬 Live Chat</h3>

          <p>
            Chat with friends while
            watching videos.
          </p>
        </div>

        <div className="feature-card">
          <h3>🔗 Easy Sharing</h3>

          <p>
            Share room links instantly
            with anyone.
          </p>
        </div>

        <div className="feature-card">
          <h3>📱 Mobile Friendly</h3>

          <p>
            Works smoothly on desktop
            and mobile devices.
          </p>
        </div>

      </div>

    </div>
  );
}