"use client";

import {
  Pagination,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationContent,
  PaginationPrevious,
} from "@/components/ui";
import { Card } from "@/components/cards";

import { cn } from "@/lib/utils";
import React, { useState } from "react";
import {
  button1,
  button2,
  button3,
  button4,
  button5,
  Button6,
  Button7,
  Button8,
  Button9,
  button10,
  button11,
  button12,
  button13,
  button14,
  Button15,
  button16,
  button17,
  button18,
  Button19,
  Button20,
  Button21,
  button22
} from "./components";

const itemsPerPage = 12;

const CardsButton = () => {
  const [filter, setFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  let counter = 1;

  const generateKey = () => `card-${counter++}`;

  const cardsButton = [
    <Card
      key={generateKey()}
      iconColor="#fff"
      information="css"
      background="bg-gradient-to-r from-black to-pink-950/30"
      content={
        <div
          dangerouslySetInnerHTML={{
            __html: button1,
          }}
        />
      }
    />,
    <Card
      key={generateKey()}
      iconColor="#fff"
      information="Css"
      background="bg-gradient-to-r from-green-950"
      content={
        <div
          dangerouslySetInnerHTML={{
            __html: button2
          }}
        />
      }
    />,
    <Card
      key={generateKey()}
      information="Css"
      iconColor="#fff"
      background="bg-gradient-to-r from-slate-950"
      content={
        <div
          dangerouslySetInnerHTML={{
            __html: button3
          }}
        />
      }
    />,
    <Card
      key={generateKey()}
      information="Css"
      iconColor="#fff"
      background="bg-[#000]"
      content={
        <div
          dangerouslySetInnerHTML={{
            __html: button4
          }}
        />
      }
    />,
    <Card
      key={generateKey()}
      information="Css"
      iconColor="#fff"
      background="bg-gradient-to-t from-purple-950"
      content={
        <div
          dangerouslySetInnerHTML={{
            __html: button5
          }}
        />
      }
    />,
    <Card
      key={generateKey()}
      information="Tailwind"
      iconColor="#fff"
      background="bg-gradient-to-l from-slate-950"
      content={<Button6 />}
    />,
    <Card
      key={generateKey()}
      information="Tailwind"
      iconColor="#fff"
      background="bg-gradient-to-t from-blue-800/50"
      content={<Button7 />}
    />,
    <Card
      key={generateKey()}
      information="Tailwind"
      iconColor="#fff"
      background="bg-gradient-to-r from-zinc-950 to-zinc-800"
      content={<Button8 />}
    />,
    <Card
      key={generateKey()}
      information="Tailwind"
      iconColor="#fff"
      background="bg-gradient-to-t from-slate-950"
      content={<Button9 />}
    />,
    <Card
      key={generateKey()}
      information="Css"
      iconColor="#fff"
      background="bg-gradient-to-r from-purple-950/60"
      content={
        <div
          dangerouslySetInnerHTML={{
            __html: button10
          }}
        />
      }
    />,
    <Card
      key={generateKey()}
      information="Css"
      iconColor="#fff"
      background="bg-gradient-to-r from-zinc-700"
      content={
        <div
          dangerouslySetInnerHTML={{
            __html: button11
          }}
        />
      }
    />,
    <Card
      key={generateKey()}
      information="Css"
      iconColor="#fff"
      background="bg-gradient-to-l from-red-950/60"
      content={
        <div
          dangerouslySetInnerHTML={{
            __html: button12
          }}
        />
      }
    />,
    <Card
      key={generateKey()}
      iconColor="#fff"
      information="css"
      background="bg-gradient-to-r from-slate-950"
      content={
        <div
          dangerouslySetInnerHTML={{
            __html: button13
          }}
        />
      }
    />,
    <Card
      key={generateKey()}
      information="Css"
      iconColor="#000"
      background="bg-[#fff]"
      content={
        <div
          dangerouslySetInnerHTML={{
            __html: button14
          }}
        />
      }
    />,
    <Card
      key={generateKey()}
      information="Tailwind"
      iconColor="#fff"
      background="bg-[#000]"
      content={<Button15 />}
    />,
    <Card
      key={generateKey()}
      information="Css"
      iconColor="#fff"
      background="bg-gradient-to-t from-cyan-950/60"
      content={
        <div
          dangerouslySetInnerHTML={{
            __html: button16
          }}
        />
      }
    />,
    <Card
      key={generateKey()}
      information="Css"
      iconColor="#fff"
      background="bg-gradient-to-t from-slate-950"
      content={
        <div
          dangerouslySetInnerHTML={{
            __html: button17
          }}
        />
      }
    />,
    <Card
      key={generateKey()}
      information="Css"
      iconColor="#fff"
      background="bg-gradient-to-l from-blue-700/40"
      content={
        <div
          dangerouslySetInnerHTML={{
            __html: button18
          }}
        />
      }
    />,
    <Card
      key={generateKey()}
      information="Tailwind"
      iconColor="#fff"
      background="bg-gradient-to-r from-sky-500 to-indigo-700/70"
      content={<Button19 />}
    />,
    <Card
      key={generateKey()}
      information="Tailwind"
      iconColor="#fff"
      background="bg-gradient-to-t from-slate-500/70 to-slate-800/30"
      content={<Button20 />}
    />,
    <Card
      key={generateKey()}
      information="Tailwind"
      iconColor="#fff"
      background="bg-gradient-to-l from-slate-950 to-slate-800"
      content={<Button21 />}
    />,
    <Card
      key={generateKey()}
      information="Css"
      iconColor="#fff"
      background="bg-gradient-to-l from-blue-700/40"
      content={
        <div
          dangerouslySetInnerHTML={{
            __html: button22
          }}
        />
      }
    />,
    <Card
      key={generateKey()}
      information="Css"
      iconColor="#fff"
      background="bg-[#000]"
      content={
        <div
          dangerouslySetInnerHTML={{
            __html: `
    <button class="btn-U4zrJd">
    <div class="wrapper-ZX2g8w">
      <p class="text-Ey92Vu">Flowers</p>

      <div class="flower-Hg2x7L flower1-Qp4zRf">
        <div class="petal-Po8sXj one-D3LmK9"></div>
        <div class="petal-Po8sXj two-N8Wq6X"></div>
        <div class="petal-Po8sXj three-F2Gz7M"></div>
        <div class="petal-Po8sXj four-L3YkB7"></div>
      </div>
      <div class="flower-Hg2x7L flower2-Ry9wMn">
        <div class="petal-Po8sXj one-D3LmK9"></div>
        <div class="petal-Po8sXj two-N8Wq6X"></div>
        <div class="petal-Po8sXj three-F2Gz7M"></div>
        <div class="petal-Po8sXj four-L3YkB7"></div>
      </div>
      <div class="flower-Hg2x7L flower3-Kr8bVp">
        <div class="petal-Po8sXj one-D3LmK9"></div>
        <div class="petal-Po8sXj two-N8Wq6X"></div>
        <div class="petal-Po8sXj three-F2Gz7M"></div>
        <div class="petal-Po8sXj four-L3YkB7"></div>
      </div>
      <div class="flower-Hg2x7L flower4-Tg5xPr">
        <div class="petal-Po8sXj one-D3LmK9"></div>
        <div class="petal-Po8sXj two-N8Wq6X"></div>
        <div class="petal-Po8sXj three-F2Gz7M"></div>
        <div class="petal-Po8sXj four-L3YkB7"></div>
      </div>
      <div class="flower-Hg2x7L flower5-Ly7zPw">
        <div class="petal-Po8sXj one-D3LmK9"></div>
        <div class="petal-Po8sXj two-N8Wq6X"></div>
        <div class="petal-Po8sXj three-F2Gz7M"></div>
        <div class="petal-Po8sXj four-L3YkB7"></div>
      </div>
      <div class="flower-Hg2x7L flower6-Qg1zNr">
        <div class="petal-Po8sXj one-D3LmK9"></div>
        <div class="petal-Po8sXj two-N8Wq6X"></div>
        <div class="petal-Po8sXj three-F2Gz7M"></div>
        <div class="petal-Po8sXj four-L3YkB7"></div>
      </div>
    </div>
    </button>

        <style>
    .btn-U4zrJd {
    height: 4em;
    width: 12em;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    border: 0px solid black;
    cursor: pointer;
    }

    .wrapper-ZX2g8w {
    height: 2em;
    width: 8em;
    position: relative;
    background: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    }

    .text-Ey92Vu {
    font-size: 17px;
    z-index: 1;
    color: #000;
    padding: 4px 12px;
    border-radius: 4px;
    background: rgba(255, 255, 255, 0.7);
    transition: all 0.5s ease;
    }

    .flower-Hg2x7L {
    display: grid;
    grid-template-columns: 1em 1em;
    position: absolute;
    transition: grid-template-columns 0.8s ease;
    }

    .flower1-Qp4zRf {
    top: -12px;
    left: -13px;
    transform: rotate(5deg);
    }

    .flower2-Ry9wMn {
    bottom: -5px;
    left: 8px;
    transform: rotate(35deg);
    }

    .flower3-Kr8bVp {
    bottom: -15px;
    transform: rotate(0deg);
    }

    .flower4-Tg5xPr {
    top: -14px;
    transform: rotate(15deg);
    }

    .flower5-Ly7zPw {
    right: 11px;
    top: -3px;
    transform: rotate(25deg);
    }

    .flower6-Qg1zNr {
    right: -15px;
    bottom: -15px;
    transform: rotate(30deg);
    }

    .petal-Po8sXj {
    height: 1em;
    width: 1em;
    border-radius: 40% 70% / 7% 90%;
    background: linear-gradient(#07a6d7, #93e0ee);
    border: 0.5px solid #96d1ec;
    z-index: 0;
    transition: width 0.8s ease, height 0.8s ease;
    }

    .two-N8Wq6X {
    transform: rotate(90deg);
    }

    .three-F2Gz7M {
    transform: rotate(270deg);
    }

    .four-L3YkB7 {
    transform: rotate(180deg);
    }

    .btn-U4zrJd:hover .petal-Po8sXj {
    background: linear-gradient(#0761d7, #93bdee);
    border: 0.5px solid #96b4ec;
    }

    .btn-U4zrJd:hover .flower-Hg2x7L {
    grid-template-columns: 1.5em 1.5em;
    }

    .btn-U4zrJd:hover .flower-Hg2x7L .petal-Po8sXj {
    width: 1.5em;
    height: 1.5em;
    }

    .btn-U4zrJd:hover .text-Ey92Vu {
    background: rgba(255, 255, 255, 0.4);
    }

    .btn-U4zrJd:hover div.flower1-Qp4zRf {
    animation: 15s linear 0s normal none infinite running flower1-Qp4zRf;
    }

    @keyframes flower1-Qp4zRf {
    0% {
      transform: rotate(5deg);
    }

    100% {
      transform: rotate(365deg);
    }
    }

    .btn-U4zrJd:hover div.flower2-Ry9wMn {
    animation: 13s linear 1s normal none infinite running flower2-Ry9wMn;
    }

    @keyframes flower2-Ry9wMn {
    0% {
      transform: rotate(35deg);
    }

    100% {
      transform: rotate(-325deg);
    }
    }

    .btn-U4zrJd:hover div.flower3-Kr8bVp {
    animation: 16s linear 1s normal none infinite running flower3-Kr8bVp;
    }

    @keyframes flower3-Kr8bVp {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
    }

    .btn-U4zrJd:hover div.flower4-Tg5xPr {
    animation: 17s linear 1s normal none infinite running flower4-Tg5xPr;
    }

    @keyframes flower4-Tg5xPr {
    0% {
      transform: rotate(15deg);
    }

    100% {
      transform: rotate(375deg);
    }
    }

    .btn-U4zrJd:hover div.flower5-Ly7zPw {
    animation: 20s linear 1s normal none infinite running flower5-Ly7zPw;
    }

    @keyframes flower5-Ly7zPw {
    0% {
      transform: rotate(25deg);
    }

    100% {
      transform: rotate(-335deg);
    }
    }

    .btn-U4zrJd:hover div.flower6-Qg1zNr {
    animation: 15s linear 1s normal none infinite running flower6-Qg1zNr;
    }

    @keyframes flower6-Qg1zNr {
    0% {
      transform: rotate(30deg);
    }

    100% {
      transform: rotate(390deg);
    }
    }

        </style>
      `,
          }}
        />
      }
    />,
    <Card
      key={generateKey()}
      information="Css"
      iconColor="#fff"
      background="bg-gradient-to-b from-slate-950"
      content={
        <div
          dangerouslySetInnerHTML={{
            __html: `
    <button class="btn-5jD8wL">
    <div class="svg-wrapper-2k8VnR">
    <div class="svg-container-9LrZyP">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
        class="icon-M7zQxT"
      >
        <path fill="none" d="M0 0h24v24H0z"></path>
        <path
          fill="currentColor"
          d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
        ></path>
      </svg>
    </div>
    </div>
    <span class="text-3nL2Rb">Send</span>
    </button>
      <style>
    .btn-5jD8wL {
    font-family: inherit;
    font-size: 20px;
    background: royalblue;
    color: white;
    padding: 0.7em 1em;
    padding-left: 0.9em;
    display: flex;
    align-items: center;
    border: none;
    border-radius: 16px;
    overflow: hidden;
    transition: all 0.2s;
    cursor: pointer;
    }

    .text-3nL2Rb {
    display: block;
    margin-left: 0.3em;
    transition: all 0.3s ease-in-out;
    }

    .icon-M7zQxT {
    display: block;
    transform-origin: center center;
    transition: transform 0.3s ease-in-out;
    }

    .btn-5jD8wL:hover .svg-container-9LrZyP {
    animation: fly-1-5Zk8L3 0.6s ease-in-out infinite alternate;
    }

    .btn-5jD8wL:hover .icon-M7zQxT {
    transform: translateX(1.2em) rotate(45deg) scale(1.1);
    }

    .btn-5jD8wL:hover .text-3nL2Rb {
    transform: translateX(5em);
    }

    .btn-5jD8wL:active {
    transform: scale(0.95);
    }

    @keyframes fly-1-5Zk8L3 {
    from {
    transform: translateY(0.1em);
    }

    to {
    transform: translateY(-0.1em);
    }
    }

      </style>
    `,
          }}
        />
      }
    />,
    <Card
      key={generateKey()}
      information="Tailwind"
      iconColor="#fff"
      background="bg-gradient-to-t from-slate-200"
      content={
        <button className="relative h-12 overflow-hidden rounded bg-neutral-950 px-5 py-2.5 text-white transition-all duration-300 hover:bg-neutral-800 hover:ring-2 hover:ring-neutral-800 hover:ring-offset-2">
          <span className="relative">Hover me</span>
        </button>
      }
    />,
    <Card
      key={generateKey()}
      information="Tailwind"
      iconColor="#fff"
      background="bg-gradient-to-l from-indigo-800"
      content={
        <button className="group relative h-12 overflow-hidden overflow-x-hidden rounded-md bg-neutral-950 px-8 py-2 text-neutral-50">
          <span className="relative z-10">Hover Me</span>
          <span className="absolute inset-0 overflow-hidden rounded-md">
            <span className="absolute left-0 aspect-square w-full origin-center -translate-x-full rounded-full bg-blue-500 transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span>
          </span>
        </button>
      }
    />,
    <Card
      key={generateKey()}
      information="Tailwind"
      iconColor="#fff"
      background="bg-gradient-to-r from-gray-950"
      content={
        <button className="group relative z-0 h-12 overflow-hidden overflow-x-hidden rounded-md bg-neutral-950 px-8 py-2 text-neutral-50">
          <span className="relative z-10">Hover Me</span>
          <span className="absolute inset-0 overflow-hidden rounded-md">
            <span className="absolute left-0 aspect-square w-full origin-center translate-x-full rounded-full bg-blue-500 transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span>
          </span>
        </button>
      }
    />,
    <Card
      key={generateKey()}
      information="Tailwind"
      iconColor="#fff"
      background="bg-gradient-to-t from-gray-800"
      content={
        <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-neutral-200 px-6 font-medium text-neutral-950 duration-500">
          <div className="relative inline-flex -translate-x-0 items-center transition group-hover:translate-x-6">
            <div className="absolute -translate-x-4 opacity-0 transition group-hover:-translate-x-6 group-hover:opacity-100">
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
              >
                <path
                  d="M6.97942 1.25171L6.9585 1.30199L5.58662 4.60039C5.54342 4.70426 5.44573 4.77523 5.3336 4.78422L1.7727 5.0697L1.71841 5.07405L1.38687 5.10063L1.08608 5.12475C0.820085 5.14607 0.712228 5.47802 0.914889 5.65162L1.14406 5.84793L1.39666 6.06431L1.43802 6.09974L4.15105 8.42374C4.23648 8.49692 4.2738 8.61176 4.24769 8.72118L3.41882 12.196L3.40618 12.249L3.32901 12.5725L3.25899 12.866C3.19708 13.1256 3.47945 13.3308 3.70718 13.1917L3.9647 13.0344L4.24854 12.861L4.29502 12.8326L7.34365 10.9705C7.43965 10.9119 7.5604 10.9119 7.6564 10.9705L10.705 12.8326L10.7515 12.861L11.0354 13.0344L11.2929 13.1917C11.5206 13.3308 11.803 13.1256 11.7411 12.866L11.671 12.5725L11.5939 12.249L11.5812 12.196L10.7524 8.72118C10.7263 8.61176 10.7636 8.49692 10.849 8.42374L13.562 6.09974L13.6034 6.06431L13.856 5.84793L14.0852 5.65162C14.2878 5.47802 14.18 5.14607 13.914 5.12475L13.6132 5.10063L13.2816 5.07405L13.2274 5.0697L9.66645 4.78422C9.55432 4.77523 9.45663 4.70426 9.41343 4.60039L8.04155 1.30199L8.02064 1.25171L7.89291 0.944609L7.77702 0.665992C7.67454 0.419604 7.32551 0.419604 7.22303 0.665992L7.10715 0.944609L6.97942 1.25171ZM7.50003 2.60397L6.50994 4.98442C6.32273 5.43453 5.89944 5.74207 5.41351 5.78103L2.84361 5.98705L4.8016 7.66428C5.17183 7.98142 5.33351 8.47903 5.2204 8.95321L4.62221 11.461L6.8224 10.1171C7.23842 9.86302 7.76164 9.86302 8.17766 10.1171L10.3778 11.461L9.77965 8.95321C9.66654 8.47903 9.82822 7.98142 10.1984 7.66428L12.1564 5.98705L9.58654 5.78103C9.10061 5.74207 8.67732 5.43453 8.49011 4.98442L7.50003 2.60397Z"
                  fill="currentColor"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <span className="pr-6">Hover</span>
            <div className="absolute right-0 translate-x-0 opacity-100 transition group-hover:translate-x-4 group-hover:opacity-0">
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
              >
                <path
                  d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                  fill="currentColor"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
          </div>
        </button>
      }
    />,
    <Card
      key={generateKey()}
      information="Tailwind"
      iconColor="#fff"
      background="bg-gradient-to-r from-blue-800"
      content={
        <button className="group relative inline-flex h-12 items-center justify-center rounded-md bg-neutral-950 px-6 font-medium text-neutral-200">
          <span>Hover me</span>
          <div className="relative ml-1 h-5 w-5 overflow-hidden">
            <div className="absolute transition-all duration-200 group-hover:-translate-y-5 group-hover:translate-x-4">
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
              >
                <path
                  d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                  fill="currentColor"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 -translate-x-4"
              >
                <path
                  d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                  fill="currentColor"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
          </div>
        </button>
      }
    />,
    <Card
      key={generateKey()}
      information="Tailwind"
      iconColor="#fff"
      background="bg-gradient-to-r from-purple-800/70"
      content={
        <button className="group relative inline-flex h-[calc(48px+8px)] items-center justify-center rounded-full bg-neutral-950 py-1 pl-6 pr-14 font-medium text-neutral-50">
          <span className="z-10 pr-2">Hover me</span>
          <div className="absolute right-1 inline-flex h-12 w-12 items-center justify-end rounded-full bg-neutral-700 transition-[width] group-hover:w-[calc(100%-8px)]">
            <div className="mr-3.5 flex items-center justify-center">
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-neutral-50"
              >
                <path
                  d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                  fill="currentColor"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
          </div>
        </button>
      }
    />,
    <Card
      key={generateKey()}
      information="Tailwind"
      iconColor="#fff"
      background="bg-gradient-to-r from-slate-950"
      content={
        <button className="relative z-0 h-12 rounded-full bg-blue-500 px-6 text-neutral-50 after:absolute after:left-0 after:top-0 after:-z-10 after:h-full after:w-full after:rounded-full after:bg-blue-500 hover:after:scale-x-125 hover:after:scale-y-150 hover:after:opacity-0 hover:after:transition hover:after:duration-500">
          Hover me
        </button>
      }
    />,
    <Card
      key={generateKey()}
      information="Tailwind"
      iconColor="#fff"
      background="bg-[#000]"
      content={
        <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md border border-neutral-200 font-medium">
          <div className="inline-flex h-12 translate-y-0 items-center justify-center bg-white px-6 text-neutral-950 transition group-hover:-translate-y-[150%]">
            Hover me
          </div>
          <div className="absolute inline-flex h-12 w-full translate-y-[100%] items-center justify-center bg-blue-500 px-6 text-neutral-50 transition duration-300 group-hover:translate-y-0">
            Hover me
          </div>
        </button>
      }
    />,
    <Card
      key={generateKey()}
      information="Tailwind"
      iconColor="#fff"
      background="bg-[#000]"
      content={
        <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md border border-neutral-200 font-medium">
          <div className="inline-flex h-12 translate-x-0 items-center justify-center bg-white px-6 text-neutral-950 transition group-hover:-translate-x-[150%]">
            Hover me
          </div>
          <div className="absolute inline-flex h-12 w-full translate-x-[100%] items-center justify-center bg-blue-500 px-6 text-neutral-50 transition duration-300 group-hover:translate-x-0">
            Hover me
          </div>
        </button>
      }
    />,
    <Card
      key={generateKey()}
      information="Tailwind"
      iconColor="#fff"
      background="bg-gradient-to-t from-red-800/50"
      content={
        <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md border border-neutral-200 bg-white font-medium">
          <div className="inline-flex h-12 translate-y-0 items-center justify-center px-6 text-neutral-950 transition duration-500 group-hover:-translate-y-[150%]">
            Hover me
          </div>
          <div className="absolute inline-flex h-12 w-full translate-y-[100%] items-center justify-center text-neutral-50 transition duration-500 group-hover:translate-y-0">
            <span className="absolute h-full w-full translate-y-full skew-y-12 scale-y-0 bg-blue-500 transition duration-500 group-hover:translate-y-0 group-hover:scale-150"></span>
            <span className="z-10">Hover me</span>
          </div>
        </button>
      }
    />,
    <Card
      key={generateKey()}
      information="Tailwind"
      iconColor="#fff"
      background="bg-gradient-to-t from-slate-800/50 to-indigo-950"
      content={
        <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full border border-neutral-200 bg-transparent px-4 text-neutral-100">
          <span className="relative inline-flex overflow-hidden">
            <div className="absolute origin-bottom transition duration-500 [transform:translateX(-150%)_skewX(33deg)] group-hover:[transform:translateX(0)_skewX(0deg)]">
              Hover me
            </div>
            <div className="transition duration-500 [transform:translateX(0%)_skewX(0deg)] group-hover:[transform:translateX(150%)_skewX(33deg)]">
              Hover me
            </div>
          </span>
        </button>
      }
    />,
    <Card
      key={generateKey()}
      information="Tailwind"
      iconColor="#000"
      background="bg-[#fff]"
      content={
        <button
          role="link"
          className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-left after:scale-x-100 after:bg-neutral-800 after:transition-transform after:duration-150 after:ease-in-out hover:after:origin-bottom-right hover:after:scale-x-0"
        >
          Hover me
        </button>
      }
    />,
    <Card
      key={generateKey()}
      information="Tailwind"
      iconColor="#000"
      background="bg-[#fff]"
      content={
        <button
          role="link"
          className="relative bg-[linear-gradient(#262626,#262626),linear-gradient(#3b82f6,#3b82f6)] bg-[length:100%_2px,0_2px] bg-[position:100%_100%,0_100%] bg-no-repeat text-neutral-950 transition-[background-size] duration-300 hover:bg-[0_2px,100%_2px]"
        >
          Hover me
        </button>
      }
    />,
    <Card
      key={generateKey()}
      information="Tailwind"
      iconColor="#000"
      background="bg-[#fff]"
      content={
        <button
          role="link"
          className="relative bg-[linear-gradient(#262626,#262626),linear-gradient(#3b82f6,#3b82f6)] bg-[length:100%_2px,0_2px] bg-[position:100%_100%,0_100%] bg-no-repeat text-neutral-950 transition-[background-size,color] duration-500 hover:bg-[0_2px,100%_2px] hover:text-[#3b82f6]"
        >
          Hover me
        </button>
      }
    />,
    <Card
      key={generateKey()}
      information="Tailwind"
      iconColor="#fff"
      background="bg-gradient-to-b from-gray-950 to-gray-600"
      content={
        <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-blue-500 px-6 font-medium text-neutral-50">
          <span className="absolute h-56 w-32 rounded-full bg-neutral-950 transition-all duration-300 group-hover:h-0 group-hover:w-0"></span>
          <span className="relative">Hover me</span>
        </button>
      }
    />,
    <Card
      key={generateKey()}
      iconColor="#fff"
      information="Css"
      background="bg-[#000]"
      content={
        <div
          dangerouslySetInnerHTML={{
            __html: `
          <button class="btn-ligth-1993">Hover me</button>
          <style>
            .btn-ligth-1993 {
             color: #B0C4DE;
             padding: 10px 20px;
             border-radius: 8px;
             border: none;
             font-weight: 500;
             background-color: #52a06f;
             box-shadow: 0px 5px 9px #12c757;
             cursor: pointer;

            }
            .btn-ligth-1993:hover {
             color: #fff;
             background-color: #53e088;
             box-shadow: 0px 8px 45px #12c757;
            }
          </style>
        `,
          }}
        />
      }
    />,
    <Card
      key={generateKey()}
      iconColor="#fff"
      information="Css"
      background="bg-[#000]"
      content={
        <div
          dangerouslySetInnerHTML={{
            __html: `
        <button class="button"><a >Click Me</a></button>
        <style>
          .button{
            position:relative;
            display:inline-block;
            }

          .button a{
            color:white;
            font-family:Helvetica, sans-serif;
            font-weight:bold;
            font-size:20px;
            text-align: center;
            text-decoration:none;
            background-color:#FFA12B;
            display:block;
            position:relative;
            padding:10px 20px;

            -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
            text-shadow: 0px 1px 0px #000;
            filter: dropshadow(color=#000, offx=0px, offy=1px);

            -webkit-box-shadow:inset 0 1px 0 #FFE5C4, 0 10px 0 #915100;
            -moz-box-shadow:inset 0 1px 0 #FFE5C4, 0 10px 0 #915100;
            box-shadow:inset 0 1px 0 #FFE5C4, 0 10px 0 #915100;

            -webkit-border-radius: 5px;
            -moz-border-radius: 5px;
            border-radius: 5px;
          }

          .button a:active{
            top:10px;
            background-color:#F78900;

            -webkit-box-shadow:inset 0 1px 0 #FFE5C4, inset 0 -3px 0 #915100;
            -moz-box-shadow:inset 0 1px 0 #FFE5C4, inset 0 -3pxpx 0 #915100;
            box-shadow:inset 0 1px 0 #FFE5C4, inset 0 -3px 0 #915100;
          }

          .button:after{
            content:"";
            height:100%;
            width:100%;
            padding:4px;
            position: absolute;
            bottom:-15px;
            left:-4px;
            z-index:-1;
            background-color:#2B1800;
            -webkit-border-radius: 5px;
            -moz-border-radius: 5px;
            border-radius: 5px;
          }
        </style>
      `,
          }}
        />
      }
    />,
    <Card
      key={generateKey()}
      iconColor="#fff"
      information="Css"
      background="bg-[#000]"
      content={
        <div
          dangerouslySetInnerHTML={{
            __html: `
         <button class="btn btn-one"><span>Hover Me</span></button>
        <style>

        .btn {
          line-height: 50px;
          height: 50px;
          text-align: center;
          width: 150px;
          cursor: pointer;
              }

        .btn-one {
          color: #FFF;
          transition: all 0.3s;
          position: relative;
        }
        .btn-one span {
          transition: all 0.3s;
        }
        .btn-one::before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
          opacity: 0;
          transition: all 0.3s;
          border-top-width: 1px;
          border-bottom-width: 1px;
          border-top-style: solid;
          border-bottom-style: solid;
          border-top-color: rgba(255,255,255,0.5);
          border-bottom-color: rgba(255,255,255,0.5);
          transform: scale(0.1, 1);
        }
        .btn-one:hover span {
          letter-spacing: 2px;
        }
        .btn-one:hover::before {
          opacity: 1;
          transform: scale(1, 1);
        }
        .btn-one::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
          transition: all 0.3s;
          background-color: rgba(255,255,255,0.1);
        }
        .btn-one:hover::after {
          opacity: 0;
          transform: scale(0.1, 1);
        }

        </style>
      `,
          }}
        />
      }
    />,
    <Card
      key={generateKey()}
      iconColor="#fff"
      information="Css"
      background="bg-[#000]"
      content={
        <div
          dangerouslySetInnerHTML={{
            __html: `
      <div class="btn btn-two"><span>Hover Me</span></div>
      <style>
        .btn-two {
          color: #FFF;
          transition: all 0.5s;
          position: relative;
                  }
          .btn-two span {
            z-index: 2;
            display: block;
            position: absolute;
            width: 100%;
            height: 100%;
          }
          .btn-two::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 1;
            transition: all 0.5s;
            border: 1px solid rgba(255,255,255,0.2);
            background-color: rgba(255,255,255,0.1);
          }
          .btn-two::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 1;
            transition: all 0.5s;
            border: 1px solid rgba(255,255,255,0.2);
            background-color: rgba(255,255,255,0.1);
          }
          .btn-two:hover::before {
            transform: rotate(-45deg);
            background-color: rgba(255,255,255,0);
          }
          .btn-two:hover::after {
            transform: rotate(45deg);
            background-color: rgba(255,255,255,0);
          }

      </style>
    `,
          }}
        />
      }
    />,
    <Card
      key={generateKey()}
      iconColor="#fff"
      information="Css"
      background="bg-[#000]"
      content={
        <div
          dangerouslySetInnerHTML={{
            __html: `
     <div class="btn btn-three"><span>Hover Me</span></div>
     <style>
       .btn-three {
          color: #FFF;
          transition: all 0.5s;
          position: relative;
                  }
       .btn-three::before {
         content: '';
         position: absolute;
         top: 0;
         left: 0;
         width: 100%;
         height: 100%;
         z-index: 1;
         background-color: rgba(255,255,255,0.1);
         transition: all 0.3s;
       }
       .btn-three:hover::before {
         opacity: 0 ;
         transform: scale(0.5,0.5);
       }
       .btn-three::after {
         content: '';
         position: absolute;
         top: 0;
         left: 0;
         width: 100%;
         height: 100%;
         z-index: 1;
         opacity: 0;
         transition: all 0.3s;
         border: 1px solid rgba(255,255,255,0.5);
         transform: scale(1.2,1.2);
       }
       .btn-three:hover::after {
         opacity: 1;
         transform: scale(1,1);
       }
     </style>
   `,
          }}
        />
      }
    />,
    <Card
      key={generateKey()}
      iconColor="#fff"
      information="Tailwind"
      background="bg-gradient-to-l from-zinc-950"
      content={
        <button className="inline-flex h-12 items-center justify-center rounded-md bg-neutral-50 px-6 font-medium text-neutral-950 transition active:scale-110 ">
          Click me
        </button>
      }
    />,
    <Card
      key={generateKey()}
      iconColor="#fff"
      information="Tailwind"
      background="bg-gradient-to-l from-zinc-950"
      content={
        <button className="inline-flex h-12 items-center justify-center rounded-md bg-neutral-50 px-6 font-medium text-neutral-950 shadow-lg shadow-neutral-500/20 transition active:scale-95">
          Click me
        </button>
      }
    />,
    <Card
      key={generateKey()}
      iconColor="#fff"
      information="Tailwind"
      background="bg-gradient-to-l from-zinc-600 to-zinc-950"
      content={
        <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-neutral-950 px-6 font-medium text-neutral-200 duration-500">
          <div className="translate-x-0 transition group-hover:-translate-x-[150%]">
            Hover me
          </div>
          <div className="absolute translate-x-[150%] transition group-hover:translate-x-0">
            Hover me
          </div>
        </button>
      }
    />,
    <Card
      key={generateKey()}
      iconColor="#fff"
      information="Tailwind"
      background="bg-gradient-to-r from-red-950"
      content={
        <button className="relative overflow-hidden rounded-md bg-red-700 px-5 py-2.5 text-white transition-all duration-300 [transition-timing-function:cubic-bezier(0.175,0.885,0.32,1.275)] active:-translate-y-1 active:scale-x-90 active:scale-y-110">
          Click me
        </button>
      }
    />,
    <Card
      key={generateKey()}
      iconColor="#fff"
      information="Tailwind"
      background="bg-gradient-to-t from-slate-950"
      content={
        <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-neutral-50 px-6 font-medium text-neutral-950">
          <span>Hover me</span>
          <div className="w-0 translate-x-[100%] pl-0 opacity-0 transition-all duration-200 group-hover:w-5 group-hover:translate-x-0 group-hover:pl-1 group-hover:opacity-100">
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
            >
              <path
                d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                fill="currentColor"
                fill-rule="evenodd"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
        </button>
      }
    />,
    <Card
      key={generateKey()}
      iconColor="#fff"
      information="Tailwind"
      background="bg-gradient-to-b from-indigo-700/60"
      content={
        <button className="relative h-12 overflow-hidden rounded bg-neutral-950 px-5 py-2.5 text-white transition-all duration-200 hover:bg-neutral-800 hover:ring-offset-2 active:ring-2 active:ring-neutral-800">
          Click me
        </button>
      }
    />,
    <Card
      key={generateKey()}
      iconColor="#fff"
      information="Tailwind"
      background="bg-gradient-to-r from-blue-700/30"
      content={
        <button
          className="inline-flex h-12 items-center rounded-lg bg-blue-500 px-6 text-neutral-50 disabled:pointer-events-none disabled:opacity-50 "
          disabled={true}
        >
          <div className="h-4 w-4 animate-spin rounded-full border-2 border-solid border-white border-t-transparent"></div>
          <span className="ml-2">Loading... </span>
        </button>
      }
    />,
    <Card
      key={generateKey()}
      iconColor="#000"
      information="Tailwind"
      background="bg-[#fff]"
      content={
        <button
          className="group relative inline-flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-neutral-950"
          title="Click"
        >
          <div className="transition duration-300 group-hover:rotate-[360deg]">
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-neutral-200"
            >
              <path
                d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                fill="currentColor"
                fill-rule="evenodd"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
        </button>
      }
    />,
    <Card
      key={generateKey()}
      iconColor="#fff"
      information="Tailwind"
      background="bg-gradient-to-b from-gray-700/60 to-gray-900"
      content={
        <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full border border-neutral-200 bg-transparent px-4 text-neutral-100">
          <span className="relative inline-flex overflow-hidden">
            <div className="absolute origin-bottom transition duration-500 [transform:translateX(-150%)_skewX(33deg)] group-hover:[transform:translateX(0)_skewX(0deg)]">
              Hover me
            </div>
            <div className="transition duration-500 [transform:translateX(0%)_skewX(0deg)] group-hover:[transform:translateX(150%)_skewX(33deg)]">
              Hover me
            </div>
          </span>
        </button>
      }
    />,
    <Card
      key={generateKey()}
      iconColor="#fff"
      information="Tailwind"
      background="bg-gradient-to-t from-slate-700/30"
      content={
        <button className="group relative h-12 rounded-full border border-neutral-200 bg-transparent px-4 text-neutral-100">
          <span className="relative inline-flex overflow-hidden">
            <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:-translate-y-[110%] group-hover:skew-y-12">
              Hover me
            </div>
            <div className="absolute translate-y-[110%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
              Hover me
            </div>
          </span>
        </button>
      }
    />,
    <Card
      key={generateKey()}
      iconColor="#fff"
      information="Tailwind"
      background="bg-[#000]"
      content={
        <button className="group relative h-12 overflow-hidden rounded-[8px] border border-neutral-200 bg-transparent px-4 text-neutral-100">
          <span className="relative inline-flex">
            <span className="duration-700 [transition-delay:0.02s] group-hover:[transform:rotateY(360deg)]">
              H
            </span>
            <span className="duration-700 [transition-delay:0.04s] group-hover:[transform:rotateY(360deg)]">
              o
            </span>
            <span className="duration-700 [transition-delay:0.06s] group-hover:[transform:rotateY(360deg)]">
              v
            </span>
            <span className="duration-700 [transition-delay:0.08s] group-hover:[transform:rotateY(360deg)]">
              e
            </span>
            <span className="duration-700 [transition-delay:0.10s] group-hover:[transform:rotateY(360deg)]">
              r
            </span>
            <span className="duration-700 [transition-delay:0.12s] group-hover:[transform:rotateY(360deg)]">
              &nbsp;
            </span>
            <span className="duration-700 [transition-delay:0.14s] group-hover:[transform:rotateY(360deg)]">
              m
            </span>
            <span className="duration-700 [transition-delay:0.16s] group-hover:[transform:rotateY(360deg)]">
              e
            </span>
          </span>
        </button>
      }
    />,
    <Card
      key={generateKey()}
      iconColor="#fff"
      information="Tailwind"
      background="bg-[#000]"
      content={
        <button className="group relative">
          <div className="relative z-10 inline-flex h-12 items-center justify-center overflow-hidden rounded-md border border-neutral-200 bg-transparent px-6 font-medium text-neutral-300 transition-all duration-300 group-hover:-translate-x-3 group-hover:-translate-y-3">
            Hover me
          </div>
          <div className="absolute inset-0 z-0 h-full w-full rounded-md transition-all duration-300 group-hover:-translate-x-3 group-hover:-translate-y-3 group-hover:[box-shadow:5px_5px_#a3a3a3,10px_10px_#d4d4d4,15px_15px_#e5e5e5]"></div>
        </button>
      }
    />,
    <Card
      key={generateKey()}
      iconColor="#fff"
      information="Tailwind"
      background="bg-gradient-to-b from-40% from-neutral-950 to-black"
      content={
        <a className="relative select-none cursor-pointer flex items-center justify-center w-12 h-12 bg-black text-white font-bold rounded-xl transition-all duration-300 ease-in-out group overflow-hidden hover:w-36">
          <svg
            className="absolute transition-transform duration-300 ease-in-out group-hover:-translate-x-12"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path d="M12 .297C5.373.297 0 5.67 0 12.297c0 5.305 3.438 9.8 8.205 11.4.6.111.82-.261.82-.577 0-.287-.011-1.25-.017-2.28-3.338.724-4.042-1.608-4.042-1.608-.546-1.386-1.333-1.756-1.333-1.756-1.091-.745.083-.73.083-.73 1.207.085 1.839 1.237 1.839 1.237 1.071 1.836 2.809 1.303 3.492.996.108-.775.419-1.303.761-1.603-2.665-.303-5.466-1.334-5.466-5.93 0-1.313.469-2.387 1.236-3.228-.125-.303-.535-1.53.117-3.175 0 0 1.008-.323 3.302 1.23a11.563 11.563 0 0 1 3.002-.404c1.022.004 2.052.139 3.002.404 2.294-1.553 3.302-1.23 3.302-1.23.652 1.645.243 2.872.118 3.175.77.841 1.236 1.915 1.236 3.228 0 4.607-2.805 5.624-5.474 5.92.431.372.815 1.102.815 2.224 0 1.604-.014 2.896-.014 3.287 0 .316.22.694.825.577C20.563 22.097 24 17.602 24 12.297 24 5.67 18.627.297 12 .297z" />
          </svg>

          <span
            className="pl-10 pr-3 text-lg uppercase
                      opacity-0 transition-opacity ease-in
                      group-hover:opacity-100 group-hover:duration-700"
          >
            Follow
          </span>
        </a>
      }
    />,
    <Card
      key={generateKey()}
      iconColor="#fff"
      information="Tailwind"
      background="bg-gradient-to-b from-40% from-neutral-950 to-black"
      content={
        <a className="relative select-none cursor-pointer flex items-center justify-center w-12 h-12 bg-[#0A66C2] text-white font-bold rounded-xl transition-all duration-300 ease-in-out group overflow-hidden hover:w-36">
          <svg
            className="absolute transition-transform duration-300 ease-in-out group-hover:-translate-x-12"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path d="M22.23 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.46C23.2 24 24 23.23 24 22.28V1.72C24 .77 23.2 0 22.23 0zM7.12 20.45H3.56V9H7.1v11.45H7.12zM5.34 7.68c-1.13 0-1.85-.75-1.85-1.67 0-.95.75-1.67 1.91-1.67s1.85.72 1.85 1.67c0 .92-.72 1.67-1.85 1.67zm15.22 12.77h-3.54V14.7c0-1.45-.52-2.43-1.82-2.43-.99 0-1.57.66-1.83 1.3-.1.25-.12.59-.12.94v5.95H9.66V9h3.4v1.57c.44-.68 1.23-1.65 3-1.65 2.2 0 3.86 1.4 3.86 4.41v7.14h-.02z" />
          </svg>

          <span
            className="pl-16 pr-8 text-lg uppercase
                    opacity-0 transition-opacity ease-in
                    group-hover:opacity-100 group-hover:duration-700"
          >
            Connect
          </span>
        </a>
      }
    />,
  ];

  const filterCards = () => {
    return cardsButton.filter((card) => {
      const information = card.props.information;
      return filter === "All" || information === filter;
    });
  };

  const paginatedCards = () => {
    const filteredCards = filterCards();
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredCards.slice(startIndex, endIndex);
  };

  const totalPages = Math.ceil(filterCards().length / itemsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <div className="mb-4 space-x-2 flex items-center">
        <p className="text-slate-50">Filter by:</p>
        <button
          onClick={() => setFilter("All")}
          className={cn(
            "text-slate-50 px-2 py-1 text-sm rounded",
            filter === "All" && "bg-blue-700/30"
          )}
        >
          All
        </button>
        <button
          onClick={() => setFilter("Css")}
          className={cn(
            "text-slate-50 px-2 py-1 text-sm rounded",
            filter === "Css" && "bg-blue-700/30"
          )}
        >
          CSS
        </button>
        <button
          onClick={() => setFilter("Tailwind")}
          className={cn(
            "text-slate-50 px-2 py-1 text-sm rounded",
            filter === "Tailwind" && "bg-blue-700/30"
          )}
        >
          Tailwind
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1">
        {paginatedCards()}
      </div>
      <Pagination className="mt-8">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href="#"
              onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
            />
          </PaginationItem>
          {[...Array(totalPages)].map((_, index) => (
            <PaginationItem
              key={`${crypto.getRandomValues(new Uint32Array(1))}_${index}`}
            >
              <PaginationLink
                href="#"
                onClick={() => handlePageChange(index + 1)}
                className={cn(
                  "text-white",
                  currentPage === index + 1 && "bg-blue-700/30"
                )}
              >
                {index + 1}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationNext
              href="#"
              onClick={() =>
                handlePageChange(Math.min(totalPages, currentPage + 1))
              }
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default CardsButton;
