import { useEffect, useState } from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Plus, Pencil, Trash2, Newspaper } from 'lucide-react';
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

interface News {
  id: string;
  title: string;
  title_fr: string | null;
  content: string | null;
  content_fr: string | null;
  excerpt: string | null;
  excerpt_fr: string | null;
  image_url: string | null;
  is_published: boolean;
  published_at: string | null;
  created_at: string;
}

const AdminNews = () => {
  const { t } = useTranslation();
  const [news, setNews] = useState<News[]>([]);
  const [loading, setLoading] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingNews, setEditingNews] = useState<News | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    title_fr: '',
    content: '',
    content_fr: '',
    excerpt: '',
    excerpt_fr: '',
    image_url: '',
    is_published: false,
  });

  const fetchNews = async () => {
    const { data, error } = await supabase
      .from('news')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching news:', error);
      toast.error(t('admin.errorFetching'));
    } else {
      setNews(data || []);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchNews();
  }, []);

  const resetForm = () => {
    setFormData({
      title: '',
      title_fr: '',
      content: '',
      content_fr: '',
      excerpt: '',
      excerpt_fr: '',
      image_url: '',
      is_published: false,
    });
    setEditingNews(null);
  };

  const handleEdit = (item: News) => {
    setEditingNews(item);
    setFormData({
      title: item.title,
      title_fr: item.title_fr || '',
      content: item.content || '',
      content_fr: item.content_fr || '',
      excerpt: item.excerpt || '',
      excerpt_fr: item.excerpt_fr || '',
      image_url: item.image_url || '',
      is_published: item.is_published,
    });
    setIsDialogOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const newsData = {
      title: formData.title,
      title_fr: formData.title_fr || null,
      content: formData.content || null,
      content_fr: formData.content_fr || null,
      excerpt: formData.excerpt || null,
      excerpt_fr: formData.excerpt_fr || null,
      image_url: formData.image_url || null,
      is_published: formData.is_published,
      published_at: formData.is_published ? new Date().toISOString() : null,
    };

    if (editingNews) {
      const { error } = await supabase
        .from('news')
        .update(newsData)
        .eq('id', editingNews.id);

      if (error) {
        toast.error(t('admin.errorUpdating'));
      } else {
        toast.success(t('admin.newsUpdated'));
        fetchNews();
      }
    } else {
      const { error } = await supabase
        .from('news')
        .insert([newsData]);

      if (error) {
        toast.error(t('admin.errorCreating'));
      } else {
        toast.success(t('admin.newsCreated'));
        fetchNews();
      }
    }

    setIsDialogOpen(false);
    resetForm();
  };

  const handleDelete = async (id: string) => {
    if (!confirm(t('admin.confirmDelete'))) return;

    const { error } = await supabase.from('news').delete().eq('id', id);

    if (error) {
      toast.error(t('admin.errorDeleting'));
    } else {
      toast.success(t('admin.newsDeleted'));
      fetchNews();
    }
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{t('admin.news')}</h1>
            <p className="text-gray-500 mt-1">{t('admin.manageNews')}</p>
          </div>
          <Dialog open={isDialogOpen} onOpenChange={(open) => {
            setIsDialogOpen(open);
            if (!open) resetForm();
          }}>
            <DialogTrigger asChild>
              <Button className="bg-[#ffd630] hover:bg-[#ffd630]/90 text-black">
                <Plus className="mr-2 h-4 w-4" />
                {t('admin.addNews')}
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>
                  {editingNews ? t('admin.editNews') : t('admin.addNews')}
                </DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="title">{t('admin.titleEn')} *</Label>
                    <Input
                      id="title"
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="title_fr">{t('admin.titleFr')}</Label>
                    <Input
                      id="title_fr"
                      value={formData.title_fr}
                      onChange={(e) => setFormData({ ...formData, title_fr: e.target.value })}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="excerpt">{t('admin.excerptEn')}</Label>
                    <Textarea
                      id="excerpt"
                      value={formData.excerpt}
                      onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                      rows={2}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="excerpt_fr">{t('admin.excerptFr')}</Label>
                    <Textarea
                      id="excerpt_fr"
                      value={formData.excerpt_fr}
                      onChange={(e) => setFormData({ ...formData, excerpt_fr: e.target.value })}
                      rows={2}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="content">{t('admin.contentEn')}</Label>
                    <Textarea
                      id="content"
                      value={formData.content}
                      onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                      rows={5}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="content_fr">{t('admin.contentFr')}</Label>
                    <Textarea
                      id="content_fr"
                      value={formData.content_fr}
                      onChange={(e) => setFormData({ ...formData, content_fr: e.target.value })}
                      rows={5}
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
                <div className="flex items-center space-x-2">
                  <Switch
                    id="is_published"
                    checked={formData.is_published}
                    onCheckedChange={(checked) => setFormData({ ...formData, is_published: checked })}
                  />
                  <Label htmlFor="is_published">{t('admin.published')}</Label>
                </div>
                <div className="flex justify-end gap-2 pt-4">
                  <Button type="button" variant="outline" onClick={() => {
                    setIsDialogOpen(false);
                    resetForm();
                  }}>
                    {t('admin.cancel')}
                  </Button>
                  <Button type="submit" className="bg-[#ffd630] hover:bg-[#ffd630]/90 text-black">
                    {editingNews ? t('admin.update') : t('admin.create')}
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
        ) : news.length === 0 ? (
          <Card>
            <CardContent className="py-10 text-center">
              <Newspaper className="h-12 w-12 mx-auto text-gray-400 mb-4" />
              <p className="text-gray-500">{t('admin.noNews')}</p>
            </CardContent>
          </Card>
        ) : (
          <div className="grid gap-4">
            {news.map((item) => (
              <Card key={item.id}>
                <CardContent className="p-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold text-lg">{item.title}</h3>
                        {!item.is_published && (
                          <span className="text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded">
                            {t('admin.draft')}
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-gray-500 mt-1">
                        {new Date(item.created_at).toLocaleDateString()}
                      </p>
                      {item.excerpt && (
                        <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                          {item.excerpt}
                        </p>
                      )}
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => handleEdit(item)}
                      >
                        <Pencil className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        className="text-red-600 hover:text-red-700"
                        onClick={() => handleDelete(item.id)}
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

export default AdminNews;
