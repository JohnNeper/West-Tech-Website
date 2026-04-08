import { useEffect, useState } from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Plus, Pencil, Trash2, Users } from 'lucide-react';
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

interface TeamMember {
  id: string;
  name: string;
  role: string | null;
  role_fr: string | null;
  bio: string | null;
  bio_fr: string | null;
  image_url: string | null;
  linkedin_url: string | null;
  twitter_url: string | null;
  email: string | null;
  display_order: number;
  is_active: boolean;
}

const AdminTeam = () => {
  const { t } = useTranslation();
  const [team, setTeam] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingMember, setEditingMember] = useState<TeamMember | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    role_fr: '',
    bio: '',
    bio_fr: '',
    image_url: '',
    linkedin_url: '',
    twitter_url: '',
    email: '',
    display_order: 0,
    is_active: true,
  });

  const fetchTeam = async () => {
    const { data, error } = await supabase
      .from('team_members')
      .select('*')
      .order('display_order', { ascending: true });

    if (error) {
      console.error('Error fetching team:', error);
      toast.error(t('admin.errorFetching'));
    } else {
      setTeam(data || []);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchTeam();
  }, []);

  const resetForm = () => {
    setFormData({
      name: '',
      role: '',
      role_fr: '',
      bio: '',
      bio_fr: '',
      image_url: '',
      linkedin_url: '',
      twitter_url: '',
      email: '',
      display_order: 0,
      is_active: true,
    });
    setEditingMember(null);
  };

  const handleEdit = (member: TeamMember) => {
    setEditingMember(member);
    setFormData({
      name: member.name,
      role: member.role || '',
      role_fr: member.role_fr || '',
      bio: member.bio || '',
      bio_fr: member.bio_fr || '',
      image_url: member.image_url || '',
      linkedin_url: member.linkedin_url || '',
      twitter_url: member.twitter_url || '',
      email: member.email || '',
      display_order: member.display_order,
      is_active: member.is_active,
    });
    setIsDialogOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const memberData = {
      name: formData.name,
      role: formData.role || null,
      role_fr: formData.role_fr || null,
      bio: formData.bio || null,
      bio_fr: formData.bio_fr || null,
      image_url: formData.image_url || null,
      linkedin_url: formData.linkedin_url || null,
      twitter_url: formData.twitter_url || null,
      email: formData.email || null,
      display_order: formData.display_order,
      is_active: formData.is_active,
    };

    if (editingMember) {
      const { error } = await supabase
        .from('team_members')
        .update(memberData)
        .eq('id', editingMember.id);

      if (error) {
        toast.error(t('admin.errorUpdating'));
      } else {
        toast.success(t('admin.teamMemberUpdated'));
        fetchTeam();
      }
    } else {
      const { error } = await supabase
        .from('team_members')
        .insert([memberData]);

      if (error) {
        toast.error(t('admin.errorCreating'));
      } else {
        toast.success(t('admin.teamMemberCreated'));
        fetchTeam();
      }
    }

    setIsDialogOpen(false);
    resetForm();
  };

  const handleDelete = async (id: string) => {
    if (!confirm(t('admin.confirmDelete'))) return;

    const { error } = await supabase.from('team_members').delete().eq('id', id);

    if (error) {
      toast.error(t('admin.errorDeleting'));
    } else {
      toast.success(t('admin.teamMemberDeleted'));
      fetchTeam();
    }
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{t('admin.team')}</h1>
            <p className="text-gray-500 mt-1">{t('admin.manageTeam')}</p>
          </div>
          <Dialog open={isDialogOpen} onOpenChange={(open) => {
            setIsDialogOpen(open);
            if (!open) resetForm();
          }}>
            <DialogTrigger asChild>
              <Button className="bg-[#ffd630] hover:bg-[#ffd630]/90 text-black">
                <Plus className="mr-2 h-4 w-4" />
                {t('admin.addTeamMember')}
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>
                  {editingMember ? t('admin.editTeamMember') : t('admin.addTeamMember')}
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
                    <Label htmlFor="role">{t('admin.roleEn')}</Label>
                    <Input
                      id="role"
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="role_fr">{t('admin.roleFr')}</Label>
                    <Input
                      id="role_fr"
                      value={formData.role_fr}
                      onChange={(e) => setFormData({ ...formData, role_fr: e.target.value })}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="bio">{t('admin.bioEn')}</Label>
                    <Textarea
                      id="bio"
                      value={formData.bio}
                      onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                      rows={3}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="bio_fr">{t('admin.bioFr')}</Label>
                    <Textarea
                      id="bio_fr"
                      value={formData.bio_fr}
                      onChange={(e) => setFormData({ ...formData, bio_fr: e.target.value })}
                      rows={3}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="image_url">{t('admin.imageUrl')}</Label>
                  <Input
                    id="image_url"
                    value={formData.image_url}
                    onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
                    placeholder="https://..."
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">{t('admin.email')}</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="linkedin_url">LinkedIn</Label>
                    <Input
                      id="linkedin_url"
                      value={formData.linkedin_url}
                      onChange={(e) => setFormData({ ...formData, linkedin_url: e.target.value })}
                      placeholder="https://linkedin.com/in/..."
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="twitter_url">Twitter</Label>
                    <Input
                      id="twitter_url"
                      value={formData.twitter_url}
                      onChange={(e) => setFormData({ ...formData, twitter_url: e.target.value })}
                      placeholder="https://twitter.com/..."
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
                    {editingMember ? t('admin.update') : t('admin.create')}
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
        ) : team.length === 0 ? (
          <Card>
            <CardContent className="py-10 text-center">
              <Users className="h-12 w-12 mx-auto text-gray-400 mb-4" />
              <p className="text-gray-500">{t('admin.noTeamMembers')}</p>
            </CardContent>
          </Card>
        ) : (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {team.map((member) => (
              <Card key={member.id}>
                <CardContent className="p-4">
                  <div className="flex items-start gap-4">
                    {member.image_url ? (
                      <img
                        src={member.image_url}
                        alt={member.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                    ) : (
                      <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center">
                        <Users className="h-8 w-8 text-gray-400" />
                      </div>
                    )}
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold">{member.name}</h3>
                        {!member.is_active && (
                          <span className="text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded">
                            {t('admin.inactive')}
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-gray-500">{member.role}</p>
                    </div>
                    <div className="flex gap-1">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleEdit(member)}
                      >
                        <Pencil className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-red-600 hover:text-red-700"
                        onClick={() => handleDelete(member.id)}
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

export default AdminTeam;
