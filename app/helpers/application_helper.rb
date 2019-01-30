module ApplicationHelper
  def underscorize(string)
    string.downcase.gsub(/[!@#$%^&*()-=_+|;':",.<>?']/, '').tr(' ', '_')
  end
end
