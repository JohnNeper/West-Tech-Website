import { useEffect, useState } from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Plus, Pencil, Trash2, Handshake } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useTranslation } from 'react-i18next';
import { toast } from 'sonner';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface Partner {
  id: string;
  name: string;
  logo_url: string | null;
  website_url: string | null;
  description: string | null;
  description_fr: string | null;
  partner_type: string;
  display_order: number;
  is_active: boolean;
}

const AdminPartners = () => {
  const { t } = useTranslation();
  const [partners, setPartners] = useState<Partner[]>([]);
  const [loading, setLoading] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingPartner, setEditingPartner] = useState<Partner | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    logo_url: '',
    website_url: '',
    description: '',
    description_fr: '',
    partner_type: 'partner',
    display_order: 0,
    is_active: true,
  });

  const partnerTypes = [
    { value: 'academic', label: t('partners.academic') },
    { value: 'corporate', label: t('partners.corporate') },
    { value: 'government', label: t('partners.government') },
    { value: 'community', label: t('partners.community') },
    { value: 'partner', label: t('admin.generalPartner') },
  ];

  const fetchPartners = async () => {
    const { data, error } = await supabase
      .from('partners')
      .select('*')
      .order('display_order', { ascending: true });

    if (error) {
      console.error('Error fetching partners:', error);
      toast.error(t('admin.errorFetching'));
    } else {
      setPartners(data || []);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchPartners();
  }, []);

  const resetForm = () => {
    setFormData({
      name: '',
      logo_url: '',
      website_url: '',
      description: '',
      description_fr: '',
      partner_type: 'partner',
      display_order: 0,
      is_active: true,
    });
    setEditingPartner(null);
  };

  const handleEdit = (partner: Partner) => {
    setEditingPartner(partner);
    setFormData({
      name: partner.name,
      logo_url: partner.logo_url || '',
      website_url: partner.website_url || '',
      description: partner.description || '',
      description_fr: partner.description_fr || '',
      partner_type: partner.partner_type || 'partner',
      display_order: partner.display_order,
      is_active: partner.is_active,
    });
    setIsDialogOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const partnerData = {
      name: formData.name,
      logo_url: formData.logo_url || null,
      website_url: formData.website_url || null,
      description: formData.description || null,
      description_fr: formData.description_fr || null,
      partner_type: formData.partner_type,
      display_order: formData.display_order,
      is_active: formData.is_active,
    };

    if (editingPartner) {
      const { error } = await supabase
        .from('partners')
        .update(partnerData)
        .eq('id', editingPartner.id);

      if (error) {
        toast.error(t('admin.errorUpdating'));
      } else {
        toast.success(t('admin.partnerUpdated'));
        fetchPartners();
      }
    } else {
      const { error } = await supabase
        .from('partners')
        .insert([partnerData]);

      if (error) {
        toast.error(t('admin.errorCreating'));
      } else {
        toast.success(t('admin.partnerCreated'));
        fetchPartners();
      }
    }

    setIsDialogOpen(false);
    resetForm();
  };

  const handleDelete = async (id: string) => {
    if (!confirm(t('admin.confirmDelete'))) return;

    const { error } = await supabase.from('partners').delete().eq('id', id);

    if (error) {
      toast.error(t('admin.errorDeleting'));
    } else {
      toast.success(t('admin.partnerDeleted'));
      fetchPartners();
    }
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{t('admin.partners')}</h1>
            <p className="text-gray-500 mt-1">{t('admin.managePartners')}</p>
          </div>
          <Dialog open={isDialogOpen} onOpenChange={(open) => {
            setIsDialogOpen(open);
            if (!open) resetForm();
          }}>
            <DialogTrigger asChild>
              <Button className="bg-[#ffd630] hover:bg-[#ffd630]/90 text-black">
                <Plus className="mr-2 h-4 w-4" />
                {t('admin.addPartner')}
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>
                  {editingPartner ? t('admin.editPartner') : t('admin.addPartner')}
                </DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">{t('admin.name')} *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="partner_type">{t('admin.partnerType')}</Label>
                    <Select
                      value={formData.partner_type}
                      onValueChange={(value) => setFormData({ ...formData, partner_type: value })}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {partnerTypes.map((type) => (
                          <SelectItem key={type.value} value={type.value}>
                            {type.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="display_order">{t('admin.displayOrder')}</Label>
                    <Input
                      id="display_order"
                      type="number"
                      value={formData.display_order}
                      onChange={(e) => setFormData({ ...formData, display_order: parseInt(e.target.value) || 0 })}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="logo_url">{t('admin.logoUrl')}</Label>
                  <Input
                    id="logo_url"
                    value={formData.logo_url}
                    onChange={(e) => setFormData({ ...formData, logo_url: e.target.value })}
                    placeholder="https://..."
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="website_url">{t('admin.websiteUrl')}</Label>
                  <Input
                    id="website_url"
                    value={formData.website_url}
                    onChange={(e) => setFormData({ ...formData, website_url: e.target.value })}
                    placeholder="https://..."
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="description">{t('admin.descriptionEn')}</Label>
                    <Textarea
                      id="description"
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      rows={3}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="description_fr">{t('admin.descriptionFr')}</Label>
                    <Textarea
                      id="description_fr"
                      value={formData.description_fr}
                      onChange={(e) => setFormData({ ...formData, description_fr: e.target.value })}
                      rows={3}
                    />
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch
                    id="is_active"
                    checked={formData.is_active}
                    onCheckedChange={(checked) => setFormData({ ...formData, is_active: checked })}
                  />
                  <Label htmlFor="is_active">{t('admin.active')}</Label>
                </div>
                <div className="flex justify-end gap-2 pt-4">
                  <Button type="button" variant="outline" onClick={() => {
                    setIsDialogOpen(false);
                    resetForm();
                  }}>
                    {t('admin.cancel')}
                  </Button>
                  <Button type="submit" className="bg-[#ffd630] hover:bg-[#ffd630]/90 text-black">
                    {editingPartner ? t('admin.update') : t('admin.create')}
                  </Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        {loading ? (
          <div className="text-center py-10">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#ffd630] mx-auto"></div>
          </div>
        ) : partners.length === 0 ? (
          <Card>
            <CardContent className="py-10 text-center">
              <Handshake className="h-12 w-12 mx-auto text-gray-400 mb-4" />
              <p className="text-gray-500">{t('admin.noPartners')}</p>
            </CardContent>
          </Card>
        ) : (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {partners.map((partner) => (
              <Card key={partner.id}>
                <CardContent className="p-4">
                  <div className="flex items-start gap-4">
                    {partner.logo_url ? (
                      <img
                        src={partner.logo_url}
                        alt={partner.name}
                        className="w-16 h-16 rounded-lg object-contain bg-gray-50"
                      />
                    ) : (
                      <div className="w-16 h-16 rounded-lg bg-gray-200 flex items-center justify-center">
                        <Handshake className="h-8 w-8 text-gray-400" />
                      </div>
                    )}
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold">{partner.name}</h3>
                        {!partner.is_active && (
                          <span className="text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded">
                            {t('admin.inactive')}
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-gray-500 capitalize">{partner.partner_type}</p>
                    </div>
                    <div className="flex gap-1">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleEdit(partner)}
                      >
                        <Pencil className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-red-600 hover:text-red-700"
                        onClick={() => handleDelete(partner.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </AdminLayout>
  );
};

export default AdminPartners;
