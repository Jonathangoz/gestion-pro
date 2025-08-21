import { SubscriptionSection } from '@/components/shared/Price';
import { Header } from '@/components/shared/Header';

export default function SubscriptionPage() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-900 text-white">
      <Header />
      <SubscriptionSection />
    </div>
  );
}
