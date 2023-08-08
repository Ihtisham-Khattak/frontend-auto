import React from "react";
import { useSession, signOut, signIn } from "next-auth/react";
import { Button } from "reactstrap";
Button
const login = () => {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <p>
          {/* Signed in as {session.user.email} <br />{" "} */}
        </p>
        <Button className="btn" color="primary" onClick={() => signOut()}>
          SignOut
        </Button>
      </>
    );
  }

  if (!session) {
    return (
      <>
        <p>
          {/* Signed in as {session.user.email} <br />{" "} */}
        </p>
        <Button className="btn" color="primary" onClick={() => signIn()}>
          SignOut
        </Button>
      </>
    );
  }
};

export default login;
