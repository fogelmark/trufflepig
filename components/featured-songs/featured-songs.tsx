/* eslint-disable */

import { StreamAmount } from "./stream-amount/stream-amount"
import { SongCard } from "./song-card/song-card"
import { SongCardRedo } from "./song-card/song-card-redo"
import Image from "next/image"
import lost_frequencies from "@/public/images/lost_frequencies_1.jpg"
import lost_frequencies_2 from "@/public/images/lost_frequencies_2.png"
import lost_frequencies_3 from "@/public/images/lost_frequencies_3.jpg"
import purple_disco from "@/public/images/purple_disco_1.webp"
import felix_jaehn from "@/public/images/felix_jaehn_1.jpg"
import loreen from "@/public/images/loreen_1.jpg"
import leon from "@/public/images/leon_1.jpg"
import jonas_blue from "@/public/images/jonas_blue_1.jpg"
import jonas_blue_2 from "@/public/images/jonas_blue_2.jpg"
import vola_tila from "@/public/images/vola_tila_1.jpeg"
import medina from "@/public/images/medina_1.jpg"
import miriam_bryant from "@/public/images/miriam_bryant_1.jpg"
import skott from "@/public/images/skott_1.jpg"
import molly_sanden from "@/public/images/molly_sanden_1.jpg"
import Spotify from "@/public/svg/spotify.svg"

