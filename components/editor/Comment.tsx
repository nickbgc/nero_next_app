import { Fragment, useState } from 'react';
import {
  EmojiHappyIcon as EmojiHappyIconOutline,
  PaperClipIcon,
} from '@heroicons/react/outline';
import { Listbox, Transition } from '@headlessui/react';
import {
  EmojiHappyIcon as EmojiHappyIconSolid,
  EmojiSadIcon,
  FireIcon,
  HeartIcon,
  ThumbUpIcon,
  XIcon,
} from '@heroicons/react/solid';

const moods = [
  {
    name: 'Excited',
    value: 'excited',
    icon: FireIcon,
    iconColor: 'text-white',
    bgColor: 'bg-red-500',
  },
  {
    name: 'Loved',
    value: 'loved',
    icon: HeartIcon,
    iconColor: 'text-white',
    bgColor: 'bg-pink-400',
  },
  {
    name: 'Happy',
    value: 'happy',
    icon: EmojiHappyIconSolid,
    iconColor: 'text-white',
    bgColor: 'bg-green-400',
  },
  {
    name: 'Sad',
    value: 'sad',
    icon: EmojiSadIcon,
    iconColor: 'text-white',
    bgColor: 'bg-yellow-400',
  },
  {
    name: 'Thumbsy',
    value: 'thumbsy',
    icon: ThumbUpIcon,
    iconColor: 'text-white',
    bgColor: 'bg-blue-500',
  },
  {
    name: 'I feel nothing',
    value: null,
    icon: XIcon,
    iconColor: 'text-gray-400',
    bgColor: 'bg-transparent',
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function CommentEditor() {
  const [selected, setSelected] = useState(moods[5]);

  return (
    <div className="flex items-start space-x-4">
      <div className="flex-shrink-0">
        <img
          className="inline-block w-10 h-10 rounded-full"
          src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
      </div>
      <div className="flex-1 min-w-0">
        <form action="#">
          <div className=" focus-within:border-orange-600">
            <label htmlFor="comment" className="sr-only">
              Add your comment
            </label>
            <textarea
              rows={3}
              name="comment"
              id="comment"
              className="block w-full p-2 pb-2 border-0 border-b border-transparent rounded-md resize-none bg-light_background focus:ring-0 focus:border-orange-600 sm:text-sm"
              placeholder="Add your comment..."
              defaultValue={''}
            />
          </div>
          <div className="flex justify-between pt-2">
            <div className="flex items-center space-x-5">
              <div className="flow-root">
                <button
                  type="button"
                  className="inline-flex items-center justify-center w-10 h-10 -m-2 text-gray-400 rounded-full hover:text-gray-500"
                >
                  <PaperClipIcon className="w-6 h-6" aria-hidden="true" />
                  <span className="sr-only">Attach a file</span>
                </button>
              </div>
              <div className="flow-root">
                <Listbox value={selected} onChange={setSelected}>
                  {({ open }) => (
                    <>
                      <Listbox.Label className="sr-only">
                        Your mood
                      </Listbox.Label>
                      <div className="relative">
                        <Listbox.Button className="relative inline-flex items-center justify-center w-10 h-10 -m-2 text-gray-400 rounded-full hover:text-gray-500">
                          <span className="flex items-center justify-center">
                            {selected.value === null ? (
                              <span>
                                <EmojiHappyIconOutline
                                  className="flex-shrink-0 w-6 h-6"
                                  aria-hidden="true"
                                />
                                <span className="sr-only">Add your mood</span>
                              </span>
                            ) : (
                              <span>
                                <span
                                  className={classNames(
                                    selected.bgColor,
                                    'w-8 h-8 rounded-full flex items-center justify-center',
                                  )}
                                >
                                  <selected.icon
                                    className="flex-shrink-0 w-5 h-5 text-white"
                                    aria-hidden="true"
                                  />
                                </span>
                                <span className="sr-only">{selected.name}</span>
                              </span>
                            )}
                          </span>
                        </Listbox.Button>

                        <Transition
                          show={open}
                          as={Fragment}
                          leave="transition ease-in duration-100"
                          leaveFrom="opacity-100"
                          leaveTo="opacity-0"
                        >
                          <Listbox.Options className="absolute z-10 py-3 -ml-6 text-base rounded-lg shadow bg-light_background w-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:ml-auto sm:w-64 sm:text-sm">
                            {moods.map((mood) => (
                              <Listbox.Option
                                key={mood.value}
                                className={({ active }) =>
                                  classNames(
                                    active
                                      ? 'bg-background'
                                      : 'bg-light_background',
                                    'cursor-default select-none relative py-2 px-3',
                                  )
                                }
                                value={mood}
                              >
                                <div className="flex items-center">
                                  <div
                                    className={classNames(
                                      mood.bgColor,
                                      'w-8 h-8 rounded-full flex items-center justify-center',
                                    )}
                                  >
                                    <mood.icon
                                      className={classNames(
                                        mood.iconColor,
                                        'flex-shrink-0 h-5 w-5',
                                      )}
                                      aria-hidden="true"
                                    />
                                  </div>
                                  <span className="block ml-3 font-medium text-gray-100 truncate">
                                    {mood.name}
                                  </span>
                                </div>
                              </Listbox.Option>
                            ))}
                          </Listbox.Options>
                        </Transition>
                      </div>
                    </>
                  )}
                </Listbox>
              </div>
            </div>
            <div className="flex-shrink-0">
              <button
                type="submit"
                className="inline-flex items-center px-4 py-2 text-sm font-semibold text-white rounded-md bg-light_background"
              >
                Post
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
