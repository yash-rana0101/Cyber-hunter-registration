import { Button, Datepicker, Select, TextInput } from "flowbite-react";
import React from "react";

export default function App() {
  return (
    <div className="w-full h-screen  flex items-center justify-center bg-slate-900">
      <form className="flex flex-col gap-2 items-center w-96">
        <h1 className="text-2xl text-white">Registration Form</h1>
        <TextInput placeholder="Name" className="w-full" />
        <TextInput placeholder="Q.Id" className="w-full" />
        <Select id="Course" className="w-full" required>
          <option>B.Tech</option>
          <option>BCA</option>
        </Select>
        <Select id="sessionYear" className="w-full" required>
          <option>1st</option>
          <option>2nd</option>
          <option>3rd</option>
          <option>4th</option>
        </Select>
        <Select id="section" className="w-full" required>
          <option>A</option>
          <option>B</option>
          <option>C</option>
          <option>D</option>
          <option>E</option>
          <option>F</option>
          <option>G</option>
          <option>H</option>
          <option>I</option>
        </Select>
        <TextInput placeholder="E-mail" className="w-full" />
        <TextInput placeholder="Phone Number" className="w-full" />
        <Datepicker size="xs" className="w-full"/>
        <Button> Pay Now </Button>
        <Button>Submit</Button>
      </form>
    </div>
  );
}
