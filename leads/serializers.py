from rest_framework import serializers
from .models import *

# Lead Serializer


class LeadSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lead
        fields = '__all__'
