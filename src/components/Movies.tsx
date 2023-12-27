import React, { useEffect, useState } from 'react'
import movieService from '../services/movie-service.ts';
import ResponsiveAppBar from './ResponsiveAppBar.tsx';
import Banner from './Banner.tsx';
import { Spinner } from 'react-activity';

function Movies() {

  useEffect(()=>{getList()},[]);
  const [movies, setMovies] = useState([])
  const getList = async() =>{
    let res = {
      movies: [
          {
              "_id": 2734,
              "backdrop_path": "https://image.tmdb.org/t/p/original/9xxLWtnFxkpJ2h1uthpvCRK6vta.jpg",
              "first_aired": "1999-09-20",
              "genres": [
                  "Crime",
                  "Drama",
                  "Mystery"
              ],
              "original_title": "Law & Order: Special Victims Unit",
              "overview": "In the criminal justice system, sexually-based offenses are considered especially heinous. In New York City, the dedicated detectives who investigate these vicious felonies are members of an elite squad known as the Special Victims Unit. These are their stories.",
              "poster_path": "https://image.tmdb.org/t/p/original/ywBt4WKADdMVgxTR1rS2uFwMYTH.jpg",
              "title": "Law & Order: Special Victims Unit",
              "contentType": "show"
          },
          {
              "_id": 456,
              "backdrop_path": "https://image.tmdb.org/t/p/original/uNyEVSPeAtJgUBehuQJ8WEFwatN.jpg",
              "first_aired": "1989-12-17",
              "genres": [
                  "Family",
                  "Animation",
                  "Comedy"
              ],
              "original_title": "The Simpsons",
              "overview": "Set in Springfield, the average American town, the show focuses on the antics and everyday adventures of the Simpson family; Homer, Marge, Bart, Lisa and Maggie, as well as a virtual cast of thousands. Since the beginning, the series has been a pop culture icon, attracting hundreds of celebrities to guest star. The show has also made name for itself in its fearless satirical take on politics, media and American life in general.",
              "poster_path": "https://image.tmdb.org/t/p/original/zI3E2a3WYma5w8emI35mgq5Iurx.jpg",
              "title": "The Simpsons",
              "contentType": "show"
          },
          {
              "_id": 100088,
              "backdrop_path": "https://image.tmdb.org/t/p/original/z7z6zTfEeasEov6Y2ezVOxW5tsb.jpg",
              "first_aired": "2023-01-15",
              "genres": [
                  "Drama"
              ],
              "original_title": "The Last of Us",
              "overview": "Twenty years after modern civilization has been destroyed, Joel, a hardened survivor, is hired to smuggle Ellie, a 14-year-old girl, out of an oppressive quarantine zone. What starts as a small job soon becomes a brutal, heartbreaking journey, as they both must traverse the United States and depend on each other for survival.",
              "poster_path": "https://image.tmdb.org/t/p/original/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg",
              "title": "The Last of Us",
              "contentType": "show"
          },
          {
              "_id": 125988,
              "backdrop_path": "https://image.tmdb.org/t/p/original/n5FPNMJ0eRoiQrKGfUQQRAZeaxg.jpg",
              "first_aired": "2023-05-04",
              "genres": [
                  "Sci-Fi & Fantasy",
                  "Drama"
              ],
              "original_title": "Silo",
              "overview": "In a ruined and toxic future, a community exists in a giant underground silo that plunges hundreds of stories deep. There, men and women live in a society full of regulations they believe are meant to protect them.",
              "poster_path": "https://image.tmdb.org/t/p/original/1NxaSn4ver4jIvLeD7YF8cTlZjB.jpg",
              "title": "Silo",
              "contentType": "show"
          },
          {
              "_id": 1416,
              "backdrop_path": "https://image.tmdb.org/t/p/original/caGVr9Il2gj8bN4ow6qsLm60TxM.jpg",
              "first_aired": "2005-03-27",
              "genres": [
                  "Drama"
              ],
              "original_title": "Grey's Anatomy",
              "overview": "Follows the personal and professional lives of a group of doctors at Seattle’s Grey Sloan Memorial Hospital.",
              "poster_path": "https://image.tmdb.org/t/p/original/daSFbrt8QCXV2hSwB0hqYjbj681.jpg",
              "title": "Grey's Anatomy",
              "contentType": "show"
          },
          {
              "_id": 4614,
              "backdrop_path": "https://image.tmdb.org/t/p/original/5rnL7gIZQvYEKSFTxehqnGcG88u.jpg",
              "first_aired": "2003-09-23",
              "genres": [
                  "Crime",
                  "Drama",
                  "Action & Adventure"
              ],
              "original_title": "NCIS",
              "overview": "From murder and espionage to terrorism and stolen submarines, a team of special agents investigates any crime that has a shred of evidence connected to Navy and Marine Corps personnel, regardless of rank or position.",
              "poster_path": "https://image.tmdb.org/t/p/original/2exOHePjOTquUsbThPGhuEjYTyA.jpg",
              "title": "NCIS",
              "contentType": "show"
          },
          {
              "_id": 60735,
              "backdrop_path": "https://image.tmdb.org/t/p/original/gFkHcIh7iE5G0oVOgpmY8ONQjhl.jpg",
              "first_aired": "2014-10-07",
              "genres": [
                  "Drama",
                  "Sci-Fi & Fantasy"
              ],
              "original_title": "The Flash",
              "overview": "After a particle accelerator causes a freak storm, CSI Investigator Barry Allen is struck by lightning and falls into a coma. Months later he awakens with the power of super speed, granting him the ability to move through Central City like an unseen guardian angel. Though initially excited by his newfound powers, Barry is shocked to discover he is not the only \"meta-human\" who was created in the wake of the accelerator explosion -- and not everyone is using their new powers for good. Barry partners with S.T.A.R. Labs and dedicates his life to protect the innocent. For now, only a few close friends and associates know that Barry is literally the fastest man alive, but it won't be long before the world learns what Barry Allen has become...The Flash.",
              "poster_path": "https://image.tmdb.org/t/p/original/rg8N7x27Ef6PvlIiioLStf9ZaIO.jpg",
              "title": "The Flash",
              "contentType": "show"
          },
          {
              "_id": 46952,
              "backdrop_path": "https://image.tmdb.org/t/p/original/dDPwCyZG8arYwMDoQl0sm4xccCE.jpg",
              "first_aired": "2013-09-23",
              "genres": [
                  "Drama",
                  "Crime",
                  "Mystery"
              ],
              "original_title": "The Blacklist",
              "overview": "Raymond \"Red\" Reddington, one of the FBI's most wanted fugitives, surrenders in person at FBI Headquarters in Washington, D.C. He claims that he and the FBI have the same interests: bringing down dangerous criminals and terrorists. In the last two decades, he's made a list of criminals and terrorists that matter the most but the FBI cannot find because it does not know they exist. Reddington calls this \"The Blacklist\". Reddington will co-operate, but insists that he will speak only to Elizabeth Keen, a rookie FBI profiler.",
              "poster_path": "https://image.tmdb.org/t/p/original/htJzeRcYI2ewMm4PTrg98UMXShe.jpg",
              "title": "The Blacklist",
              "contentType": "show"
          },
          {
              "_id": 1434,
              "backdrop_path": "https://image.tmdb.org/t/p/original/jbTqU6BJMufoMnPSlO4ThrcXs3Y.jpg",
              "first_aired": "1999-01-31",
              "genres": [
                  "Animation",
                  "Comedy"
              ],
              "original_title": "Family Guy",
              "overview": "Sick, twisted, politically incorrect and Freakin' Sweet animated series featuring the adventures of the dysfunctional Griffin family. Bumbling Peter and long-suffering Lois have three kids. Stewie (a brilliant but sadistic baby bent on killing his mother and taking over the world), Meg (the oldest, and is the most unpopular girl in town) and Chris (the middle kid, he's not very bright but has a passion for movies). The final member of the family is Brian - a talking dog and much more than a pet, he keeps Stewie in check whilst sipping Martinis and sorting through his own life issues.",
              "poster_path": "https://image.tmdb.org/t/p/original/aLB7psB9N81n5GecHNOudXWW3AI.jpg",
              "title": "Family Guy",
              "contentType": "show"
          },
          {
              "_id": 1622,
              "backdrop_path": "https://image.tmdb.org/t/p/original/nVRyd8hlg0ZLxBn9RaI7mUMQLnz.jpg",
              "first_aired": "2005-09-13",
              "genres": [
                  "Drama",
                  "Mystery",
                  "Sci-Fi & Fantasy"
              ],
              "original_title": "Supernatural",
              "overview": "When they were boys, Sam and Dean Winchester lost their mother to a mysterious and demonic supernatural force. Subsequently, their father raised them to be soldiers. He taught them about the paranormal evil that lives in the dark corners and on the back roads of America ... and he taught them how to kill it. Now, the Winchester brothers crisscross the country in their '67 Chevy Impala, battling every kind of supernatural threat they encounter along the way. ",
              "poster_path": "https://image.tmdb.org/t/p/original/KoYWXbnYuS3b0GyQPkbuexlVK9.jpg",
              "title": "Supernatural",
              "contentType": "show"
          },
          {
              "_id": 63174,
              "backdrop_path": "https://image.tmdb.org/t/p/original/xZUZ9i6vVayjyhR1vRo9Bjku4h.jpg",
              "first_aired": "2016-01-25",
              "genres": [
                  "Crime",
                  "Sci-Fi & Fantasy"
              ],
              "original_title": "Lucifer",
              "overview": "Bored and unhappy as the Lord of Hell, Lucifer Morningstar abandoned his throne and retired to Los Angeles, where he has teamed up with LAPD detective Chloe Decker to take down criminals. But the longer he's away from the underworld, the greater the threat that the worst of humanity could escape.",
              "poster_path": "https://image.tmdb.org/t/p/original/ekZobS8isE6mA53RAiGDG93hBxL.jpg",
              "title": "Lucifer",
              "contentType": "show"
          },
          {
              "_id": 196454,
              "backdrop_path": "https://image.tmdb.org/t/p/original/dkKEpUCjGEFH5q3GcAGaWG3o2N2.jpg",
              "first_aired": "2023-05-04",
              "genres": [
                  "Drama"
              ],
              "original_title": "Queen Charlotte: A Bridgerton Story",
              "overview": "The story of how the young Queen Charlotte’s marriage to King George sparked both a great love story and a societal shift, creating the world of the Ton inherited by the characters in Bridgerton.",
              "poster_path": "https://image.tmdb.org/t/p/original/eR7btjpvOugivUYSoEsD2iAOYsJ.jpg",
              "title": "Queen Charlotte: A Bridgerton Story",
              "contentType": "show"
          },
          {
              "_id": 71728,
              "backdrop_path": "https://image.tmdb.org/t/p/original/fXRgyxFxT3SG45fDqUODDRNE9IJ.jpg",
              "first_aired": "2017-09-25",
              "genres": [
                  "Comedy",
                  "Family"
              ],
              "original_title": "Young Sheldon",
              "overview": "The early life of child genius Sheldon Cooper, later seen in The Big Bang Theory.",
              "poster_path": "https://image.tmdb.org/t/p/original/MpdROQ5XxQqOMKhJlLUf7PTxIC.jpg",
              "title": "Young Sheldon",
              "contentType": "show"
          },
          {
              "_id": 82856,
              "backdrop_path": "https://image.tmdb.org/t/p/original/6Lw54zxm6BAEKJeGlabyzzR5Juu.jpg",
              "first_aired": "2019-11-12",
              "genres": [
                  "Sci-Fi & Fantasy",
                  "Action & Adventure",
                  "Drama"
              ],
              "original_title": "The Mandalorian",
              "overview": "After the fall of the Galactic Empire, lawlessness has spread throughout the galaxy. A lone gunfighter makes his way through the outer reaches, earning his keep as a bounty hunter.",
              "poster_path": "https://image.tmdb.org/t/p/original/eU1i6eHXlzMOlEq0ku1Rzq7Y4wA.jpg",
              "title": "The Mandalorian",
              "contentType": "show"
          },
          {
              "_id": 153312,
              "backdrop_path": "https://image.tmdb.org/t/p/original/mNHRGO1gFpR2CYZdANe72kcKq7G.jpg",
              "first_aired": "2022-11-13",
              "genres": [
                  "Crime",
                  "Drama"
              ],
              "original_title": "Tulsa King",
              "overview": "Just after he is released from prison after 25 years, New York mafia capo Dwight “The General” Manfredi is unceremoniously exiled by his boss to set up shop in Tulsa, Okla. Realizing that his mob family may not have his best interests in mind, Dwight slowly builds a “crew” from a group of unlikely characters, to help him establish a new criminal empire in a place that to him might as well be another planet.",
              "poster_path": "https://image.tmdb.org/t/p/original/fwTv3RPRAIy0maOMns5eYRRwnDk.jpg",
              "title": "Tulsa King",
              "contentType": "show"
          },
          {
              "_id": 119051,
              "backdrop_path": "https://image.tmdb.org/t/p/original/iHSwvRVsRyxpX7FE7GbviaDvgGZ.jpg",
              "first_aired": "2022-11-23",
              "genres": [
                  "Sci-Fi & Fantasy",
                  "Mystery",
                  "Comedy"
              ],
              "original_title": "Wednesday",
              "overview": "Wednesday Addams is sent to Nevermore Academy, a bizarre boarding school where she attempts to master her psychic powers, stop a monstrous killing spree of the town citizens, and solve the supernatural mystery that affected her family 25 years ago — all while navigating her new relationships.",
              "poster_path": "https://image.tmdb.org/t/p/original/9PFonBhy4cQy7Jz20NpMygczOkv.jpg",
              "title": "Wednesday",
              "contentType": "show"
          },
          {
              "_id": 65334,
              "backdrop_path": "https://image.tmdb.org/t/p/original/ogMd4e3A0uSNwZADzgC23zCByoi.jpg",
              "first_aired": "2015-10-19",
              "genres": [
                  "Action & Adventure",
                  "Animation",
                  "Family"
              ],
              "original_title": "Miraculous, les aventures de Ladybug et Chat Noir",
              "overview": "Normal high school kids by day, protectors of Paris by night! Miraculous follows the heroic adventures of Marinette and Adrien as they transform into Ladybug and Cat Noir and set out to capture akumas, creatures responsible for turning the people of Paris into villains. But neither hero knows the other’s true identity – or that they’re classmates!",
              "poster_path": "https://image.tmdb.org/t/p/original/psDcRgUX38cIeGeADwLRPyO7SYC.jpg",
              "title": "Miraculous: Tales of Ladybug & Cat Noir",
              "contentType": "show"
          },
          {
              "_id": 223313,
              "backdrop_path": "https://image.tmdb.org/t/p/original/dpaaxgmIe0cCId6CVIAOfNqkYm4.jpg",
              "first_aired": "2023-04-13",
              "genres": [
                  "Drama",
                  "Mystery"
              ],
              "original_title": "Obsession",
              "overview": "A respected London surgeon's affair with his son's fiancée turns into an erotic infatuation that threatens to change their lives forever.",
              "poster_path": "https://image.tmdb.org/t/p/original/8nQmxCYvidrCMxYCPdhuls94cl9.jpg",
              "title": "Obsession",
              "contentType": "show"
          },
          {
              "_id": 71712,
              "backdrop_path": "https://image.tmdb.org/t/p/original/xXRsKNJHTOGrs5wfYAxkbM2RiyT.jpg",
              "first_aired": "2017-09-25",
              "genres": [
                  "Drama"
              ],
              "original_title": "The Good Doctor",
              "overview": "Shaun Murphy, a young surgeon with autism and savant syndrome, relocates from a quiet country life to join a prestigious hospital's surgical unit. Unable to personally connect with those around him, Shaun uses his extraordinary medical gifts to save lives and challenge the skepticism of his colleagues.",
              "poster_path": "https://image.tmdb.org/t/p/original/luhKkdD80qe62fwop6sdrXK9jUT.jpg",
              "title": "The Good Doctor",
              "contentType": "show"
          },
          {
              "_id": 63333,
              "backdrop_path": "https://image.tmdb.org/t/p/original/uCqXSfHymdbDMsFx8t0u0OPSuve.jpg",
              "first_aired": "2015-10-10",
              "genres": [
                  "Action & Adventure",
                  "Drama",
                  "War"
              ],
              "original_title": "The Last Kingdom",
              "overview": "A show of heroic deeds and epic battles with a thematic depth that embraces politics, religion, warfare, courage, love, loyalty and our universal search for identity. Combining real historical figures and events with fictional characters, it is the story of how a people combined their strength under one of the most iconic kings of history in order to reclaim their land for themselves and build a place they call home.",
              "poster_path": "https://image.tmdb.org/t/p/original/8eJf0hxgIhE6QSxbtuNCekTddy1.jpg",
              "title": "The Last Kingdom",
              "contentType": "show"
          },
          {
              "_id": 44217,
              "backdrop_path": "https://image.tmdb.org/t/p/original/lHe8iwM4Cdm6RSEiara4PN8ZcBd.jpg",
              "first_aired": "2013-03-03",
              "genres": [
                  "Action & Adventure",
                  "Drama",
                  "War"
              ],
              "original_title": "Vikings",
              "overview": "The adventures of Ragnar Lothbrok, the greatest hero of his age. The series tells the sagas of Ragnar's band of Viking brothers and his family, as he rises to become King of the Viking tribes. As well as being a fearless warrior, Ragnar embodies the Norse traditions of devotion to the gods. Legend has it that he was a direct descendant of Odin, the god of war and warriors.",
              "poster_path": "https://image.tmdb.org/t/p/original/bQLrHIRNEkE3PdIWQrZHynQZazu.jpg",
              "title": "Vikings",
              "contentType": "show"
          },
          {
              "_id": 34307,
              "backdrop_path": "https://image.tmdb.org/t/p/original/5s9XHTB9SLPdg3mNU6BlSLnZ9Qq.jpg",
              "first_aired": "2011-01-09",
              "genres": [
                  "Drama",
                  "Comedy"
              ],
              "original_title": "Shameless",
              "overview": "Chicagoan Frank Gallagher is the proud single dad of six smart, industrious, independent kids, who without him would be... perhaps better off. When Frank's not at the bar spending what little money they have, he's passed out on the floor. But the kids have found ways to grow up in spite of him. They may not be like any family you know, but they make no apologies for being exactly who they are.",
              "poster_path": "https://image.tmdb.org/t/p/original/9akij7PqZ1g6zl42DQQTtL9CTSb.jpg",
              "title": "Shameless",
              "contentType": "show"
          },
          {
              "_id": 1431,
              "backdrop_path": "https://image.tmdb.org/t/p/original/cvlLBcQWpO9X21jDHhgPJnE2aVq.jpg",
              "first_aired": "2000-10-06",
              "genres": [
                  "Crime",
                  "Drama",
                  "Mystery"
              ],
              "original_title": "CSI: Crime Scene Investigation",
              "overview": "A Las Vegas team of forensic investigators are trained to solve criminal cases by scouring the crime scene, collecting irrefutable evidence and finding the missing pieces that solve the mystery.",
              "poster_path": "https://image.tmdb.org/t/p/original/9XecVOLLkbGBNnpF2PvP8vQBmww.jpg",
              "title": "CSI: Crime Scene Investigation",
              "contentType": "show"
          },
          {
              "_id": 1400,
              "backdrop_path": "https://image.tmdb.org/t/p/original/tMRdEsMg9MyXAkcufK9YJEeIaNW.jpg",
              "first_aired": "1989-07-05",
              "genres": [
                  "Comedy"
              ],
              "original_title": "Seinfeld",
              "overview": "A stand-up comedian and his three offbeat friends weather the pitfalls and payoffs of life in New York City in the '90s. It's a show about nothing.",
              "poster_path": "https://image.tmdb.org/t/p/original/aCw8ONfyz3AhngVQa1E2Ss4KSUQ.jpg",
              "title": "Seinfeld",
              "contentType": "show"
          },
          {
              "_id": 44006,
              "backdrop_path": "https://image.tmdb.org/t/p/original/a1axm2xRYGB35X406AMI51IrhYp.jpg",
              "first_aired": "2012-10-10",
              "genres": [
                  "Drama"
              ],
              "original_title": "Chicago Fire",
              "overview": "An edge-of-your-seat view into the lives of everyday heroes committed to one of America's noblest professions. For the firefighters, rescue squad and paramedics of Chicago Firehouse 51, no occupation is more stressful or dangerous, yet so rewarding and exhilarating. These courageous men and women are among the elite who forge headfirst into danger when everyone else is running the other way and whose actions make the difference between life and death.",
              "poster_path": "https://image.tmdb.org/t/p/original/iiI1YU8akLYWdWuX1qHuMYPvSHC.jpg",
              "title": "Chicago Fire",
              "contentType": "show"
          },
          {
              "_id": 37680,
              "backdrop_path": "https://image.tmdb.org/t/p/original/or0E36KfzJYZwqXeiCfm1JgepKF.jpg",
              "first_aired": "2011-06-23",
              "genres": [
                  "Drama"
              ],
              "original_title": "Suits",
              "overview": "While running from a drug deal gone bad, Mike Ross, a brilliant young college-dropout, slips into a job interview with one of New York City's best legal closers, Harvey Specter. Tired of cookie-cutter law school grads, Harvey takes a gamble by hiring Mike on the spot after he recognizes his raw talent and photographic memory.",
              "poster_path": "https://image.tmdb.org/t/p/original/vQiryp6LioFxQThywxbC6TuoDjy.jpg",
              "title": "Suits",
              "contentType": "show"
          },
          {
              "_id": 1399,
              "backdrop_path": "https://image.tmdb.org/t/p/original/2OMB0ynKlyIenMJWI2Dy9IWT4c.jpg",
              "first_aired": "2011-04-17",
              "genres": [
                  "Sci-Fi & Fantasy",
                  "Drama",
                  "Action & Adventure"
              ],
              "original_title": "Game of Thrones",
              "overview": "Seven noble families fight for control of the mythical land of Westeros. Friction between the houses leads to full-scale war. All while a very ancient evil awakens in the farthest north. Amidst the war, a neglected military order of misfits, the Night's Watch, is all that stands between the realms of men and icy horrors beyond.",
              "poster_path": "https://image.tmdb.org/t/p/original/7WUHnWGx5OO145IRxPDUkQSh4C7.jpg",
              "title": "Game of Thrones",
              "contentType": "show"
          },
          {
              "_id": 4057,
              "backdrop_path": "https://image.tmdb.org/t/p/original/65Y6PweSvQ1OOFBzStybjipURRP.jpg",
              "first_aired": "2005-09-22",
              "genres": [
                  "Crime",
                  "Drama",
                  "Mystery"
              ],
              "original_title": "Criminal Minds",
              "overview": "An elite team of FBI profilers analyze the country's most twisted criminal minds, anticipating their next moves before they strike again. The Behavioral Analysis Unit's most experienced agent is David Rossi, a founding member of the BAU who returns to help the team solve new cases.",
              "poster_path": "https://image.tmdb.org/t/p/original/7TCwgX7oQKxcWYEhSPRmaHe6ULN.jpg",
              "title": "Criminal Minds",
              "contentType": "show"
          },
          {
              "_id": 97951,
              "backdrop_path": "https://image.tmdb.org/t/p/original/gQxaF79LUTtopdYHsuS8lUr9rvF.jpg",
              "first_aired": "2021-11-14",
              "genres": [
                  "Drama",
                  "Crime"
              ],
              "original_title": "Mayor of Kingstown",
              "overview": "In a small Michigan town where the business of incarceration is the only thriving industry, the McClusky family are the power brokers between the police, criminals, inmates, prison guards and politicians in a city completely dependent on prisons and the prisoners they contain.",
              "poster_path": "https://image.tmdb.org/t/p/original/86OUOPulMiM8rjrQSt4KMev7UAa.jpg",
              "title": "Mayor of Kingstown",
              "contentType": "show"
          },
          {
              "_id": 60574,
              "backdrop_path": "https://image.tmdb.org/t/p/original/wiE9doxiLwq3WCGamDIOb2PqBqc.jpg",
              "first_aired": "2013-09-12",
              "genres": [
                  "Drama",
                  "Crime"
              ],
              "original_title": "Peaky Blinders",
              "overview": "A gangster family epic set in 1919 Birmingham, England and centered on a gang who sew razor blades in the peaks of their caps, and their fierce boss Tommy Shelby, who means to move up in the world.",
              "poster_path": "https://image.tmdb.org/t/p/original/vUUqzWa2LnHIVqkaKVlVGkVcZIW.jpg",
              "title": "Peaky Blinders",
              "contentType": "show"
          },
          {
              "_id": 73586,
              "backdrop_path": "https://image.tmdb.org/t/p/original/2Erj4Oav9EHAtqLI354VM7ULDqu.jpg",
              "first_aired": "2018-06-20",
              "genres": [
                  "Western",
                  "Drama"
              ],
              "original_title": "Yellowstone",
              "overview": "Follow the violent world of the Dutton family, who controls the largest contiguous ranch in the United States. Led by their patriarch John Dutton, the family defends their property against constant attack by land developers, an Indian reservation, and America’s first National Park.",
              "poster_path": "https://image.tmdb.org/t/p/original/peNC0eyc3TQJa6x4TdKcBPNP4t0.jpg",
              "title": "Yellowstone",
              "contentType": "show"
          },
          {
              "_id": 1911,
              "backdrop_path": "https://image.tmdb.org/t/p/original/e9n87p3Ax67spq3eUgLB6rjIEow.jpg",
              "first_aired": "2005-09-13",
              "genres": [
                  "Crime",
                  "Drama"
              ],
              "original_title": "Bones",
              "overview": "Dr. Temperance Brennan and her colleagues at the Jeffersonian's Medico-Legal Lab assist Special Agent Seeley Booth with murder investigations when the remains are so badly decomposed, burned or destroyed that the standard identification methods are useless.",
              "poster_path": "https://image.tmdb.org/t/p/original/eyTu5c8LniVciRZIOSHTvvkkgJa.jpg",
              "title": "Bones",
              "contentType": "show"
          },
          {
              "_id": 32692,
              "backdrop_path": "https://image.tmdb.org/t/p/original/3a5k2ZuLMNhpMEZIq9hf3lCSOS.jpg",
              "first_aired": "2010-09-24",
              "genres": [
                  "Drama",
                  "Crime"
              ],
              "original_title": "Blue Bloods",
              "overview": "A drama about a multi-generational family of cops dedicated to New York City law enforcement. Frank Reagan is the New York Police Commissioner and heads both the police force and the Reagan brood. He runs his department as diplomatically as he runs his family, even when dealing with the politics that plagued his unapologetically bold father, Henry, during his stint as Chief.",
              "poster_path": "https://image.tmdb.org/t/p/original/ceqomvL0e1jGkJAPVWFlq2hGl7i.jpg",
              "title": "Blue Bloods",
              "contentType": "show"
          },
          {
              "_id": 57532,
              "backdrop_path": "https://image.tmdb.org/t/p/original/7OrV2aAH5Yp7hA9zCCvUloLvZtl.jpg",
              "first_aired": "2013-08-12",
              "genres": [
                  "Animation",
                  "Family"
              ],
              "original_title": "PAW Patrol",
              "overview": "PAW Patrol is a CG action-adventure for old children and preschool series starring a pack of six heroic puppies led by a tech-savvy 10-year-old boy named Ryder.",
              "poster_path": "https://image.tmdb.org/t/p/original/8HXkgUBO5OF8ZK9XbY69RM4S5rv.jpg",
              "title": "PAW Patrol",
              "contentType": "show"
          },
          {
              "_id": 549,
              "backdrop_path": "https://image.tmdb.org/t/p/original/oOce9hLMVFubjAJliau4kiSNPnW.jpg",
              "first_aired": "1990-09-13",
              "genres": [
                  "Crime",
                  "Drama"
              ],
              "original_title": "Law & Order",
              "overview": "In cases ripped from the headlines, police investigate serious and often deadly crimes, weighing the evidence and questioning the suspects until someone is taken into custody. The district attorney's office then builds a case to convict the perpetrator by proving the person guilty beyond a reasonable doubt. Working together, these expert teams navigate all sides of the complex criminal justice system to make New York a safer place.",
              "poster_path": "https://image.tmdb.org/t/p/original/77OPlbsvX3pzoFbyfpcE3GXMCod.jpg",
              "title": "Law & Order",
              "contentType": "show"
          },
          {
              "_id": 1408,
              "backdrop_path": "https://image.tmdb.org/t/p/original/r9t9lblyPfudl0LV0Ujg1nXdKyW.jpg",
              "first_aired": "2004-11-16",
              "genres": [
                  "Drama",
                  "Mystery"
              ],
              "original_title": "House",
              "overview": "Dr. Gregory House, a drug-addicted, unconventional, misanthropic medical genius, leads a team of diagnosticians at the fictional Princeton–Plainsboro Teaching Hospital in New Jersey.",
              "poster_path": "https://image.tmdb.org/t/p/original/5rIQ3pTjWdZjNUJSJxn1T8MIvoG.jpg",
              "title": "House",
              "contentType": "show"
          },
          {
              "_id": 1402,
              "backdrop_path": "https://image.tmdb.org/t/p/original/wvdWb5kTQipdMDqCclC6Y3zr4j3.jpg",
              "first_aired": "2010-10-31",
              "genres": [
                  "Action & Adventure",
                  "Drama",
                  "Sci-Fi & Fantasy"
              ],
              "original_title": "The Walking Dead",
              "overview": "Sheriff's deputy Rick Grimes awakens from a coma to find a post-apocalyptic world dominated by flesh-eating zombies. He sets out to find his family and encounters many other survivors along the way.",
              "poster_path": "https://image.tmdb.org/t/p/original/xf9wuDcqlUPWABZNeDKPbZUjWx0.jpg",
              "title": "The Walking Dead",
              "contentType": "show"
          },
          {
              "_id": 2691,
              "backdrop_path": "https://image.tmdb.org/t/p/original/5SQaNc5loVTrx1cDBnB72ewXLPp.jpg",
              "first_aired": "2003-09-22",
              "genres": [
                  "Comedy",
                  "Drama"
              ],
              "original_title": "Two and a Half Men",
              "overview": "A hedonistic jingle writer's free-wheeling life comes to an abrupt halt when his brother and 10-year-old nephew move into his beach-front house.",
              "poster_path": "https://image.tmdb.org/t/p/original/A9QDK4OWpv41W27kCv0LXe30k9S.jpg",
              "title": "Two and a Half Men",
              "contentType": "show"
          },
          {
              "_id": 12971,
              "backdrop_path": "https://image.tmdb.org/t/p/original/ydf1CeiBLfdxiyNTpskM0802TKl.jpg",
              "first_aired": "1989-04-26",
              "genres": [
                  "Animation",
                  "Sci-Fi & Fantasy",
                  "Action & Adventure"
              ],
              "original_title": "ドラゴンボールゼット",
              "overview": "The adventures of Earth's martial arts defender, Son Goku, continue with a new family and the revelation of his alien origins. Now Goku and his allies must defend the planet from an onslaught of new extraterrestrial enemies.",
              "poster_path": "https://image.tmdb.org/t/p/original/6VKOfL6ihwTiB5Vibq6QTfzhxA6.jpg",
              "title": "Dragon Ball Z",
              "contentType": "show"
          },
          {
              "_id": 1433,
              "backdrop_path": "https://image.tmdb.org/t/p/original/7xIQL3eyNmQjZTJjzlsmzRUjAEx.jpg",
              "first_aired": "2005-02-06",
              "genres": [
                  "Animation",
                  "Comedy"
              ],
              "original_title": "American Dad!",
              "overview": "The series focuses on an eccentric motley crew that is the Smith family and their three housemates: Father, husband, and breadwinner Stan Smith; his better half housewife, Francine Smith; their college-aged daughter, Hayley Smith; and their high-school-aged son, Steve Smith. Outside of the Smith family, there are three additional main characters, including Hayley's boyfriend turned husband, Jeff Fischer; the family's man-in-a-goldfish-body pet, Klaus; and most notably the family's zany alien, Roger, who is \"full of masquerades, brazenness, and shocking antics.\"",
              "poster_path": "https://image.tmdb.org/t/p/original/8bSEmNdnEBOCdKzCs3FKcSguUz.jpg",
              "title": "American Dad!",
              "contentType": "show"
          },
          {
              "_id": 60625,
              "backdrop_path": "https://image.tmdb.org/t/p/original/uGy4DCmM33I7l86W7iCskNkvmLD.jpg",
              "first_aired": "2013-12-02",
              "genres": [
                  "Animation",
                  "Comedy",
                  "Sci-Fi & Fantasy",
                  "Action & Adventure"
              ],
              "original_title": "Rick and Morty",
              "overview": "Rick is a mentally-unbalanced but scientifically gifted old man who has recently reconnected with his family. He spends most of his time involving his young grandson Morty in dangerous, outlandish adventures throughout space and alternate universes. Compounded with Morty's already unstable family life, these events cause Morty much distress at home and school.",
              "poster_path": "https://image.tmdb.org/t/p/original/cvhNj9eoRBe5SxjCbQTkh05UP5K.jpg",
              "title": "Rick and Morty",
              "contentType": "show"
          },
          {
              "_id": 59941,
              "backdrop_path": "https://image.tmdb.org/t/p/original/xl1wGwaPZInJo1JAnpKqnFozWBE.jpg",
              "first_aired": "2014-02-17",
              "genres": [
                  "Comedy",
                  "Talk"
              ],
              "original_title": "The Tonight Show Starring Jimmy Fallon",
              "overview": "After Jay Leno's second retirement from the program, Jimmy Fallon stepped in as his permanent replacement. After 42 years in Los Angeles the program was brought back to New York.",
              "poster_path": "https://image.tmdb.org/t/p/original/2ItOtzcGlBT39b3xYkmYi82pp9r.jpg",
              "title": "The Tonight Show Starring Jimmy Fallon",
              "contentType": "show"
          }
      ],
      page: 1
  }
    setMovies(res?.movies.slice(15,60));
    // const res = await movieService.getMovieTitles();
    // // const res = await movieService.getShowsTitles();
    // // const res = await movieService.getSearchTitles('game');
    // setMovies(res.movies);
    // console.log(res)
  }

  return (
    <div style={{  background: 'black', paddingBottom: 50  }}>
      <ResponsiveAppBar/>
      {movies.length>0 ? 
      <div>
        <Banner movies={movies} />
      <div style={{marginLeft:100, marginTop: 50}}>
        <div style={{
          color: '#FFF',
          fontFamily: 'Helvetica Neue',
          fontSize: '30px',
          fontWeight: 700,
        }}>
          Top Movies in India
        </div>
        <div style={{display:'flex',  gap:20, maxWidth: '90%', overflow: 'auto'}}>
            {movies.length>0 && movies.slice(0,10).map((film, index)=>{
              return <div style={{display:'flex', alignItems:'center'}} >
                <div
                  className='index'
                  style={{
                    color: '#000',
                    fontFamily: 'Roboto',
                    fontSize: 364,
                    fontStyle: 'normal',
                    fontWeight: 700,
                    marginRight: -60,
                  }}
                >{index+1}</div>
                <img src={film.poster_path} alt="" height={274} width={182} />
              </div>
            })}
        </div>
      </div>

      <div style={{marginLeft:100, marginTop: 50,}}>
        <div style={{
          color: '#FFF',
          fontFamily: 'Helvetica Neue',
          fontSize: '30px',
          fontWeight: 700,
        }}>
          New on Netflix
        </div>
        <div style={{display:'flex',  gap:20, maxWidth: '90%', marginTop:20, overflow: 'auto'}}>
            {movies.length>0 && movies.slice(10,20).map((film, index)=>{
              return <div style={{display:'flex', alignItems:'center'}} >
                <img src={film.backdrop_path} style={{borderRadius: 12}} alt="" height={294} width={520} />
              </div>
            })}
        </div>
      </div>

      <div style={{marginLeft:100, marginTop: 50,}}>
        <div style={{
          color: '#FFF',
          fontFamily: 'Helvetica Neue',
          fontSize: '30px',
          fontWeight: 700,
        }}>
          Recommended
        </div>
        <div style={{display:'flex',  gap:20, maxWidth: '90%', marginTop:20, overflow: 'auto'}}>
            {movies.length>0 && movies.slice(20,30).map((film, index)=>{
              return <div style={{display:'flex', alignItems:'center'}} >
                <img src={film.poster_path} alt="" height={696} width={410} />
              </div>
            })}
        </div>
      </div>

      <div style={{marginLeft:100, marginTop: 50,}}>
        <div style={{
          color: '#FFF',
          fontFamily: 'Helvetica Neue',
          fontSize: '30px',
          fontWeight: 700,
        }}>
          Netflix Originals
        </div>
        <div style={{display:'flex',  gap:20, maxWidth: '90%', marginTop:20, overflow: 'auto'}}>
            {movies.length>0 && movies.slice(30,40).map((film, index)=>{
              return <div style={{display:'flex', alignItems:'center'}} >
                <img src={film.poster_path} alt="" height={696} width={410} />
              </div>
            })}
        </div>
      </div>
      </div>:
      <div  style={{display:'flex', justifyContent:'center', alignItems:'center', marginTop: '10%'}}>
      <Spinner color='red'/>
      </div>}
    </div>
  )
}

export default Movies