export default function FeaturedSongs() {
  return (
    <>
      {/* <div className="relative mx-auto mb-12 min-h-screen w-[80%] bg-white">
      <div className="grid grid-flow-row grid-cols-5 gap-x-2 gap-y-16">
        <SongCard />
      </div>
    </div> */}
      <div className="relative mx-auto mb-12 min-h-screen w-full bg-white px-10">
        <h2 className="text-6xl text-black">Songs</h2>
        <div className="grid grid-flow-row grid-cols-3 gap-x-6 gap-y-12 px-2 py-4">
          {/* <SongCardRedo /> */}
          <div className="group grid h-fit">
            <div className="relative cursor-pointer">
              <Image
                src={lost_frequencies_3}
                alt="Cover"
                loading="lazy"
                quality={100}
                sizes="100vw"
                draggable={false}
                className="rounded-sm object-contain transition-all duration-500 ease-in-out"
              />
              <div className="absolute inset-0 flex flex-col items-start justify-end bg-gradient-to-b from-[rgba(0,0,0,0.1)] from-40% to-[rgba(0,0,0,0.9)] p-2">
                <p className="text-2xl font-medium text-white">
                  Lost Frequencies
                </p>
              </div>
            </div>
            <div className="hidden group-hover:grid">
              <div className="cols-2 grid grid-rows-2 border-b py-2">
                <p className="font-semibold">Where Are You Now</p>
                <p className="row-start-2 text-sm text-gray-500">
                  Lost Frequencies, Calum Scott
                </p>
                <a
                  href="https://open.spotify.com/track/3uUuGVFu1V7jTQL60S1r8z?si=63e55726e47f4114"
                  target="_blank"
                  className="col-start-2 row-span-2 self-center justify-self-end"
                >
                  <button className="border-2 border-black bg-black px-6 py-1 text-xs uppercase text-white">
                    listen
                  </button>
                </a>
              </div>
              <div className="cols-2 grid grid-rows-2 border-b py-2">
                <p className="font-semibold uppercase">Back To You</p>
                <p className="row-start-2 text-sm">
                  Lost Frequencies, Elley Duhé, X Ambassadors
                </p>
                <a
                  href="https://open.spotify.com/track/4PdSICTVRI1xrXZM1sOSCe?si=5b5055a9f510447f"
                  target="_blank"
                  className="col-start-2 row-span-2 self-center justify-self-end"
                >
                  <button className="rounded-2xl border-2 border-black px-4 py-1 text-xs uppercase">
                    listen
                  </button>
                </a>
              </div>
              <div className="cols-2 grid grid-rows-2 border-b py-2">
                <p className="font-semibold">The Feeling</p>
                <p className="row-start-2 text-sm">Lost Frequencies</p>
                <a
                  href="https://open.spotify.com/track/25jTLospI6eYVZ5TDDQN7V?si=46d9275cb9014080"
                  target="_blank"
                  className="col-start-2 row-span-2 self-center justify-self-end"
                >
                  <Spotify aria-label="Spotify" />
                </a>
              </div>
            </div>
          </div>
          <div className="grid h-fit">
            <div className="group relative cursor-pointer">
              <Image
                src={purple_disco}
                alt="Cover"
                loading="lazy"
                quality={100}
                sizes="100vw"
                draggable={false}
                className="rounded-sm object-contain transition-all duration-500 ease-in-out"
              />
              {/* <div className="absolute inset-0 flex flex-col items-end justify-end bg-[rgba(0,0,0,0.9)] p-2 opacity-0 transition-opacity duration-100 ease-in-out group-hover:opacity-80"> */}
              <div className="absolute inset-0 flex flex-col items-start justify-end bg-gradient-to-b from-[rgba(0,0,0,0.1)] from-40% to-[rgba(0,0,0,0.9)] p-2">
                {/* <p className="text-sm text-white opacity-0 transition-opacity duration-100 ease-in-out group-hover:opacity-70">
                  SONG
                </p> */}
                {/* <p className="text-lg text-white opacity-0 transition-opacity duration-100 ease-in-out group-hover:opacity-100"> */}
                <p className="text-2xl font-medium text-white">
                  Purple Disco Machine
                </p>
              </div>
            </div>
            <div className="cols-2 grid grid-rows-2 border-b py-2">
              <p className="font-semibold">Substitution</p>
              <p className="row-start-2 text-sm">
                Purple Disco Machine, Julian Perretta
              </p>
              <a
                href="https://open.spotify.com/track/3uUuGVFu1V7jTQL60S1r8z?si=63e55726e47f4114"
                target="_blank"
                className="col-start-2 row-span-2 self-center justify-self-end"
              >
                <Spotify aria-label="Spotify" />
              </a>
            </div>
            <div className="cols-2 grid grid-rows-2 border-b py-2">
              <p className="font-semibold">All My Life</p>
              <p className="row-start-2 text-sm">
                Purple Disco Machine, The Magician
              </p>
              <a
                href="https://open.spotify.com/track/4PdSICTVRI1xrXZM1sOSCe?si=5b5055a9f510447f"
                target="_blank"
                className="col-start-2 row-span-2 self-center justify-self-end"
              >
                <Spotify aria-label="Spotify" />
              </a>
            </div>
          </div>
          <div className="relative aspect-square">
            <Image
              src={felix_jaehn}
              alt="Cover"
              loading="lazy"
              quality={100}
              sizes="100vw"
              draggable={false}
              className="cursor-pointer rounded-sm object-contain transition-all duration-500 ease-in-out group-hover:scale-[1.03]"
            />
            <p className="text-2xl font-medium">Felix Jaehn</p>
          </div>
          <div className="relative aspect-square">
            <Image
              src={skott}
              alt="Cover"
              loading="lazy"
              quality={100}
              sizes="100vw"
              draggable={false}
              className="cursor-pointer rounded-sm object-contain transition-all duration-500 ease-in-out group-hover:scale-[1.03]"
            />
            <p className="text-2xl font-medium">Skott</p>
          </div>
          <div className="relative aspect-square">
            <Image
              src={loreen}
              alt="Cover"
              loading="lazy"
              quality={100}
              sizes="100vw"
              draggable={false}
              className="cursor-pointer rounded-sm object-contain transition-all duration-500 ease-in-out group-hover:scale-[1.03]"
            />
            <p className="text-2xl font-medium">Loreen</p>
          </div>
          <div className="relative aspect-square">
            <Image
              src={leon}
              alt="Cover"
              loading="lazy"
              quality={100}
              sizes="100vw"
              draggable={false}
              className="cursor-pointer rounded-sm object-contain transition-all duration-500 ease-in-out group-hover:scale-[1.03]"
            />
            <p className="text-2xl font-medium">LÉON</p>
          </div>
          <div className="relative aspect-square">
            <Image
              src={vola_tila}
              alt="Cover"
              loading="lazy"
              quality={100}
              sizes="100vw"
              draggable={false}
              className="cursor-pointer rounded-sm object-contain transition-all duration-500 ease-in-out group-hover:scale-[1.03]"
            />
            <p className="text-2xl font-medium">Vola Tila</p>
          </div>
          <div className="relative aspect-square">
            <Image
              src={medina}
              alt="Cover"
              loading="lazy"
              quality={100}
              sizes="100vw"
              draggable={false}
              className="cursor-pointer rounded-sm object-contain transition-all duration-500 ease-in-out group-hover:scale-[1.03]"
            />
            <p className="text-2xl font-medium">Medina</p>
          </div>
          <div className="relative aspect-square">
            <Image
              src={miriam_bryant}
              alt="Cover"
              loading="lazy"
              quality={100}
              sizes="100vw"
              draggable={false}
              className="cursor-pointer rounded-sm object-contain transition-all duration-500 ease-in-out group-hover:scale-[1.03]"
            />
            <p className="text-2xl font-medium">Miriam Bryant</p>
          </div>
          <div className="relative aspect-square">
            <Image
              src={jonas_blue_2}
              alt="Cover"
              loading="lazy"
              quality={100}
              sizes="100vw"
              draggable={false}
              className="cursor-pointer rounded-sm object-contain transition-all duration-500 ease-in-out group-hover:scale-[1.03]"
            />
            <p className="text-2xl font-medium">Jonas Blue</p>
          </div>
          <div className="relative aspect-square">
            <Image
              src={molly_sanden}
              alt="Cover"
              loading="lazy"
              quality={100}
              sizes="100vw"
              draggable={false}
              className="cursor-pointer rounded-sm object-contain transition-all duration-500 ease-in-out group-hover:scale-[1.03]"
            />
            <p className="text-2xl font-medium">Molly Sandén</p>
          </div>
        </div>
      </div>
    </>
  )
}
