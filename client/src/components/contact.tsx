import { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

interface ContactFormData {
  fullName: string;
  company: string;
  email: string;
  serviceInterest: string;
  message: string;
}

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: "",
    company: "",
    email: "",
    serviceInterest: "",
    message: ""
  });

  const contactMutation = useMutation({
    mutationFn: (data: ContactFormData) => apiRequest("POST", "/api/contact", data),
    onSuccess: () => {
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for your inquiry. We'll get back to you within 24 hours.",
      });
      setFormData({
        fullName: "",
        company: "",
        email: "",
        serviceInterest: "",
        message: ""
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.serviceInterest || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }
    contactMutation.mutate(formData);
  };

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-dark mb-4">Get Started Today</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your e-waste into valuable resources? Contact our experts for a consultation.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-dark mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="text-green-primary mt-1 mr-4 h-5 w-5" />
                <div>
                  <div className="font-semibold">Address</div>
                  <div className="text-gray-600">Industrial Area, Bangalore, Karnataka, India</div>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="text-green-primary mt-1 mr-4 h-5 w-5" />
                <div>
                  <div className="font-semibold">Phone</div>
                  <div className="text-gray-600">+91 80 1234 5678</div>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="text-green-primary mt-1 mr-4 h-5 w-5" />
                <div>
                  <div className="font-semibold">Email</div>
                  <div className="text-gray-600">info@greenbytesolutions.com</div>
                </div>
              </div>
              <div className="flex items-start">
                <Clock className="text-green-primary mt-1 mr-4 h-5 w-5" />
                <div>
                  <div className="font-semibold">Business Hours</div>
                  <div className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </Label>
                <Input 
                  id="fullName"
                  type="text" 
                  value={formData.fullName}
                  onChange={(e) => handleInputChange('fullName', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-primary focus:border-transparent" 
                  placeholder="Your full name"
                />
              </div>
              <div>
                <Label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                  Company
                </Label>
                <Input 
                  id="company"
                  type="text" 
                  value={formData.company}
                  onChange={(e) => handleInputChange('company', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-primary focus:border-transparent" 
                  placeholder="Your company name"
                />
              </div>
              <div>
                <Label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </Label>
                <Input 
                  id="email"
                  type="email" 
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-primary focus:border-transparent" 
                  placeholder="your.email@company.com"
                />
              </div>
              <div>
                <Label htmlFor="serviceInterest" className="block text-sm font-medium text-gray-700 mb-2">
                  Service Interest *
                </Label>
                <Select value={formData.serviceInterest} onValueChange={(value) => handleInputChange('serviceInterest', value)}>
                  <SelectTrigger className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-primary focus:border-transparent">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="metal-recovery">Metal Recovery</SelectItem>
                    <SelectItem value="epr-certificates">EPR Certificates</SelectItem>
                    <SelectItem value="data-destruction">Data Destruction</SelectItem>
                    <SelectItem value="recycled-plastics">Recycled Plastics</SelectItem>
                    <SelectItem value="partnership-inquiry">Partnership Inquiry</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </Label>
                <Textarea 
                  id="message"
                  rows={4} 
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-primary focus:border-transparent" 
                  placeholder="Tell us about your e-waste needs..."
                />
              </div>
              <Button 
                type="submit" 
                disabled={contactMutation.isPending}
                className="w-full bg-orange-accent text-white py-3 rounded-lg font-semibold hover:bg-orange-accent/90 transition-colors disabled:opacity-50"
              >
                {contactMutation.isPending ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
