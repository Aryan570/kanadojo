import type { Metadata } from 'next';
import WordsMenu from '@/components/Dojo/Vocab/Menu';

export const metadata: Metadata = {
  title: 'KanaDojo: Vocabulary',
  description:
    'The vocabulary dojo is the place where you can learn and practice the words and vocabulary used in day-to-day Japanese.',
  openGraph: {
    title: 'KanaDojo: Vocabulary',
    description:
      'The vocabulary dojo is the place where you can learn and practice the words and vocabulary used in day-to-day Japanese.',
    url: 'https://kanadojo.com/vocabulary',
    type: 'website',
    locale: 'en_US'
  }
};

export default function VocabPage() {
  return <WordsMenu />;
}
