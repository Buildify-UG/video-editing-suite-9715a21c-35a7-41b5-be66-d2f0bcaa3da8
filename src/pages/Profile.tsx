import React, { useState } from 'react';
import { User, Mail, Phone, MapPin, LogOut, Settings, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Profile = () => {
  const [editMode, setEditMode] = useState(false);
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    phone: '+1 (555) 000-0000',
    address: '123 Main St, City, State 12345',
  });

  const [tempProfile, setTempProfile] = useState(profile);

  const handleSave = () => {
    setProfile(tempProfile);
    setEditMode(false);
  };

  const handleCancel = () => {
    setTempProfile(profile);
    setEditMode(false);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center">
          <Link to="/" className="text-primary hover:text-primary/80">
            <ArrowLeft size={24} />
          </Link>
          <h1 className="text-2xl font-bold text-foreground ml-4">My Profile</h1>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Profile Card */}
        <div className="bg-card border border-border rounded-lg shadow-lg p-8 mb-8">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                <User size={32} className="text-primary-foreground" />
              </div>
              <div className="ml-4">
                <h2 className="text-2xl font-bold text-foreground">{profile.name}</h2>
                <p className="text-muted-foreground">Premium Member</p>
              </div>
            </div>
            <Button
              onClick={() => setEditMode(!editMode)}
              className="bg-primary hover:bg-primary/90 text-primary-foreground flex items-center gap-2"
            >
              <Settings size={18} />
              {editMode ? 'Cancel' : 'Edit Profile'}
            </Button>
          </div>

          {/* Profile Details */}
          <div className="space-y-4">
            {/* Name */}
            <div className="flex items-center p-4 bg-background rounded-lg">
              <User size={20} className="text-primary mr-4" />
              <div className="flex-1">
                <label className="text-sm text-muted-foreground">Full Name</label>
                {editMode ? (
                  <input
                    type="text"
                    value={tempProfile.name}
                    onChange={(e) => setTempProfile({ ...tempProfile, name: e.target.value })}
                    className="w-full bg-card border border-border rounded px-2 py-1 text-foreground"
                  />
                ) : (
                  <p className="text-foreground font-semibold">{profile.name}</p>
                )}
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center p-4 bg-background rounded-lg">
              <Mail size={20} className="text-primary mr-4" />
              <div className="flex-1">
                <label className="text-sm text-muted-foreground">Email</label>
                {editMode ? (
                  <input
                    type="email"
                    value={tempProfile.email}
                    onChange={(e) => setTempProfile({ ...tempProfile, email: e.target.value })}
                    className="w-full bg-card border border-border rounded px-2 py-1 text-foreground"
                  />
                ) : (
                  <p className="text-foreground font-semibold">{profile.email}</p>
                )}
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center p-4 bg-background rounded-lg">
              <Phone size={20} className="text-primary mr-4" />
              <div className="flex-1">
                <label className="text-sm text-muted-foreground">Phone</label>
                {editMode ? (
                  <input
                    type="tel"
                    value={tempProfile.phone}
                    onChange={(e) => setTempProfile({ ...tempProfile, phone: e.target.value })}
                    className="w-full bg-card border border-border rounded px-2 py-1 text-foreground"
                  />
                ) : (
                  <p className="text-foreground font-semibold">{profile.phone}</p>
                )}
              </div>
            </div>

            {/* Address */}
            <div className="flex items-center p-4 bg-background rounded-lg">
              <MapPin size={20} className="text-primary mr-4" />
              <div className="flex-1">
                <label className="text-sm text-muted-foreground">Address</label>
                {editMode ? (
                  <input
                    type="text"
                    value={tempProfile.address}
                    onChange={(e) => setTempProfile({ ...tempProfile, address: e.target.value })}
                    className="w-full bg-card border border-border rounded px-2 py-1 text-foreground"
                  />
                ) : (
                  <p className="text-foreground font-semibold">{profile.address}</p>
                )}
              </div>
            </div>
          </div>

          {/* Save/Cancel Buttons */}
          {editMode && (
            <div className="flex gap-4 mt-8">
              <Button
                onClick={handleSave}
                className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                Save Changes
              </Button>
              <Button
                onClick={handleCancel}
                className="flex-1 bg-muted hover:bg-border text-foreground"
              >
                Cancel
              </Button>
            </div>
          )}
        </div>

        {/* Account Settings */}
        <div className="bg-card border border-border rounded-lg shadow-lg p-8 mb-8">
          <h3 className="text-xl font-bold text-foreground mb-4">Account Settings</h3>
          <div className="space-y-3">
            <Link to="/checkout" className="block p-4 bg-background rounded-lg hover:bg-muted transition">
              <p className="font-semibold text-foreground">Payment Methods</p>
              <p className="text-sm text-muted-foreground">Manage credit cards and wallets</p>
            </Link>
            <Link to="/inbox" className="block p-4 bg-background rounded-lg hover:bg-muted transition">
              <p className="font-semibold text-foreground">Messages</p>
              <p className="text-sm text-muted-foreground">View your inbox and notifications</p>
            </Link>
            <Link to="/ratings" className="block p-4 bg-background rounded-lg hover:bg-muted transition">
              <p className="font-semibold text-foreground">My Reviews</p>
              <p className="text-sm text-muted-foreground">View and manage your ratings</p>
            </Link>
          </div>
        </div>

        {/* Logout */}
        <Button
          className="w-full bg-destructive hover:bg-destructive/90 text-primary-foreground flex items-center justify-center gap-2"
        >
          <LogOut size={18} />
          Sign Out
        </Button>
      </div>
    </div>
  );
};

export default Profile;
