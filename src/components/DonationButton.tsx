import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

interface DonationButtonProps {
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;
}

const DonationButton = ({ size = "default", className = "" }: DonationButtonProps) => {
  const { t } = useTranslation();
  const [donationUrl, setDonationUrl] = useState("https://www.helloasso.com");

  useEffect(() => {
    const fetchDonationUrl = async () => {
      const { data } = await supabase
        .from('site_settings')
        .select('value')
        .eq('key', 'donation_url')
        .maybeSingle();
      if (data?.value) {
        setDonationUrl(data.value);
      }
    };
    fetchDonationUrl();
  }, []);

  const handleClick = () => {
    window.open(donationUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <Button
      onClick={handleClick}
      size={size}
      className={`bg-warm-gold hover:bg-warm-gold/90 text-warm-dark gap-2 ${className}`}
    >
      <Heart className="h-4 w-4" />
      {t('donation.button')}
    </Button>
  );
};

export default DonationButton;
