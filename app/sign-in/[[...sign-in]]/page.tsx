{/*import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";

export default function SignInPages() {
  return (
    <>
  <LoginLink 
  authUrlParams={{
    
    connection_id: "conn_0192dd35969ebf700f11ad2c3a091519"
    
  }}>
    Logga in med Google
    </LoginLink>
      <LoginLink 
      authUrlParams={{
        
        connection_id: "conn_0192dd35969eede9cd026d5d3469ab13"
        
      }}>
        Logga in med facebook
        </LoginLink>
          <LoginLink 
          authUrlParams={{
            
            connection_id: "conn_0192dd35969dc63c8e97fb23914c0815"
            
          }}>
            Logga in med apple
            </LoginLink>
            </>
  )
}
*/}

import { SignIn } from '@clerk/nextjs'

export default function SignInPage() {
  return <SignIn />
}