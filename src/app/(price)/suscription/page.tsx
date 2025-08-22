import { SubscriptionSection } from '@/components/shared/Price';
import { HeaderPrice } from '@/components/shared/HeaderPrice';

export default function SubscriptionPage() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-900 text-white">
      <HeaderPrice />
      <SubscriptionSection />
    </div>
  );
}
