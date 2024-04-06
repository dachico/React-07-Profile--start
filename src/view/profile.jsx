import styled from "styled-components";

export function Profile({ pickRobot, firstRobot }) {
  return (
    <ProfileDiv>
      {pickRobot ? (
        <>
          <header>
            <img src={pickRobot.avatar} alt="avatar" />
          </header>
          <main>
            <h1>
              {pickRobot.first_name} {pickRobot.last_name}
            </h1>
            <span></span>
            <h5>id: {pickRobot.id}</h5>
            <h5>country: {pickRobot.country}</h5>
            <h5>email: {pickRobot.email}</h5>
            <p>{pickRobot.description}</p>
          </main>
        </>
      ) : (
        <>
          <header>
            <img src={firstRobot.avatar} alt="avatar" />
          </header>
          <main>
            <h1>
              {firstRobot.first_name} {firstRobot.last_name}
            </h1>
            <span></span>
            <h5>id: {firstRobot.id}</h5>
            <h5>country: {firstRobot.country}</h5>
            <h5>email: {firstRobot.email}</h5>
            <p>{firstRobot.description}</p>
          </main>
        </>
      )}
    </ProfileDiv>
  );
}

const ProfileDiv = styled.div`
  display: flex;
  padding: 1.5rem;
  flex-direction: column;
  padding-right: 1.5rem;
  align-items: center;

  header {
    background: peachpuff;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    width: 30rem;
    height: 30rem;
  }

  main {
    padding: 1rem;
    font-family: "Expletus Sans";
    text-align: left;
    color: slategray;
    font-weight: 400;
  }

  img {
    border-radius: 50%;
    width: 30rem;
  }

  h1 {
    font-size: 3.8rem;
    font-weight: 400;
    color: slategray;
  }

  span {
    margin-top: 2rem;
    display: block;
    width: 100%;
    border: none;
    height: 1px;
    background: -webkit-gradient(
      radial,
      50% 50%,
      0,
      50% 50%,
      200,
      from(midnightblue),
      to(Cornsilk)
    );
  }

  h5 {
    margin-top: 2rem;
    font-size: 2.2rem;
    font-weight: inherit;
    color: darkslateblue;
  }

  p {
    margin-top: 2rem;
    font-size: 1.8rem;
    max-width: 40rem;
  }
`;
