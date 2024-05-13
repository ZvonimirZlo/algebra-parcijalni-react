import React from "react";

function Preview({
  avatarUrl,
  name,
  login,
  public_repos,
  followers,
  following,
  blog,
  email,
  isLoading,
  bio,
  joinedAt
}) {
  return (
    <div>
      {!isLoading ? <div>
        <div>
          <div>
            <img src={avatarUrl} alt="image" />
          </div>
          <div>
            <h1>{name}</h1>
            <h3>{login}</h3>
            <p>Joined at: {joinedAt}</p>
          </div>
        </div>
        <div>
          <p>
            {bio}
          </p>
        </div>
        <div>
          <div>
            <h3>Repos:</h3>
            <span>{public_repos}</span>
          </div>
          <div>
            <h3>Followers:</h3>
            <span>{followers}</span>
          </div>
          <div>
            <h3>Following:</h3>
            <span>{following}</span>
          </div>
        </div>
        <div>
          <div>
            <div>
              <span>
                <svg
                  viewBox="0 0 1024 1024"
                  fill="currentColor"
                  height="1em"
                  width="1em"
                >
                  <path d="M574 665.4a8.03 8.03 0 00-11.3 0L446.5 781.6c-53.8 53.8-144.6 59.5-204 0-59.5-59.5-53.8-150.2 0-204l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3l-39.8-39.8a8.03 8.03 0 00-11.3 0L191.4 526.5c-84.6 84.6-84.6 221.5 0 306s221.5 84.6 306 0l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3L574 665.4zm258.6-474c-84.6-84.6-221.5-84.6-306 0L410.3 307.6a8.03 8.03 0 000 11.3l39.7 39.7c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c53.8-53.8 144.6-59.5 204 0 59.5 59.5 53.8 150.2 0 204L665.3 562.6a8.03 8.03 0 000 11.3l39.8 39.8c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c84.5-84.6 84.5-221.5 0-306.1zM610.1 372.3a8.03 8.03 0 00-11.3 0L372.3 598.7a8.03 8.03 0 000 11.3l39.6 39.6c3.1 3.1 8.2 3.1 11.3 0l226.4-226.4c3.1-3.1 3.1-8.2 0-11.3l-39.5-39.6z" />
                </svg>
              </span>
              <span>{blog ? blog : "Not Found"}</span>
            </div>
            <div>
              <span>
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  height="1em"
                  width="1em"
                >
                  <path d="M18 8l-8 5-8-5V6l8 5 8-5m0-2H2C.9 4 0 4.9 0 6v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m6 3h-2v6h2V7m0 8h-2v2h2v-2z" />
                </svg>
              </span>
              <span>{email ? email : "Not Found"}</span>
            </div>
          </div>
        </div>
      </div> : <div>Wait...</div>}
    </div>
  );
}

export default Preview;