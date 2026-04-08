import { useEffect, useState } from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Save, ExternalLink } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useTranslation } from 'react-i18next';
import { toast } from 'sonner';

const AdminSettings = () => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [settings, setSettings] = useState({
    donation_url: '',
  });

  const fetchSettings = async () => {
    const { data, error } = await supabase
      .from('site_settings')
      .select('key, value');

    if (error) {
      console.error('Error fetching settings:', error);
      toast.error(t('admin.errorFetching'));
    } else {
      const settingsMap: Record<string, string> = {};
      data?.forEach((item) => {
        settingsMap[item.key] = item.value || '';
      });
      setSettings({
        donation_url: settingsMap.donation_url || 'https://www.helloasso.com',
      });
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchSettings();
  }, []);

  const handleSave = async () => {
    setSaving(true);

    const { error } = await supabase
      .from('site_settings')
      .upsert([
        { key: 'donation_url', value: settings.donation_url },
      ], { onConflict: 'key' });

    if (error) {
      toast.error(t('admin.errorSaving'));
    } else {
      toast.success(t('admin.settingsSaved'));
    }
    setSaving(false);
  };

  if (loading) {
    return (
      <AdminLayout>
        <div className="text-center py-10">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#ffd630] mx-auto"></div>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="space-y-6 max-w-2xl">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">{t('admin.settings')}</h1>
          <p className="text-gray-500 mt-1">{t('admin.manageSettings')}</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>{t('admin.donationSettings')}</CardTitle>
            <CardDescription>{t('admin.donationSettingsDesc')}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="donation_url">{t('admin.donationUrl')}</Label>
              <div className="flex gap-2">
                <Input
                  id="donation_url"
                  value={settings.donation_url}
                  onChange={(e) => setSettings({ ...settings, donation_url: e.target.value })}
                  placeholder="https://www.helloasso.com/votre-association"
                />
                {settings.donation_url && (
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => window.open(settings.donation_url, '_blank')}
                  >
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                )}
              </div>
              <p className="text-sm text-gray-500">{t('admin.donationUrlHelp')}</p>
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-end">
          <Button 
            onClick={handleSave} 
            disabled={saving}
            className="bg-[#ffd630] hover:bg-[#ffd630]/90 text-black"
          >
            {saving ? (
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-black mr-2"></div>
            ) : (
              <Save className="mr-2 h-4 w-4" />
            )}
            {t('admin.saveSettings')}
          </Button>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminSettings;
