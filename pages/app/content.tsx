import { CurrencyDollarIcon } from '@heroicons/react/outline';
import CommentEditor from 'components/editor/Comment';
import CommentStream from 'components/stream/CommentStream';
import SidebarLayout from 'layouts/SidebarLayout';
import YouTube from 'react-youtube';

export default function Activity() {
  return (
    <SidebarLayout>
      <div className="divide-y divide-light_background">
        <div className="w-full">
          <div className="relative flex flex-col">
            <div className="flex w-full h-[28rem] ">
              <YouTube
                opts={{ width: '100%', height: '100%' }}
                videoId="llDikI2hTtk"
                className="w-full h-full"
              />
            </div>
            <div className="bottom-0 left-0 w-full h-auto max-w-md p-4 ">
              <div className="flex flex-col text-gray-200 divide-y divide-light_background">
                <p className="py-1 text-2xl font-bold text-white lg:text-4xl">
                  Vegas Highlights
                </p>
                <p className="py-1">View to Earn</p>
                <div className="flex items-center gap-2 py-2">
                  <p className="text-xl font-bold">{10} </p>
                  <CurrencyDollarIcon className="w-6 h-6 text-orange-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full px-4 py-12">
          <CommentEditor />
        </div>
        <div className="w-full px-4 py-12">
          <CommentStream />
        </div>
      </div>
    </SidebarLayout>
  );
}
