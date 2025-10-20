import Demo from "./components/testMantineUi";

export default function Home() {
  return (
    <div className="text-5xl font-bold flex flex-col space-y-4 items-center justify-center w-full h-screen text-green-500">
      <h1 className="bg-linear-to-b from-purple-300 via-pink-300 p-2 rounded-lg to-purple-600 bg-clip-text text-transparent">
        Welcome to Dev&apos;s On Start
      </h1>
      <Demo />
    </div>
  );
}
