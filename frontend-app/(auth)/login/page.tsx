import LoginForm from "./components/LoginForm";
import GoogleSignIn from "./components/GoogleSignIn";
import AuthBootstrap from "../components/AuthBootstrap";

export default function LoginPage() {
  return (
    <>
      <AuthBootstrap />
      <h1 className="text-2xl font-bold mb-4 text-center">Welcome Back</h1>
      <LoginForm />
      <div className="mt-6 text-center text-sm text-gray-500">or</div>
      <GoogleSignIn />
    </>
  );
}
