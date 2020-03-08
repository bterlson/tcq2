import React from "react";
import "./App.css";

function App() {
  return (
    <div className="">
      <header className="flex justify-between px-4 py-2 bg-orange-200 h-16 items-center border-b border-orange-400">
        <a href="/" className="text-4xl">
          TCQ
        </a>
        <a
          href="/"
          className="text-xl bg-transparent hover:bg-orange-600 font-semibold py-2 px-4 border border-orange-500 rounded hover:text-white"
        >
          Sign in
        </a>
      </header>
      <section className="bg-gray-300 mb-4">
        <div className="container flex flex-wrap flex-col md:flex-row items-center mx-auto pb-4">
          <div className="w-full md:w-1/2 pb-4 md:pb-0">
            <h1 className="my-4 text-5xl font-bold leading-tight">
              Ridiculously productive meetings
            </h1>
            <p className="leading-normal text-2xl">
              TCQ makes meetings productive and inclusive by managing your
              meeting's agenda, queuing discussions, tracking documents and
              outcomes, and more.
            </p>
            <p className="leading-normal text-2xl mt-2">
              It's like a "Raise Your Hand" button but a million times more
              useful.
            </p>
          </div>
          <div className="w-full md:w-1/2 px-4">
            <div className="inline-block w-full bg-gray-100 h-64 text-center">Screenshot</div>
          </div>
        </div>
      </section>

      <section className="container flex flex-wrap flex-col md:flex-row items-center mx-auto mt-4">
        <div className="w-full md:w-1/2 md:pr-4 pb-4 md:pb-0">
          <h2 className="text-2xl font-bold">Discussion queue</h2>
          <p className="text-xl">Discussion topics are submitted by attendees and entered into a queue. Clarifying questions are addressed first. Discussion about the current topic is resolved before moving on to the next topic. TCQ makes your meetings laser focused. Never miss a discussion topic again!</p>
        </div>

        <div className="w-full md:w-1/2 md:pl-4">
          <div className="inline-block w-full bg-gray-100 h-64 text-center">Screenshot</div>
        </div>
      </section>

      <section className="container flex flex-wrap flex-col md:flex-row items-center mx-auto mt-4">
        <div className="w-full md:w-1/2 md:pr-4 pb-4 md:pb-0">
          <h2 className="text-2xl font-bold">Agenda management</h2>
          <p className="text-xl">Add agenda items before the meeting, or set up automation to create agenda items with our API. Want to drive triage or standup agendas from GitHub issues labeled a certain way? No problemo!</p>
        </div>

        <div className="w-full md:w-1/2 md:pl-4">
          <div className="inline-block w-full bg-gray-100 h-64 text-center">Screenshot</div>
        </div>
      </section>

      <section className="container flex flex-wrap flex-col md:flex-row items-center mx-auto mt-4">
        <div className="w-full md:w-1/2 md:pr-4 pb-4 md:pb-0">
          <h2 className="text-2xl font-bold">Collaborative minutes</h2>
          <p className="text-xl">Keeping minutes is hard. TCQ helps by allowing any meeting participant to take notes as needed. Topics from the discussion queue are automatically written to the minutes along with other useful tidbids.</p>
        </div>

        <div className="w-full md:w-1/2 md:pl-4">
          <div className="inline-block w-full bg-gray-100 h-64 text-center">Screenshot</div>
        </div>
      </section>

      <section className="container flex flex-wrap flex-col md:flex-row items-center mx-auto mt-4">
        <div className="w-full md:w-1/2 md:pr-4 pb-4 md:pb-0">
          <h2 className="text-2xl font-bold">Track meeting objectives and outcomes</h2>
          <p className="text-xl">Never forget to note a conclusion or an action item. Use our API to trigger automation based on meeting minutes.</p>
        </div>

        <div className="w-full md:w-1/2 md:pl-4">
          <div className="inline-block w-full bg-gray-100 h-64 text-center">Screenshot</div>
        </div>
      </section>

      <section className="container flex flex-wrap flex-col md:flex-row items-center mx-auto mt-4">
        <div className="w-full md:w-1/2 md:pr-4 pb-4 md:pb-0">
          <h2 className="text-2xl font-bold">Optional Robert's Rules</h2>
          <p className="text-xl">Whether you're convening a board meeting or running an HOA, TCQ makes keeping regular order easy. If you don't need Robert's Rules, don't worry, it's totally optional.</p>
        </div>

        <div className="w-full md:w-1/2 md:pl-4">
          <div className="inline-block w-full bg-gray-100 h-64 text-center">Screenshot</div>
        </div>
      </section>
      
    </div>
  );
}

export default App;
