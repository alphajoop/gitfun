import { Copy } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Emoji } from '@/types/types';
import { useToast } from '@/hooks/use-toast';
import { highlight } from 'sugar-high';

interface EmojiCardProps {
  emoji: Emoji;
}

export function EmojiCard({ emoji }: EmojiCardProps) {
  const { toast } = useToast();

  const copyEmoji = () => {
    navigator.clipboard.writeText(emoji.icon);
    toast({
      description: `✅ Copied "${emoji.name}"!`,
    });
  };

  return (
    <Card className="group">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-3xl">{emoji.icon}</span>
            <CardTitle>{emoji.name}</CardTitle>
          </div>
          <button
            onClick={copyEmoji}
            className="opacity-0 transition-opacity group-hover:opacity-100"
          >
            <Copy className="h-4 w-4" />
          </button>
        </div>
        <CardDescription>{emoji.usage}</CardDescription>
      </CardHeader>
      <CardContent>
        <pre className="block w-full overflow-x-auto rounded-md bg-zinc-100 p-2 font-geist_mono text-sm">
          <code
            dangerouslySetInnerHTML={{ __html: highlight(emoji.example) }}
          />
        </pre>
      </CardContent>
    </Card>
  );
}
