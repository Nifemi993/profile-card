export default function App() {
  return (
    <div className="profile-card">
      <div className="profile-image">
        <img src="/profile-image.jpg" alt="profile picture" />
        <div className="social-icons">
          {/* instagram */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <g fill="none">
              <path
                stroke="#fff"
                stroke-width="2"
                d="M3 11c0-3.771 0-5.657 1.172-6.828S7.229 3 11 3h2c3.771 0 5.657 0 6.828 1.172S21 7.229 21 11v2c0 3.771 0 5.657-1.172 6.828S16.771 21 13 21h-2c-3.771 0-5.657 0-6.828-1.172S3 16.771 3 13z"
              />
              <circle cx="16.5" cy="7.5" r="1.5" fill="#fff" />
              <circle cx="12" cy="12" r="3" stroke="#fff" stroke-width="2" />
            </g>
          </svg>
          {/* twitter */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              fill="#fff"
              d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.2 4.2 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.52 8.52 0 0 1-5.33 1.84q-.51 0-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23"
            />
          </svg>
          {/* facebook */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="0.49em"
            height="1em"
            viewBox="0 0 486.037 1000"
          >
            <path d="M0 0h486.037v1000H0z" fill="none" />
            <path
              fill="#fff"
              d="M124.074 1000V530.771H0V361.826h124.074V217.525C124.074 104.132 197.365 0 366.243 0C434.619 0 485.18 6.555 485.18 6.555l-3.984 157.766s-51.564-.502-107.833-.502c-60.9 0-70.657 28.065-70.657 74.646v123.361h183.331l-7.977 168.945H302.706V1000z"
            />
          </svg>
        </div>
      </div>
      <div className="profile-details">
        <div className="avatar">
          <img src="/profile-image.jpg" alt="profile avatar" />
        </div>
        <button>Follow</button>
        <div className="profile-header">
          <div className="profile-title">
            <h3>Celsior</h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path
                fill="#0e84f3"
                d="m21.56 10.739l-1.36-1.58c-.26-.3-.47-.86-.47-1.26v-1.7c0-1.06-.87-1.93-1.93-1.93h-1.7c-.39 0-.96-.21-1.26-.47l-1.58-1.36c-.69-.59-1.82-.59-2.52 0l-1.57 1.37c-.3.25-.87.46-1.26.46H6.18c-1.06 0-1.93.87-1.93 1.93v1.71c0 .39-.21.95-.46 1.25l-1.35 1.59c-.58.69-.58 1.81 0 2.5l1.35 1.59c.25.3.46.86.46 1.25v1.71c0 1.06.87 1.93 1.93 1.93h1.73c.39 0 .96.21 1.26.47l1.58 1.36c.69.59 1.82.59 2.52 0l1.58-1.36c.3-.26.86-.47 1.26-.47h1.7c1.06 0 1.93-.87 1.93-1.93v-1.7c0-.39.21-.96.47-1.26l1.36-1.58c.58-.69.58-1.83-.01-2.52m-5.4-.63l-4.83 4.83a.75.75 0 0 1-1.06 0l-2.42-2.42a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l1.89 1.89l4.3-4.3c.29-.29.77-.29 1.06 0s.29.77 0 1.06"
              />
            </svg>
          </div>
          <span>@celsiorluxe</span>
        </div>
        <p>
          Celsior Luxe is a streetwear brand where fashion levels up like an
          overpowered anime portagonist and the blockchain is just another place
          ground for the digital warriors
        </p>

        <div className="stats">
          <p>
            500 <span>Following</span>
          </p>
          <p>
            22.2K <span>Followers</span>
          </p>
        </div>
      </div>
    </div>
  );
}
